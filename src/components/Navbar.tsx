import { createSignal, onMount, onCleanup } from "solid-js";

const Navbar = () => {
  const [scrolled, setScrolled] = createSignal(false);

  onMount(() => {
    const el = document.getElementById("root");
    if (!el) return;

    const handleScroll = () => setScrolled(el.scrollTop > 50);
    handleScroll();
    el.addEventListener("scroll", handleScroll, { passive: true });
    onCleanup(() => el.removeEventListener("scroll", handleScroll));
  });

  return (
    <nav class="fixed w-full z-50 py-6">
      <div class="max-w-[3333px] mx-auto px-6 w-full max-[412px]:px-4">
        <div
          class={`flex w-full justify-between items-center transition-all duration-500 rounded-full px-6 py-3 max-[412px]:px-4 max-[412px]:py-2.5 ${
            scrolled()
              ? "bg-white/10 backdrop-blur-2xl border border-white/20"
              : ""
          }`}
        >
          <div class="flex items-center">
            <span class="text-white font-display font-black text-base tracking-tighter uppercase whitespace-nowrap max-[412px]:text-sm">
              HUE SOUND
            </span>
          </div>

          <a
            href="#apply"
            class="inline-flex items-center justify-center rounded-xl max-[412px]:rounded-lg shrink-0
                   bg-white text-black px-6 md:px-8 py-3
                   max-[412px]:px-5 max-[412px]:py-2.5
                   font-display font-black text-[9px] uppercase tracking-[0.15em]
                   max-[412px]:text-[8px] max-[412px]:tracking-[0.1em]
                   whitespace-nowrap
                   transition-transform duration-150 ease-out
                   active:scale-[0.96]
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Отправить заявку
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

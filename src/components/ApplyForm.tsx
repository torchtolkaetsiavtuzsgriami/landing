import { createSignal } from "solid-js";

const Form = () => {
  const [nickname, setNickname] = createSignal("");
  const [contact, setContact] = createSignal("");
  const [trackUrl, setTrackUrl] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [status, setStatus] = createSignal<{ text: string; kind: "ok" | "error" | "warn" } | null>(null);

  const handleSubmit = async (e: SubmitEvent) => {

    e.preventDefault();
    setStatus(null);

    if (
      !nickname().trim() ||
      !contact().trim() ||
      !trackUrl().trim() ||
      !message().trim()
    ) {
      setStatus({ text: "Заполнены не все поля", kind: "warn" });
      return;
    }

    const data = {
      artist: nickname(),
      contact: contact(),
      url: trackUrl(),
      message: message(),
    };

    try {
      const res = await fetch(`/api/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      let body: { ok?: boolean; error?: string | null } | null = null;
      try {
        body = await res.json();
      } catch {
        // тело не JSON
      }

      if (!res.ok) {
        setStatus({
          text: body?.error ?? "Не удалось отправить заявку. Попробуй ещё раз.",
          kind: "error",
        });
        return;
      }

      setStatus({ text: "Заявка отправлена", kind: "ok" });
      setNickname("");
      setContact("");
      setTrackUrl("");
      setMessage("");
    } catch (err) {
      console.error("Ошибка отправки:", err);
      setStatus({ text: "Не удалось отправить заявку. Попробуй ещё раз.", kind: "error" });
    }
  };

  const statusClass = () => {
    const kind = status()?.kind;
    if (kind === "ok") return "text-green-400";
    if (kind === "error") return "text-red-400";
    return "text-yellow-400";
  };

  return (
    <section id="apply" class="w-full pb-20 px-6 scroll-mt-15">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-white font-display font-black uppercase tracking-[0.3em] text-center text-sm mb-12">
          Подать заявку
        </h2>

        <form onSubmit={handleSubmit} class="space-y-6" novalidate>
          <div>
            <label class="block text-white/50 text-[10px] font-display uppercase tracking-[0.2em] mb-2">
              Никнейм
            </label>
            <input
              type="text"
              value={nickname()}
              onInput={(e) => setNickname(e.currentTarget.value)}
              placeholder="Как тебя звать"
              class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <div>
            <label class="block text-white/50 text-[10px] font-display uppercase tracking-[0.2em] mb-2">
              Email или Telegram
            </label>
            <input
              type="text"
              value={contact()}
              onInput={(e) => setContact(e.currentTarget.value)}
              placeholder="@username или mail@example.com"
              class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <div>
            <label class="block text-white/50 text-[10px] font-display uppercase tracking-[0.2em] mb-2">
              Ссылка на трек
            </label>
            <input
              type="url"
              value={trackUrl()}
              onInput={(e) => setTrackUrl(e.currentTarget.value)}
              placeholder="https://..."
              class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <div>
            <label class="block text-white/50 text-[10px] font-display uppercase tracking-[0.2em] mb-2">
              Сообщение
            </label>
            <textarea
              rows={4}
              value={message()}
              onInput={(e) => setMessage(e.currentTarget.value)}
              placeholder="Расскажи о себе или о треке"
              class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 outline-none focus:border-white/30 transition-colors resize-none"
            />
          </div>

          <div class="h-4 text-xs text-center">
            {status() && (
              <span class={statusClass()}>
                {status()!.text}
              </span>
            )}
          </div>

          <button
            type="submit"
            class="inline-flex w-full items-center justify-center rounded-xl
                   bg-white text-black px-6 md:px-8 py-5
                   font-display font-black text-[10px] uppercase tracking-[0.2em] whitespace-nowrap
                   transition-transform duration-150 ease-out
                   active:scale-[0.96]
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;

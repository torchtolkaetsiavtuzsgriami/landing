const socials = [
  { name: "Telegram канал", href: "https://t.me/huesound" },
  { name: "Яндекс Музыка", href: "https://music.yandex.ru/label/6657389" },
  { name: "TikTok", href: "https://www.tiktok.com/@hue.sound" },
  { name: "SoundCloud", href: "https://soundcloud.com" },
  { name: "YouTube канал", href: "https://youtube.com/@hue_sound" },
  { name: "Вконтакте", href: "https://vk.ru/huesound" },
];
const Footer = () => {
  return (
    <footer class="w-full border-t border-white/10 pt-20 pb-10 px-6">
      <div class="max-w-[1400px] mx-auto">

        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          <h2 class="text-white font-display font-black uppercase tracking-tighter text-4xl md:text-6xl leading-none">
            HUE<br />SOUND
          </h2>

          <div class="md:text-right space-y-3">
            <div>
              <p class="text-white/50 font-display uppercase tracking-[0.3em] text-[10px] mb-2">
                Telegram
              </p>
              <a
                href="https://t.me/hueboy"
                class="text-white text-base md:text-lg font-display font-black uppercase tracking-tight hover:text-white/60 transition-colors"
              >
                @hueboy
              </a>
            </div>
            <div>
              <p class="text-white/50 font-display uppercase tracking-[0.3em] text-[10px] mb-2">
                Почта
              </p>
              <a
                href="mailto:Holla.workers@gmail.com"
                class="text-white text-base md:text-lg font-display font-black uppercase tracking-tight hover:text-white/60 transition-colors"
              >
                Holla.workers@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-x-10 gap-y-4">
          {socials.map((s) => (
            <a
              href={s.href}
              class="text-white/60 hover:text-white transition-colors font-display uppercase tracking-[0.2em] text-[10px] relative group"
            >
              {s.name}
              <span class="absolute left-0 -bottom-1 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
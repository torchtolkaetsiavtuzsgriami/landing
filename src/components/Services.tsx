import type { Component } from "solid-js";
import { For } from "solid-js";

type Service = {
  id: number;
  name: string;
  mini: string;
  description: string;
};

const Services: Component = () => {
  const services: Service[] = [
    {
      id: 1,
      name: "Продакшн",
      mini: "От демо до мастера",
      description:
        "Работаем с артистом от демо до готового мастера — запись, сведение и мастеринг. Помогаем найти звук, доводим аранжировку и готовим трек к релизу.",
    },
    {
      id: 2,
      name: "Дистрибуция",
      mini: "На все площадки",
      description:
        "Выводим треки на все стриминги и следим за сроками релиза. Оформляем метаданные, обложки и подачу так, чтобы трек корректно появился на всех площадках.",
    },
    {
      id: 3,
      name: "Продвижение",
      mini: "Промо и аудитория",
      description:
        "Строим промо-кампанию под каждый релиз: плейлисты, соцсети, работа с аудиторией. Планируем публикации и следим за результатом после выхода трека.",
    },
    {
      id: 4,
      name: "Мерч",
      mini: "Одежда лейбла",
      description:
        "Разрабатываем дизайн и запускаем производство одежды лейбла. Подбираем материалы, согласовываем макеты и организуем выпуск партии.",
    },
  ];

  return (
    <div class="w-full py-8 font-display">
      <h2 class="text-white font-display font-black uppercase tracking-[0.3em] text-center text-sm mb-6">
        Наши услуги:
      </h2>

      <div class="flex flex-col gap-6 px-6">
        <For each={services}>
          {(service, i) => {
            const card = (
              <div class="w-full sm:w-1/2 border border-white/10 rounded-2xl p-6">
                <h3 class="text-white font-display font-black text-lg uppercase tracking-tight leading-none">
                  {service.name}
                </h3>
                <p class="text-white font-display font-black text-[10px] uppercase tracking-[0.2em] leading-none mt-1">
                  {service.mini}
                </p>
              </div>
            );

            const description = (
              <p class="w-full sm:w-1/2 text-white/50 text-xs px-6 text-center">
                {service.description}
              </p>
            );

            const arrow = (
              <span
                class="hidden sm:block text-white/30 text-2xl select-none shrink-0"
                classList={{ "rotate-180": i() % 2 !== 0 }}
              >
                ➜
              </span>
            );

            return i() % 2 === 0 ? (
              <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                {card}
                {arrow}
                {description}
              </div>
            ) : (
              <div class="flex flex-col sm:flex-row-reverse sm:items-center gap-2 sm:gap-6">
                {card}
                {arrow}
                {description}
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default Services;
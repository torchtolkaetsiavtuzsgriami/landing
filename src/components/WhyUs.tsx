import { For } from "solid-js";

const WhyUs = () => {
  const reasons = [
    {
      id: 1,
      name: "Свой звук",
      meta: "Не шаблонный продакшн",
      description:
        "Мы не работаем по шаблонам — у каждого релиза свой характер и свой почерк. Помогаем артисту найти звучание, которое отличает его от других.",
    },
    {
      id: 2,
      name: "Команда",
      meta: "Мы злые геи",
      description:
        "Продюсеры, звукорежиссёры и дизайнеры работают вместе над каждым проектом. Не нужно искать подрядчиков — всё закрываем внутри лейбла.",
    },
    {
      id: 3,
      name: "Опыт",
      meta: "Релизы и концерты",
      description:
        "За плечами — выпущенные релизы, живые концерты и коллаборации с артистами. Знаем, как провести трек от идеи до сцены.",
    },
    {
      id: 4,
      name: "Поддержка",
      meta: "От идеи до релиза",
      description:
        "Ведём артиста на каждом этапе: от первой демки до выхода трека и дальше. Подсказываем, помогаем и не бросаем после релиза.",
    },
  ];

  return (
    <div class="w-full py-8 font-display">
      <h2 class="text-white font-display font-black uppercase tracking-[0.3em] text-center text-sm mb-6">
        Почему мы:
      </h2>

      <div class="flex flex-col gap-6 px-6">
        <For each={reasons}>
          {(reason, i) => {
            const card = (
              <div class="w-full sm:w-1/2 border border-white/10 rounded-2xl p-6">
                <h3 class="text-white font-display font-black text-lg uppercase tracking-tight leading-none">
                  {reason.name}
                </h3>
                <p class="text-white font-display font-black text-[10px] uppercase tracking-[0.2em] leading-none mt-1">
                  {reason.meta}
                </p>
              </div>
            );

            const description = (
              <p class="w-full sm:w-1/2 text-white/50 text-xs px-6 text-center">
                {reason.description}
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

export default WhyUs;
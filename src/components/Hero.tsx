const Hero = () => {
  return (
    <section class="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-[url('/hero.jpg')]">
      <h1 class="text-white font-display font-black uppercase tracking-tighter text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] leading-none">
        HUE SOUND
      </h1>
      <p class="text-white font-display uppercase tracking-[0.2em] text-[9px] md:text-[10px] lg:text-xs mt-1 bg-black">
        Самый ах*енный музыкальный лейбл
      </p>
    </section>
  );
};

export default Hero;
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Form from './components/ApplyForm';
import Footer from './components/Footer';



function App() {
    const artists = [
        { id: 1, name: "Dream Garden", artist: "", meta: "", image: "/artists/Dream Garden.jpg" },
        { id: 2, name: "3g0th2002", artist: "", meta: "", image: "/artists/3g0th2002.jpg" },
        { id: 3, name: "Кишлак", artist: "", meta: "", image: "/artists/Кишлак.jpg" },
        { id: 4, name: "фертиван*31", artist: "", meta: "", image: "/artists/фертиван31.jpg" },
        { id: 5, name: "aishigara", artist: "", meta: "", image: "/artists/aishigara.jpg" },
        { id: 6, name: "PLUSIX", artist: "", meta: "", image: "/artists/PLUSIX.jpg" },
        { id: 7, name: "солъ", artist: "", meta: "", image: "/artists/солъ.jpg" },
        { id: 8, name: "boogshi", artist: "", meta: "", image: "/artists/boogshi.jpg" },
        { id: 9, name: "тяжелые травмы", artist: "", meta: "", image: "/artists/тяжелые травмы.jpg" },

        // Дубликаты (новые ID)
        { id: 10, name: "Dream Garden", artist: "", meta: "", image: "/artists/Dream Garden.jpg" },
        { id: 11, name: "3g0th2002", artist: "", meta: "", image: "/artists/3g0th2002.jpg" },
        { id: 12, name: "Кишлак", artist: "", meta: "", image: "/artists/Кишлак.jpg" },
        { id: 13, name: "фертиван*31", artist: "", meta: "", image: "/artists/фертиван31.jpg" },
        { id: 14, name: "aishigara", artist: "", meta: "", image: "/artists/aishigara.jpg" },
        { id: 15, name: "PLUSIX", artist: "", meta: "", image: "/artists/PLUSIX.jpg" },
        { id: 16, name: "солъ", artist: "", meta: "", image: "/artists/солъ.jpg" },
        { id: 17, name: "boogshi", artist: "", meta: "", image: "/artists/boogshi.jpg" },
        { id: 18, name: "тяжелые травмы", artist: "", meta: "", image: "/artists/тяжелые травмы.jpg" },
    ];

    const releases = [
        { id: 1, name: "таверна", artist: "Dream Garden", meta: "2026 · Сингл", image: "/releases/таверна.jpg" },
        { id: 2, name: "Арлекин", artist: "Dream Garden, PLUSIX", meta: "2026 · Сингл", image: "/releases/Арлекин.jpg" },
        { id: 3, name: "Амнезия", artist: "Dream Garden", meta: "2026 · Сингл", image: "/releases/Амнезия.jpg" },
        { id: 4, name: "темный лес", artist: "Dream Garden", meta: "2026 · Сингл", image: "/releases/темный лес.jpg" },
        { id: 5, name: "Мальвина", artist: "Dream Garden", meta: "2026 · Сингл", image: "/releases/Мальвина.jpg" },
        { id: 6, name: "лидер касаний", artist: "Dream Garden, фертиван*31", meta: "2026 · Сингл", image: "/releases/лидер касаний.jpg" },
        { id: 7, name: "Потерянный морг", artist: "@ПотерянныйМорг", meta: "2026 · Сингл", image: "/releases/Потерянный морг.jpg" },
        { id: 8, name: "асфиксия", artist: "тяжелые травмы", meta: "2026 · Сингл", image: "/releases/асфиксия.jpg" },

        // Дубликаты (новые ID)
        { id: 9, name: "таверна", artist: "Dream Garden", meta: "2026 · Сингл", image: "/releases/таверна.jpg" },
        { id: 10, name: "Арлекин", artist: "Dream Garden, PLUSIX", meta: "2026 · Сингл", image: "/releases/Арлекин.jpg" },
        { id: 11, name: "Амнезия", artist: "Dream Garden", meta: "2026 · Сингл", image: "/releases/Амнезия.jpg" },
        { id: 12, name: "темный лес", artist: "Dream Garden", meta: "2026 · Сингл", image: "/releases/темный лес.jpg" },
        { id: 13, name: "Мальвина", artist: "Dream Garden", meta: "2026 · Сингл", image: "/releases/Мальвина.jpg" },
        { id: 14, name: "лидер касаний", artist: "Dream Garden, фертиван*31", meta: "2026 · Сингл", image: "/releases/лидер касаний.jpg" },
        { id: 15, name: "Потерянный морг", artist: "@ПотерянныйМорг", meta: "2026 · Сингл", image: "/releases/Потерянный морг.jpg" },
        { id: 16, name: "асфиксия", artist: "тяжелые травмы", meta: "2026 · Сингл", image: "/releases/асфиксия.jpg" },
    ];

    const events = [
        { id: 1, name: "HUE FEST", artist: "29 августа 2026", meta: "", image: "/events/0.jpg" },
        { id: 2, name: "GAY EVENT", artist: "12 сентября 2026", meta: "", image: "/events/1.jpg" },
        { id: 3, name: "SOLNIK PIDORASA", artist: "3 февраля 2026", meta: "", image: "/events/2.jpg" },
        { id: 4, name: "TORCH GAY", artist: "12 сентября 2026", meta: "", image: "/events/3.jpg" },
        { id: 5, name: "MAMY IBAL DRIM GARDENA", artist: "3 февраля 2026", meta: "", image: "/events/4.jpg" },

        // Дубликаты (новые ID)
        { id: 6, name: "HUE FEST", artist: "29 августа 2026", meta: "", image: "/events/0.jpg" },
        { id: 7, name: "GAY EVENT", artist: "12 сентября 2026", meta: "", image: "/events/1.jpg" },
        { id: 8, name: "SOLNIK PIDORASA", artist: "3 февраля 2026", meta: "", image: "/events/2.jpg" },
        { id: 9, name: "TORCH GAY", artist: "12 сентября 2026", meta: "", image: "/events/3.jpg" },
        { id: 10, name: "MAMY IBAL DRIM GARDENA", artist: "3 февраля 2026", meta: "", image: "/events/4.jpg" }
    ];



  return (
    <div class="bg-black">
      <Navbar />

      <Hero />

      <div class="py-10">
  <Carousel title="Наши релизы:" items={releases} />
  <Carousel title="С нами работали:" items={artists} direction="right" />
  <Carousel title="Последние концерты:" items={events} />
  <Services />
  <WhyUs />
</div>

      <Form />
      <Footer />
    </div>
  );
}

export default App;

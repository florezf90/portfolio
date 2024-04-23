import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";



i18next
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    lng: "es",
    debug: true,
    resources: {
      en: {
        translation: {
          introduction: "Hi there, I'm Felipe Florez",
          description:
            "A dynamic full-stack developer based in San Antonio, TX, dedicated to delivering top-notch solutions.",
          MyWork: "My Work",
          getInTouch: "Get In Touch",
        },
      },
      es: {
        translation: {
          introduction: "Hola, soy Felipe Florez",
          description:
            "Un desarrollador dinámico full-stack con sede en San Antonio, TX, dedicado a brindar soluciones de primer nivel.",
          MyWork: "Mi trabajo",
          getInTouch: "Hablemos",
        },
      },
      de: {
        translation: {
          introduction: "Hallo, ich bin Felipe Florez",
          description:
            "Ein dynamischer Full-Stack-Entwickler mit Sitz in San Antonio, TX, der sich der Bereitstellung erstklassiger Lösungen widmet",
          MyWork: "Meine Arbeit",
          getInTouch: "Kontaktiere mich",
        },
      },
      ru: {
        translation: {
          introduction: "Привет, я Фелипе Флорес.",
          description:
            "Динамичный разработчик полного стека из Сан-Антонио, штат Техас, специализирующийся на предоставлении первоклассных решений.",
          MyWork: "мои проекты",
          getInTouch: "Свяжитесь со мной",
        },
      },
    },
  });


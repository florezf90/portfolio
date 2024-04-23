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
          home: "Home",
          about: "About",
          projects: "Projects",
          language: "Language",
          name: "Name",
          education: "Education",
          felipe: "Felipe Florez",
          resume: "CV",
          email: "Email",
        },
      },
      es: {
        translation: {
          introduction: "Hola, soy Felipe Florez",
          description:
            "Un desarrollador dinámico full-stack con sede en San Antonio, TX, dedicado a brindar soluciones de primer nivel.",
          MyWork: "Mi trabajo",
          getInTouch: "Hablemos",
          home: "Inicio",
          about: "Sobre mi",
          projects: "Proyectos",
          language: "Idioma",
          felipe: "Felipe Florez",
          name: "Nombre",
          education: "Educación",
          resume: "Hoja de vida",
          email: "Correo electronico",
        },
      },
      de: {
        translation: {
          introduction: "Hallo, ich bin Felipe Florez",
          description:
            "Ein dynamischer Full-Stack-Entwickler mit Sitz in San Antonio, TX, der sich der Bereitstellung erstklassiger Lösungen widmet",
          MyWork: "Meine Arbeit",
          getInTouch: "Kontaktiere mich",
          home: "Start",
          about: "Über mich",
          projects: "Projekte",
          language: "Sprache",
          felipe: "Felipe Florez",
          name: "Name",
          education: "Ausbildung",
          resume: "Lebenslauf",
          email: "E-Mail",
        },
      },
      ru: {
        translation: {
          introduction: "Привет, я Фелипе Флорес.",
          description:
            "Динамичный разработчик полного стека из Сан-Антонио, штат Техас, специализирующийся на предоставлении первоклассных решений.",
          MyWork: "мои проекты",
          getInTouch: "Свяжитесь со мной",
          home: "начинать",
          about: "обо мне",
          projects: "Проекты",
          language: "Язык",
          name: "Имя",
          felipe: "Фелипе Флорес",
          education: "Образование",
          resume: "резюме",
          email: "Электронная почта",
        },
      },
    },
  });


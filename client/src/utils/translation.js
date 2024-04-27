import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";



i18next
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    lng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          introduction: "Hi there, I'm Felipe Florez",
          description:
            "A dynamic full-stack developer specializing  in the MERN stack, residing in San Antonio, TX, I am committed to crafting high-quality solutions.",
          MyWork: "My Work",
          getInTouch: "Get In Touch",
          home: "Home",
          abouttitle: "About",
          aboutDescription: `Welcome to my website! I'm Luis Felipe Florez, a 22-year-old Colombian dedicated to delivering 
          professional solutions for companies and small projects through Web Development. With four years of experience in the sales industry, 
          during this time, I've honed my attention to detail and problem-solving skills, which developed a passion for understanding and resolving challenges, 
          making coding the perfect avenue to leverage my expertise while adding value to the world.`,
          mission: "Mission",
          missionDescription: `
         Though coding began as a hobby, it swiftly evolved into a
            passion that ignited my desire for a career change. I'm
            exhilarated to pursue this new path, driven by my unwavering
            dedication to mastering the craft. I eagerly anticipate the
            opportunity to get into the tech industry and refine my skills, delve into new technologies, and
            make a tangible impact by assisting others along the way.`,
          projects: "Projects",
          language: "Language",
          name: "Name",
          education: "Education",
          felipe: "Felipe Florez",
          resume: "CV",
          email: "Email",
          skillset: "Skillset",
          skillcards: ["front-end", "tools", "back-end"],
        },
      },
      es: {
        translation: {
          introduction: "Hola, soy Felipe Florez",
          description:
            "Un desarrollador dinámico full-stack especializado en el stack MERN,  residiendo en San Antonio, TX, estoy comprometido a crear soluciones de alta calidad.",
          MyWork: "Mi trabajo",
          getInTouch: "Hablemos",
          home: "Inicio",
          abouttitle: "Sobre mi",
          aboutDescription: `¡Bienvenidos a mi sitio web! Soy Luis Felipe Florez, 22 años.
             Colombiano dedicado a entregar soluciones profesionales para
             empresas y pequeños proyectos a través del Desarrollo Web. con cuatro años
             de experiencia en la industria de ventas; he
             desarrollado mi atención a los pequeños detalles y mis habilidades para resolver problemas complejos, lo que
             generó una pasión por comprender y resolver desafíos,
             haciendo de la codificación la vía perfecta para aprovechar mi experiencia mientras
             agregando valor al mundo.`,
          mission: "Misión",
          missionDescription: `Aunque la programación comenzó como un hobby, rápidamente evolucionó hasta convertirse en una
             pasión que encendió mi deseo de un cambio de carrera. Estoy
             entusiasmado de seguir este nuevo camino, impulsado por mi inquebrantable
             dedicación para dominar el oficio y gracias a ello, anticipo ansiosamente la
             oportunidad de ingresar a la industria tecnológica para perfeccionar mis habilidades, profundizar en nuevas tecnologías y
             lograr un impacto tangible ayudando a otros en el camino.
          `,
          projects: "Proyectos",
          language: "Idioma",
          felipe: "Felipe Florez",
          name: "Nombre",
          education: "Educación",
          resume: "Hoja de vida",
          email: "Correo electronico",
          skillset: " habilidades",
          skillcards: ["front-end", "herramientas", "back-end"],
        },
      },
      de: {
        translation: {
          introduction: "Hallo, ich bin Felipe Florez",
          description:
            "Ein dynamischer Full-Stack-Entwickler mit Spezialisierung auf den MERN-Stack, wohnhaft in San Antonio, TX, der sich verpflichtet hat, hochwertige Lösungen zu entwickeln.",
          MyWork: "Meine Arbeit",
          getInTouch: "Kontaktiere mich",
          home: "Start",
          abouttitle: "Über mich",
          aboutDescription: `Willkommen auf meiner Website! Ich bin Luis Felipe Florez, ein 22-Jähriger
             Kolumbianer widmet sich der Bereitstellung professioneller Lösungen für
             Unternehmen und kleine Projekte durch Webentwicklung. Mit vier Jahren
             Erfahrung in der Vertriebsbranche; Während dieser Zeit habe ich
             Ich habe meine Liebe zum Detail und meine Fähigkeiten zur Problemlösung geschärft
             eine Leidenschaft dafür entwickelt, Herausforderungen zu verstehen und zu lösen,
             Das Programmieren ist die perfekte Möglichkeit, mein Fachwissen zu nutzen
             Mehrwert für die Welt schaffen.`,
          mission: "Berufung ",
          missionDescription: `
          Obwohl das Programmieren als Hobby begann, entwickelte es sich schnell zu einem Hobby
             Leidenschaft, die meinen Wunsch nach einer beruflichen Veränderung entfachte. Ich bin
             Ich bin begeistert, diesen neuen Weg zu verfolgen, angetrieben von meiner Unerschütterlichkeit
             Engagement für die Beherrschung des Handwerks. Ich erwarte es mit Spannung
             Gelegenheit, in die Technologiebranche einzusteigen und meine Fähigkeiten zu verfeinern, mich mit neuen Technologien zu befassen und
             Machen Sie eine spürbare Wirkung, indem Sie andere auf ihrem Weg unterstützen.
          `,
          projects: "Projekte",
          language: "Sprache",
          felipe: "Felipe Florez",
          name: "Name",
          education: "Ausbildung",
          resume: "Lebenslauf",
          email: "E-Mail",
          skillset: "Fähigkeiten",
          skillcards: ["front-end", "Werkzeuge", "back-end"],
        },
      },
      ru: {
        translation: {
          introduction: "Привет, я Фелипе Флорес.",
          description:
            "Динамичный разработчик full-stack с узкой специализацией на стеке MERN, базирующийся в Сан-Антонио, Техас, я посвящен созданию высококачественных решений.",
          MyWork: "мои проекты",
          getInTouch: "Свяжитесь со мной",
          home: "начинать",
          abouttitle: "обо мне",
          aboutDescription: `Добро пожаловать на мой сайт! Я Луис Фелипе Флорес, 22 года.
             Колумбийская компания, специализирующаяся на предоставлении профессиональных решений для
             компании и небольшие проекты посредством веб-разработки. С четырех лет
             опыт работы в сфере продаж; за это время я
             отточил свое внимание к деталям и навыки решения проблем, что
             развили страсть к пониманию и решению проблем,
             делая программирование идеальным способом использовать свой опыт, одновременно
             добавляя ценность миру.`,
          mission: "цель",
          missionDescription: `
          Хотя программирование начиналось как хобби, оно быстро превратилось в хобби.
             страсть, которая зажгла мое желание сменить карьеру. Я
             воодушевлен тем, чтобы следовать по этому новому пути, движимый моей непоколебимой
             стремление овладеть ремеслом. Я с нетерпением ожидаю
             возможность попасть в технологическую индустрию и усовершенствовать свои навыки, углубиться в новые технологии и
             оказать ощутимое влияние, помогая другим на этом пути.
          `,
          projects: "Проекты",
          language: "Язык",
          name: "Имя",
          felipe: "Фелипе Флорес",
          education: "Образование",
          resume: "резюме",
          email: "Электронная почта",
          skillset: "навыки",
          skillcards: ["фронтенд", "инструменты", "бэкенд"],
        },
      },
    },
  });


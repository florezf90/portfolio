import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";



i18next.use(initReactI18next).use(languageDetector).init({
    fallbackLng: "en",
   debug: true,
   resources: {
       en: {
           translation: {
               "hello": "hello"
           }
       }
   }
});


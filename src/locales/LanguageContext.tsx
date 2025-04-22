import { createContext, useState, useEffect, ReactNode } from "react";
import en from "./en";
import am from "./am";

// Define context type
interface LanguageContextType {
  language: string;
  texts: typeof en;
  switchLanguage: (lang: "en" | "am") => void;
}

// Create context with default values
export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  texts: en,
  switchLanguage: () => {},
});

// Create a provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<"en" | "am">(() => {
    return (localStorage.getItem("language") as "en" | "am") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const switchLanguage = (lang: "en" | "am") => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, texts: language === "en" ? en : am, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

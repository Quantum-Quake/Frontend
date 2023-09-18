import React, { createContext, useState } from "react";

// Create a context for your language data
const LanguageContext = createContext();

// Create a provider component for the language context
function LanguageProvider({ children }) {
  // Define the state and functions for managing the language
  const [language, setLanguage] = useState("hi");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };
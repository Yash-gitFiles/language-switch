import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import MainContent from "./MainContent";
import "./i18n.js";

function App() {
  return (
    <div>
      <LanguageSwitcher />
      <MainContent />
    </div>
  );
}

export default App;

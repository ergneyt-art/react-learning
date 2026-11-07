import { useEffect, useState } from "react";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import Footer from "./components/Footer";
import Article from "./components/Article";
import localizations from "./content.tsx";
import "./App.css";

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [lang, setLang] = useState('ENG');
  const [currentArticleId, setCurrentArticleId] = useState<string | null>(null);

  const localization = localizations.find((loc) => loc.key === lang.toLowerCase());
  const articles = localization?.articles ?? [];
  const globalNav = articles.map((article) => ({ key: article.id, title: article.title }));
  const currentArticle = articles.find((article) => article.id === currentArticleId);
  const localNav = currentArticle?.topics.map((topic, index) => ({
    key: `${currentArticle.id}-topic-${index}`,
    title: topic.title,
  })) ?? [];

  useEffect(() => {
    if (currentArticleId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentArticleId]);


  return (
    <div className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
      <Header localization={localization?.header} currentTheme={theme} onToggleLang={toggleLang} onToggleTheme={toggleTheme}></Header>
      <div className="main-content-container">
        <SidePanel
          header={localization?.leftPaneTitle ?? "Articles"}
          items={globalNav}
          itemClickHandler={setCurrentArticleId}
        ></SidePanel>
        <div className="content-container">
          {currentArticle && <Article aricle={currentArticle} />}
        </div>
        <SidePanel
          header={localization?.rightPaneTitle ?? "Table of Contents"}
          items={localNav}
          itemClickHandler={scrollToElementById}
        ></SidePanel>
      </div>
      <Footer></Footer>
    </div>
  );

  function scrollToElementById(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function toggleTheme() {
    setTheme(previous => previous === 'light' ? 'dark' : 'light');
    console.log("current theme: " + theme);
  }

  function toggleLang(value: string) {
    setLang(value);
    console.log("current lang: " + lang);
  }
}

export default App;

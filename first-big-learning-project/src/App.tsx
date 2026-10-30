import { useState } from "react";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import Footer from "./components/Footer";
import Article from "./components/Article";
import "./App.css";

function App() {
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <Header header="This is header">Header paragraph</Header>
      <div className="main-content-container">
        <SidePanel
          header="Right-panel"
          items={["first", "second", "thrith"]}
        ></SidePanel>
        <div className="content-container">
          <button onClick={loadArticles} disabled={isLoading}>
            {isLoading ? "Загрузка…" : "Загрузить статьи"}
          </button>
          {error && <p role="alert">{error}</p>}
          {paragraphs.map((paragraph, index) => (
            <Article
              key={index}
              hedaer={`Статья ${index + 1}`}
              content={paragraph}
            ></Article>
          ))}
        </div>
        <SidePanel
          header="Left-panel"
          items={["first", "second", "thrith"]}
        ></SidePanel>
      </div>
      <Footer></Footer>
    </>
  );

  async function loadArticles() {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://loremipsum-generator.org/api?type=lorem&paragraphs=3&format=json",
      );
      if (!response.ok) {
        throw new Error(`Ошибка HTTP ${response.status} ${response.text()}`);
      }

      const data = await response.json();
      const received: unknown = data.paragraphs;

      if (
        !Array.isArray(received) ||
        !received.every((item): item is string => typeof item === "string")
      ) {
        throw new Error("Сервер вернул неожиданный формат данных");
      }

      setParagraphs(received);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Не удалось загрузить статьи",
      );
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
}

export default App;

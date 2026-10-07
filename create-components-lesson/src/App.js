import React from 'react';
import Header from './components/Header';
import Article from './components/ArticleTemplate';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Article title="My First Article" />
      <Article title="My Second Article" />
      <Footer />
    </div>
  );
}

export default App;

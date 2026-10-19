import React from 'react';
import Header from './components/Header';
import Article from './components/ArticleTemplate';
import Footer from './components/Footer';
import CustomModalBox from './components/CustomModalBox';


function App() {
  return (
    <div className="App">
      <Header />
      <CustomModalBox title="My Modal" text="This is the modal content." buttonText="Click Me" />
      <Article title="My First Article" />
      <Article title="My Second Article" />
      <Footer />
    </div>
  );
}

export default App;
 
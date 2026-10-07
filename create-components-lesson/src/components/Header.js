import React from 'react';
import InputText from './InputText';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <InputText />
      </header>
    );
  }
}

export default Header;
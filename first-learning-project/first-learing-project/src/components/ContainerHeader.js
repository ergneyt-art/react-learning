import React from 'react';
import '../css/main.css';

const ContainerHeader = ({ title }) => {
  return (
    
    <header className="container-header">
      <h1>{title}</h1>
    </header>
  );
};

export default ContainerHeader;

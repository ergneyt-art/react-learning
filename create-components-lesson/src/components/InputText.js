/*
  Использование состояния в React для управления данными и отображения информации пользователю.
  В данном компоненте InputText используется состояние для хранения текста подсказки (helpText) и данных, 
  введенных пользователем (userData).
*/

import React from 'react';

class InputText extends React.Component {
  // Инициализация состояния компонента
  constructor(props) {
    super(props);

    // Инициализация состояния компонента с помощью объекта this.state
    this.state = {
      helpText: "Please enter your text here.",
      userData: ""
    }

    /*
      Привязка методов onClicked и mouseOver к текущему контексту компонента, 
      чтобы они могли корректно изменять состояние компонента при вызове.
    */
    this.onClicked = this.onClicked.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
  }

  render() {
    return (
      <div>
        <h2>{this.state.userData}</h2>
        <input type="text"
          onChange={event => this.setState({ userData: event.target.value })} 
          placeholder={this.state.helpText} 
          onClick={this.onClicked} 
          onMouseEnter={this.mouseOver} />
      </div>
    );
  }

  onClicked() {
    // Изменение состояния компонента при клике на input, что приведет к обновлению текста подсказки
    this.setState({ helpText: "You clicked the input!" });
    console.log("Input clicked");
  }

  mouseOver() {
    // this.setState({ helpText: "Hovering over the input!" });
    console.log("Mouse entered input");
  }
}

export default InputText;
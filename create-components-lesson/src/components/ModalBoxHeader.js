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
    }

    render() {
        return (
            <div className="modal-header">
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default InputText;
import React from 'react';

class InputText extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter text" onClick={this.onClicked} />
      </div>
    );
  }

  onClicked() {
    console.log("Input clicked");
  }
}

export default InputText;
import React from 'react';

class ModalBoxText extends React.Component {
    render() {
        return (
            <div className="modal-text">
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default ModalBoxText;
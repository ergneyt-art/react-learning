import React from 'react';
import ModalBoxHeader from './ModalBoxHeader';
import ModalBoxText from './ModalBoxText';
import FuncButton from './FuncButton';
import '../css/modal-box.css';

class CustomModalBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    
    render() {
        return (
            <div className={this.state.isOpen ? "modal open" : "modal closed"}>
                <button onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
                    {this.state.isOpen ? "Close" : "Open"} Modal
                </button>
                <ModalBoxHeader title={this.props.title} />
                <ModalBoxText text={this.props.text} />
                <FuncButton text={this.props.buttonText} />
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isOpen !== this.state.isOpen) {
            console.log(`Modal is now ${this.state.isOpen ? "open" : "closed"}`);
        }
    }
}

export default CustomModalBox;
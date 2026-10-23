import React from "react";

class EditUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            email: props.email,
            age: props.age,
            happyness: props.happyness
        }

        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        return (
            <form ref={(el) => this.userForm = el} className="add-user-form">
                <div className="user-form-group">
                    <label className='user-form-label' htmlFor="name">Name:</label>
                    <input value={this.state.name} onChange={this.handleInputChange} className='user-form-input' type="text" id="name" placeholder="Enter name" name="name" required />
                </div>
                <div className="user-form-group">
                <label className='user-form-label' htmlFor="email">Email:</label>
                <input value={this.state.email} onChange={this.handleInputChange} className='user-form-input' type="email" id="email" placeholder="Enter email" name="email" required />
                </div>
                <div className="user-form-group">
                    <label className='user-form-label' htmlFor="age">Age:</label>
                    <input value={this.state.age} onChange={this.handleInputChange} className='user-form-input' type="number" id="age" placeholder="Enter age" name="age" required />
                </div>
                <div className="user-form-group">
                    <label className='user-form-label' htmlFor="happyness">Happiness:</label>
                    <input value={this.state.happyness} onChange={this.handleInputChange} className='user-form-input' type="number" id="happyness" placeholder="Enter happiness" name="happyness" min="0" max="100" required />
                </div>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary edit-user-btn">Save</button>
                <button onClick={this.handleCancel} type="button" className="btn btn-primary cancel-user-btn">Cancel</button>
            </form>
        )
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onEdit(
            {
                id: this.props.userid,
                name: this.state.name,
                email: this.state.email,
                age: this.state.age,
                happyness: this.state.happyness
            }
        )
        this.props.onHideEditForm();
    }

    handleCancel = (event) => {
        this.props.onHideEditForm();
    }
}

export default EditUserForm;
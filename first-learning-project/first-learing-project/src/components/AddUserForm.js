import React from 'react';
import '../css/main.css';
import '../css/add-user-form.css';

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            age: 0,
            happyness: 0
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        return (
            <form ref={(el) => this.userForm = el} className="add-user-form">
                <h2>Add User</h2>
                <div className="user-form-group">
                    <label className='user-form-label' htmlFor="name">Name:</label>
                    <input onChange={this.handleInputChange} className='user-form-input' type="text" id="name" placeholder="Enter name" name="name" required />
                </div>
                <div className="user-form-group">
                <label className='user-form-label' htmlFor="email">Email:</label>
                <input onChange={this.handleInputChange} className='user-form-input' type="email" id="email" placeholder="Enter email" name="email" required />
                </div>
                <div className="user-form-group">
                    <label className='user-form-label' htmlFor="age">Age:</label>
                    <input onChange={this.handleInputChange} className='user-form-input' type="number" id="age" placeholder="Enter age" name="age" required />
                </div>
                <div className="user-form-group">
                    <label className='user-form-label' htmlFor="happyness">Happiness:</label>
                    <input onChange={this.handleInputChange} className='user-form-input' type="number" id="happyness" placeholder="Enter happiness" name="happyness" min="0" max="100" required />
                </div>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary add-user-btn">Add User</button>
            </form>
        )
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({
            name: this.state.name,
            email: this.state.email,
            age: this.state.age,
            happyness: this.state.happyness
        })

        this.userForm.reset();
        // Handle form submission logic here
    }
}

export default AddUserForm;
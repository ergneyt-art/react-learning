import React from 'react';
import HorizontalBar from './HorizontalBar';
import '../css/user-card.css';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';
import EditUserForm from './EditUserForm';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false
        }

        this.hideEditForm = this.hideEditForm.bind(this);
    }

    render() {
        const { user } = this.props;
        return (
            <div id={`user-${user.id}`} className={`user-card ${user.happyness > 90 ? 'happy-user' : user.happyness > 70 ? 'neutral-user' : 'sad-user'}`}>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Age: {user.age}</p>
                <p>Happiness: {user.happyness}</p>
                <HorizontalBar title="Happiness" value={user.happyness} total={100} color='#beb0bf' />
                {this.state.editForm && <EditUserForm userid={user.id} name={user.name} email={user.email} age={user.age} happyness={user.happyness} onHideEditForm={this.hideEditForm} onEdit={this.props.onEdit}/>}
                <div className="user-card-actions">
                    <IoCloseCircleSharp className="delete-icon user-card-action" onClick={() => this.props.onDelete(user.id)} />
                    <IoHammerSharp onClick={() => this.setState({editForm: !this.state.editForm})} className="edit-icon user-card-action" />
                </div>
            </div>
        )
    }

    hideEditForm() {
        this.setState({editForm: false});
    }
}


export default UserCard;
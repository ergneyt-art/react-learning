import React from 'react';
import HorizontalBar from './HorizontalBar';
import '../css/user-card.css';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';

class UserCard extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div key={`user-${user.id}`} className={`user-card ${user.happyness > 90 ? 'happy-user' : user.happyness > 70 ? 'neutral-user' : 'sad-user'}`}>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Age: {user.age}</p>
                <p>Happiness: {user.happyness}</p>
                <HorizontalBar title="Happiness" value={user.happyness} total={100} color='#beb0bf' />
                <div className="user-card-actions">
                    <IoCloseCircleSharp className="delete-icon user-card-action" onClick={() => this.props.onDelete(user.id)} />
                    <IoHammerSharp className="edit-icon user-card-action" onClick={() => this.props.onEdit(user.id)} />
                </div>
            </div>
        )
    }
}

export default UserCard;
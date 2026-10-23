import React from 'react';
import '../css/users.css';
import '../css/main.css';
import ContainerHeader from './ContainerHeader';
import UserCard from './UserCard';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ContainerHeader title="Users List" />
                <div className="users-container">
                    {this.props.users.length === 0 ? (
                        <p>No users found.</p>
                    ) : (
                        this.props.users.map(user => this.renderUser(user))
                    )}
                </div>
            </div>
        )
    }

    renderUser(user) {
        return (
            <UserCard onDelete={this.props.onDelete} onEdit={this.props.onEdit} user={user} />
        )
    }
}

export default Users;
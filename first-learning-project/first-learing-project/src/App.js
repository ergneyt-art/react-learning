import logo from './logo.svg';
import React from 'react';
import Users from './components/Users';
import ContainerHeader from './components/ContainerHeader';
import AddUserForm from './components/AddUserForm';
import './App.css';
import './css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this); 
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <ContainerHeader title="Welcome to my first React project!" />
        <p>This is a simple React application that demonstrates the basics of React.</p>
        <div className="users-section container">
          <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
          <aside>
            <AddUserForm onAdd={this.addUser} />
          </aside>
        </div>
      </main>
    </div>)
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    });
  }

  editUser(user) {
    let allUsers = this.state.users;
    allUsers[allUsers.findIndex(el => el.id = user.id)] = user;
    this.setState({users: allUsers});
    console.log(user);
  }

  addUser(user) {
    const id = this.state.users.length + 1;
    user.id = id;
    this.setState({
      users: [...this.state.users, {id, ...user}]
    })
    console.log(user);
  }
}

export default App;

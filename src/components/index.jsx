import React, { Component } from 'react';

//components
import ListUsers from './ListUsers';

class App extends Component {
    constructor (props){
        super(props);

        this.state = {
            users : [],
            repos : []
        }
        // bindeando de eventos
        this.reposUser = this.reposUser.bind(this)
    }
// Esta funcion se ejecuta antes del render y llama los datos
    componentWillMount(){
        fetch ('https://api.github.com/users')
            .then(response => response.json())
            .then(user =>{
                user.forEach(user => {
                    let datos ={
                        url:user.url,
                        name:user.login,
                        id: user.id,
                        picture: user.avatar_url,
                        // repos : user.repos_url
                    }
                    this.setState({users:this.state.users.concat([datos])})
                });
            })
    }

    reposUser(ev){      // probando  interaccion entre componentes
        let user = ev.target.value;
        fetch(`https://api.github.com/users/${user}/repos`)
            .then(response => response.json())
            .then(repos => {
                repos.forEach(repo => {
                    let reposUser = {
                        name: repo.name
                    }
                    this.setState({repos:this.state.repos.concat([reposUser])})
                })
            })
        console.log(ev.target.value);
    }

    componentDidUpdate(){
        // console.log(this.state.users);

    }
    
    render(){
        return (
            <div className="container">
                <div className="row align-items-center">
                    <ListUsers users = {this.state.users} searchUser={this.reposUser}/>
                    {/* <Repos repos = {this.state.repos}/> */}
                </div>
            </div>
        )
    }
}

export default App;
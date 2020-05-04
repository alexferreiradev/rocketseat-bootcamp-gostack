import React, { Component } from 'react';

class Techlist extends Component {
    state = {
        newTech: '',
        techs: [
            "Java",
            "Android",
            "React",
        ],
    };

    handleNewTech = (e) => {
        this.setState({newTech: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();

        this.setState({techs: [...this.state.techs, this.state.newTech]});
        this.setState({newTech: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech =>
                        <li key={tech}>{tech}</li>
                    )}
                </ul>
                <h1>Nova tech: {this.state.newTech}</h1>
                <div>
                    <input 
                        type="text" 
                        onChange={this.handleNewTech} 
                        value={this.state.newTech}  />
                    <button type="submit">Enviar</button>
                </div>
            </form>
        );
    }
}

export default Techlist;
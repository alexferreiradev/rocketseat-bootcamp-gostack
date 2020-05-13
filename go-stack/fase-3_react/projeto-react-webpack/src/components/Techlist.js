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

    handleDelete = (e, tech) => {
        e.preventDefault();

        this.setState({techs: this.state.techs.filter((techEl) => {
            return techEl !== tech;
        })});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech =>
                        <li key={tech}>
                            {tech}
                            <button type="button" onClick={(e) => {this.handleDelete(e, tech)}}>Remover</button>
                        </li>
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
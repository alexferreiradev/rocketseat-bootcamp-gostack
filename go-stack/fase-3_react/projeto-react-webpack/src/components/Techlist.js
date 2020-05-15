import React, { Component } from 'react';
import TechItem from './TechItem';

class Techlist extends Component {
    static defaultProps = {
        teste: 'default',
    };

    state = {
        newTech: '',
        techs: [
            "Java",
            "Android",
            "React",
        ],
    };

    // Executado assim que componente aparece em tela
    componentDidMount() {
        // busca de dados por api
    }

    // Executado sempre que houver alterações de estado ou props
    componentDidUpdate(prevProp, prevState) {
        // tem como comparar prop antiga e estado antigo
    }

    // Executar semmpre que componente é morto
    componentWillUnmount() {

    }

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
                        <TechItem key={tech} tech={tech} onDelete={(e) => {this.handleDelete(e, tech)}} />
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
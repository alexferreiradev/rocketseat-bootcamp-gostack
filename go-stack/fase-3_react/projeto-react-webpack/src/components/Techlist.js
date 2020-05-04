import React, { Component } from 'react';

class Techlist extends Component {
    state = {
        tech: [
            "Java",
            "Android",
            "React",
        ]
    };

    render() {
        return (
            <div>
                <ul>
                    <li>Java</li>
                    <li>Android</li>
                    <li>React</li>
                    <li>React native</li>
                </ul>
            </div>
        );
    }
}

export default Techlist;
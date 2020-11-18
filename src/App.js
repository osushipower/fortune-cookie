import React, { Component } from 'react';
import './estilo.css'
import biscoito from './assets/biscoito.png'

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['All our dreams can come true, if we have the courage to pursue them.',
            'The secret of getting ahead is getting started.',
            'Don’t limit yourself. Many people limit themselves to what they think they can do.'+ 
            'You can go as far as your mind lets you. What you believe, remember, you can achieve.', 
            'If people are doubting how far you can go, go so far that you can’t hear them anymore.',
            'Do what you feel in your heart to be right – for you’ll be criticized anyway.',
            'Happiness is not something ready made. It comes from your own actions.',
            'Whatever you are, be a good one.',
            'The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.',
            'You can either experience the pain of discipline or the pain of regret. The choice is yours.',
            'Impossible is just an opinion.',
            'Your passion is waiting for your courage to catch up.',
            'If something is important enough, even if the odds are stacked against you, you should still do it.',
            'Don’t be afraid to give up the good to go for the great.'];
    }

    quebraBiscoito() {
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
                <img src={biscoito} className="img" />
                <Botao nome="Open Fortune Cookie" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>         
        );
    }
}

class Botao extends Component {
    render() {
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}

export default App;
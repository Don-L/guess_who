const React = require('react');
const Deck = require('./Deck.jsx');
const Characters = require('./sample_data.js');
const UserQuery = require('./UserQuery.jsx');
const Header = require('./Header.jsx');

const Game = React.createClass({
  getInitialState: function () {
    return { deck: Characters,
             selected: 0,
             lastQueryResponse: 'I am the Goddess of Random Number Generation. Try to guess my favourite SF2 character!',
             userGuess: Characters[0],
             guessMade: false,
             guessCorrect: null };
  },

  componentDidMount: function () {
    let rand = Math.floor(Math.random() * 11);
    console.log('initial select', this.state.deck[rand].name);
    this.setState({ selected: rand });
  },

  render: function () {
    let lastQueryResponseElem = <p className='yellow query'>{ this.state.lastQueryResponse }</p>;
    if (!this.state.lastQueryResponse) {
      lastQueryResponseElem = null;
    }

    let guessWrongResponse = `ARE YOU CRAZY? ${this.state.userGuess.name.toUpperCase()} SUCKS!! GO AWAY.`;
    let guessRightResponse = `THAT'S RIGHT! ${this.state.userGuess.name.toUpperCase()} IS THE BEST. WAR ${this.state.userGuess.name.toUpperCase()}!`;

    if (this.state.guessMade === true) {
      if (this.state.guessCorrect) {
        return <h1 className='big yellow'>{guessRightResponse}</h1>

      } else {
        return <h1 className='big red'>{guessWrongResponse}</h1>;
      }
    } else {
        return (
          <div>
            <Header/>
            {lastQueryResponseElem}
            <UserQuery
              setUserGuess={this.setUserGuess}
              queries={Object.keys(this.state.deck[0])}
              topFormSubmit={this.topFormSubmit}
              handleUserGuess={this.handleUserGuess}
              characters={this.state.deck.map(function (character) {
                return character.name;
              }
            )}
            />
            <Deck characters={this.state.deck}/>
          </div>
        );
      }
  },

  topFormSubmit: function (key, bool) { //check answer
    let selectedChar = this.state.deck[this.state.selected];
    let checkAttr = selectedChar[key];
    if (checkAttr === bool) {
      this.setState({ lastQueryResponse: `Yes, '${key}' is ${bool} for my favourite character` });
    } else {
      this.setState({ lastQueryResponse: `No, '${key}' is ${checkAttr} for my favourite character` });
    }

    //   let newDeck = [];
    //   for (var character of this.state.deck) {
    //     console.log(character[key]);
    //     delete character[key];
    //     newDeck.push(character);
    //   }
    //
    //   this.setState({ deck: newDeck });
  },

  setUserGuess: function (name) {
    let guess = this.state.deck.find(character => character.name === name);
    this.setState({ userGuess: guess });
  },

  handleUserGuess: function () {
    this.setState({ guessMade: true });
    this.checkGuessCorrect();
  },

  checkGuessCorrect: function () {
    if (this.state.userGuess === this.state.deck[this.state.selected]) {
      this.setState({ guessCorrect: true });
    } else {
      this.setState({ guessCorrect: false });
    }
  }

});

module.exports = Game;

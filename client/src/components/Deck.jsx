const React = require('react');
const Character = require('./Character.jsx');

const Deck = React.createClass({
  render: function () {
    const characterElems = this.props.characters.map(function (character) {
      return <div className='deck' key={character.name}>
              <Character character={character}/>
            </div>;
    });

    return (
      <div>
        {characterElems}
      </div>
    );
  }
});

module.exports = Deck;

const React = require('react');

const Character = React.createClass({
  render: function () {
    let src = this.props.character.img;
    return (
      <div className='char'>
        <img className='char' src={src}/>
        <p className='yellow'>{this.props.character.name}</p>
        <br/>
      </div>
    );
  }
});

module.exports = Character;

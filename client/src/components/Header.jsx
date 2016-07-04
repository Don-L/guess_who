const React = require('react');

const Header = React.createClass({
  render: function () {
    return (
      <div>
        <img
          className='sf_logo'
          src="./bckg_etc/street_fighter_ii_logo_by_mdtartist83-d9kwn0n.png"/>
        <p className='header'>X</p>
        <img className='guess_who_logo'
             src="./bckg_etc/guesswho.jpg"/>
      </div>
    );
  }
});

module.exports = Header;

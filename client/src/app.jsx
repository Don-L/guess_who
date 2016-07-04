var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/Game.jsx');

window.onload = function () {
  ReactDOM.render(
    <div>
    <Game/>
    </div>,
    document.getElementById('app')
  );
};

const React = require('react');

const UserQuery = React.createClass({

  getInitialState: function () {
    let filteredOptions = this.props.queries.filter(function (query) {
      return !(query === 'name' || query === 'img');
    }
  );
    return { queryVal: filteredOptions[0],
             boolVal: 'true',
             readyToGuess: false };
  },

  render: function () {

    let filteredOptions = this.props.queries.filter(function (query) {
      return !(query === 'name' || query === 'img');
    }
    );
    let queryOptions = filteredOptions.map(function (query) {
      return <option key={query} value={query}>{query}</option>;
    }
    );
    let nameOptions = this.props.characters.map(function (name) {
      return <option key={name} value={name}>{name}</option>;
    }
    );
    let displayElement = <form className='form' onSubmit={this.takeGuess}>
                           <label className='yellow'>Your guess:</label>
                           <br/>
                           <select onChange={this.handleGuessChange}
                                   defaultValue='Balrog'
                           >
                           {nameOptions}
                           </select>
                           <input type='submit'/>
                         </form>;

    if (this.state.readyToGuess === false) {
      displayElement = null;
    }

    let topForm = <form className='form' onSubmit={this.topFormSubmit}>
                    <select onChange={this.onQuerySelect}
                            defaultValue={this.state.queryVal}>
                      {queryOptions}
                    </select>
                    <select onChange={this.onBoolSelect}>
                      <option value='true'>True</option>
                      <option value='false'>False</option>
                    </select>
                    <input type='submit'/>
                  </form>;

    if (this.state.readyToGuess === true) {
      topForm = null;
    }

    let button = <button onClick={this.userReady}>I'm ready to GUESS WHO!!</button>;
    if (this.state.readyToGuess === true) {
      button = null;
    }

    return (
      <div className='form_container'>
        {topForm}
        {button}
        {displayElement}
      </div>
    );
  },

  handleGuessChange: function (e) {
    this.props.setUserGuess(e.target.value);
  },

  takeGuess: function (e) {
    e.preventDefault();
    this.props.handleUserGuess();
  },

  userReady: function (e) {
    e.preventDefault();
    this.setState({ readyToGuess: true });
  },

  onQuerySelect: function (e) {
    this.setState({ queryVal: e.target.value });
  },

  onBoolSelect: function (e) {
    this.setState({ boolVal: e.target.value });
  },

  topFormSubmit: function (e) {
    e.preventDefault();
    this.props.topFormSubmit(this.state.queryVal, this.state.boolVal);
  }

});

module.exports = UserQuery;

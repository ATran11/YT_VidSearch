import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // remember the '= () =>' to avoid "this is undefined" error
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  // To avoid the browser from automatically submitting the form (aka refreshing every time you hit enter)
  onFormSubmit = event => {
    event.preventDefault();
    
    this.props.onFormSubmit(this.state.term);
    // TODO: callback from parent component
  };

  render() {
    return (
      // ui segment draws the rectangle, search-bar is a name for custom styling later
      <div className = "search-bar ui segment"> 
        <form onSubmit = {this.onFormSubmit} className = "ui form">
          <div className = "field">
            <label>Video Search</label> 
            <input 
              type = "text" 
              value = {this.state.term}
              onChange = {this.onInputChange} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

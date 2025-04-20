import React from 'react';
import ShoppingList from './ShoppingList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: 'light'
    };
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light'
    }));
  };

  render() {
    return (
      <div className={`app ${this.state.theme}`} data-testid="app">
        <button onClick={this.toggleTheme}>
          Toggle {this.state.theme} Mode
        </button>
        <ShoppingList />
      </div>
    );
  }
}

export default App;
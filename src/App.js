import React from 'react';
import Subject from './Components/Subject';
import TOC from './Components/TOC';
import Content from './Components/Content';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Subject title="Web" sub="World Wide Web!" />
        <Subject title="React" sub="For UI" />
        <TOC />
        <Content />
      </div>
    );
  }
}

export default App;

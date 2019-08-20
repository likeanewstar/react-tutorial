import React from 'react';
import Subject from './Components/Subject';
import TOC from './Components/TOC';
import Content from './Components/Content';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        subject: {
            title: 'WEB',
            sub: 'World Wide Web!'
        },
        contents: [
          {id: 1, title: 'HTML', desc: 'HTML is Hypertext Markup Languege.'},
          {id: 2, title: 'CSS', desc: 'CSS is for design.'},
          {id: 3, title: 'JavaScript', desc: 'Javascript is for interactive.'}
        ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} />
        <TOC data={this.state.contents} />
        <Content />
      </div>
    );
  }
}

export default App;

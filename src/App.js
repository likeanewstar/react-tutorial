import React from 'react';
import Subject from './Components/Subject';
import TOC from './Components/TOC';
import Content from './Components/Content';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        mode: 'welcome',
        subject: {
            title: 'WEB',
            sub: 'World Wide Web!'
        },
        welcome: {
          title: 'Welcome',
          desc: 'Hello React!'
        },
        contents: [
          {id: 1, title: 'HTML', desc: 'HTML is Hypertext Markup Languege.'},
          {id: 2, title: 'CSS', desc: 'CSS is for design.'},
          {id: 3, title: 'JavaScript', desc: 'Javascript is for interactive.'}
        ]
    }
  }
  render() {
    let _title, _desc;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} />
        <TOC data={this.state.contents} />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;

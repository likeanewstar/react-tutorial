import React from 'react';
import './App.css';

class Subject extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <p>{this.props.sub}</p>
      </header>
    );
  }
}

class TOC extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        <p>HTML is Hypertext Markup Language.</p>
      </article>
    );
  }
}

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

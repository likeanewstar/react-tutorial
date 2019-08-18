import React from 'react';
import './App.css';

class Subject extends React.Component {
  render() {
    return (
      <header>
        <h1>Web</h1>
        <p>World Wide Web!</p>
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
        <Subject />
        <TOC />
        <Content />
      </div>
    );
  }
}

export default App;

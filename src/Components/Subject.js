import React from 'react';

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

export default Subject;
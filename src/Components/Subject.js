import React from 'react';

class Subject extends React.Component {
    render() {
      return (
        <header>
          <h1><a href="#a" onClick={() => {this.props.onChangePage()}}>{this.props.title}</a></h1>
          <p>{this.props.sub}</p>
        </header>
      );
    }
}

export default Subject;
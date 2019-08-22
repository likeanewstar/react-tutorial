import React from 'react';

class TOC extends React.Component {
    render() {
      const lists = [];
      let data = this.props.data;
      let i = 0;
      while (i < data.length) {
        lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            // data- 로 시작하는 속성은 dataSet 속성을 통해 접근할 수 있다.
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }}
          >{data[i].title}</a>
        </li>)
        i = i + 1;
      }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

export default TOC;
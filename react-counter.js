'use strict';

const e = React.createElement;
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  render() {
    return (
      <button onClick={() => this.setState((state) => {return {count: state.count + 1}; })}>
        { this.state.count }
      </button>
    );
  }
}
const domContainer = document.querySelector('#react_counter');
ReactDOM.render(e(Counter), domContainer);

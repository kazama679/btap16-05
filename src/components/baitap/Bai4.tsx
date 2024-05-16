import React, { Component } from 'react';

interface Props {}
interface State {
  message: string;
}

export default class Bai4 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      message: 'Học code để đi làm'
    };
  }
  changeMessage = () => {
    this.setState({
      message: 'Học code sẽ thành công. Cố lên!!!'
    }, () => {
      console.log(this.state.message);
    });
  }
  shouldComponentUpdate() {
    return false; 
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Thay đổi state</button>
      </div>
    );
  }
}

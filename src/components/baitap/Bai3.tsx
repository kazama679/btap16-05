import React, { Component } from 'react';
interface Props{}
interface State{
    message:string
}
export default class Bai3 extends Component<Props,State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      message: 'Rikkei Academy'
    };
  }
  changeMessage = () => {
    this.setState({
      message: 'Rikkei Soft'
    });
  }
  render() {
    return (
      <div>
        <p>Company: {this.state.message}</p>
        <button onClick={this.changeMessage}>Thay đổi chữ</button>
      </div>
    );
  }
}
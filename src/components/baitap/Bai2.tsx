import React, { Component } from 'react';
interface Props{}
interface State{
    userName:string
}
export default class Bai2 extends Component<Props,State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      userName: 'Nguyễn Xuân Quang'
    };
  }
  componentDidMount() {
    console.log('Component đã được mount');
  }

  render() {
    return (
      <div>
            Xin chào, {this.state.userName}
      </div>
    );
  }
}
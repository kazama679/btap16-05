import React, { Component } from 'react';
interface Props{}
interface State{
    userName:string
}
export default class Bai1 extends Component<Props,State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      userName: 'Qi qi'
    };
  }
  render() {
    return (
      <div>
        Xin chào, {this.state.userName}!
      </div>
    );
  }
}
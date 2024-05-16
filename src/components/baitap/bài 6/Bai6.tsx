import React, { Component } from 'react'
import Bai6con from './Bai6con';
interface Props{}
interface State{
  message:string
}
export default class Bai6 extends Component<Props,State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      message: 'Interface rendering',
    };
  }
  updatemessage = () => {
    this.setState({ message: 'Interface rendering1' });
  }
  render() {
    return (
      <div>
        <Bai6con message={this.state.message} />
        <button onClick={this.updatemessage}>Change props</button>
      </div>
    )
  }
}
import React, { Component } from 'react';
interface Props {
  message: string;
}
export default class Bai5 extends Component<Props> {
  render() {
    return (
      <div>
        {this.props.message}
      </div>
    );
  }
}
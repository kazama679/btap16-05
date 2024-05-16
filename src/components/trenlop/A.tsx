import React, { Component } from 'react'

export default class A extends Component {
    componentWillUnmount(): void {
        console.log('componentWillUnmount đã bị tháo gỡ bởi DOM');
    }
  render() {
    return (
      <div>
        a
      </div>
    )
  }
}

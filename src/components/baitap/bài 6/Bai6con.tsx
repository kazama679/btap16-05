import React, { Component } from 'react';
interface Props {
  message: string;
}
interface State {
  internalMessage: string;
}
export default class Bai6con extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      internalMessage: props.message,
    };
  }
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.message !== prevState.internalMessage) {
      return {
        internalMessage: nextProps.message,
      };
    }
    return null;
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    return (
      <div>
        <h1>Message: {this.state.internalMessage}</h1>
      </div>
    );
  }
}
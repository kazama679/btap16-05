import React, { Component } from 'react';

interface Props {
  title: string;
}

interface State {}

export default class Bai7 extends Component<Props, State> {
  componentDidMount() {
    document.title = this.props.title;
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.title !== this.props.title) {
      document.title = this.props.title;
    }
  }

  render() {
    return (
      <div>
        <h1>Content of the Component</h1>
      </div>
    );
  }
}
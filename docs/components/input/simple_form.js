import React, { Component } from 'react';
import Input from '../../../src/lib/components/input';

class SimpleForm extends Component {
  state = { value: '' };

  onChange = e => this.setState({ value: e.target.value });

  render() {
    const { value } = this.state;

    return (
      <form>
        <Input value={value} onChange={this.onChange} lined />
      </form>
    );
  }
}

export default SimpleForm;

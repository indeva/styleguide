import React, { Component } from 'react';
import Input from '../../../src/lib/components/input';

class SimpleForm extends Component {
  state = {
    name: '',
    name2: 'Wrong',
  };

  onChangeName = e => this.setState({ name: e.target.value });

  onChangeName2 = e => this.setState({ name2: e.target.value });

  render() {
    const { name, name2 } = this.state;

    return (
      <form>
        <Input id="name1" label="Name 1" value={name} onChange={this.onChangeName} lined />
        <Input id="name2" label="Name 2" value={name2} onChange={this.onChangeName2} error="Wrong!" lined />
      </form>
    );
  }
}

export default SimpleForm;

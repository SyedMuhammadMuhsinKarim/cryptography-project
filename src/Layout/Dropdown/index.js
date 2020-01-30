import React, { Component } from "react";
import { Dropdown, Form, Container } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const options = [{ key: 1, text: "LAB ONE", value: "/cipher-lab-one" }];

class DropdownControlled extends Component {
  state = {};

  handleChange = (e, { value }) => {
    this.setState({ value });
    this.props.history.push(`${value}`);
  };

  render() {
    const { value } = this.state;

    return (
      <Container>
        <Form>
          <Form.Field>
            <label>Choose Algorithm:</label>
            <Dropdown
              fluid
              onChange={this.handleChange}
              options={options}
              placeholder="Choose an option"
              selection
              value={value}
            />
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default withRouter(DropdownControlled);

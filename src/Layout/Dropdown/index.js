import React, { Component } from "react";
import { Dropdown, Form, Container } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import * as ROUTES from "../../constant/routes";

const options = [
  { key: 1, text: "Simple Cipher", value: `${ROUTES.CIPHERONE}` },
  { key: 2, text: "Vigenere Cipher", value: `${ROUTES.CIPHERTWO}` },
  { key: 3, text: "Substitution Cipher", value: `${ROUTES.CIPHERTHREE}` }
  // { key: 4, text: "PlayFair Cipher", value: `${ROUTES.CIPHERFOUR}` }
];

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

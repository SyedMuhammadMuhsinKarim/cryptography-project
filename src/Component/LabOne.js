import React, { Component } from "react";
import { Form, Button, Input, Container } from "semantic-ui-react";

class LabOne extends Component {
  state = {};

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.textToCode();
  };

  handleDecryptSubmit = event => {
    event.preventDefault();
    this.codeToText();
  };

  textToCode() {
    const { text, key } = this.state;
    let textCode = text
      .toLowerCase()
      .split("")
      .map(
        value =>
          ((parseInt(value.charCodeAt(0), 10) + parseInt(key, 10) - 97) % 26) +
          97
      );
    console.log(textCode, String.fromCharCode(...textCode));
    this.setState({ decrypt: String.fromCharCode(...textCode) });
  }

  codeToText() {
    const { decryptInput, decryptKey } = this.state;
    let textCode = decryptInput
      .toLowerCase()
      .split("")
      .map(value => {
        let s =
          parseInt(value.charCodeAt(0), 10) - parseInt(decryptKey, 10) - 97;
        if (s < 0) {
          s = 26 - (Math.abs(s) % 26);
        } else if (s > 0) {
          s %= 26;
        } else {
          s = 0;
        }
        s = s + 97;
        return s;
      });
    console.log(textCode);
    this.setState({ encrypt: String.fromCharCode(...textCode) });
  }

  onEncrypt = () => {
    this.setState({ encryption: true, decryption: false });
  };

  onDecrypt = () => {
    this.setState({ decryption: true, encryption: false });
  };

  render() {
    const {
      text,
      decrypt,
      decryptInput,
      key,
      decryptKey,
      encrypt,
      encryption,
      decryption
    } = this.state;

    const isinvalid =
      text === undefined || text === null || key === undefined || key === null;
    const isinvalidDecrypt =
      decryptInput === undefined ||
      decryptInput === null ||
      decryptKey === undefined ||
      decryptKey === null;

    return (
      <Container>
        <Container textAlign="center">
          <Button onClick={this.onEncrypt}>Encryption</Button>
          <Button onClick={this.onDecrypt}>Decryption</Button>
        </Container>
        {encryption && (
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Enter Plain Text (Only Letter)</label>
              <Input
                name="text"
                onKeyPress="return /[a-z]/i.test(event.key)"
                value={text}
                onChange={this.handleChange}
              />
            </Form.Field>

            <Form.Field>
              <label>Enter Key</label>
              <Input
                name="key"
                value={key}
                onChange={this.handleChange}
                type="number"
              />
            </Form.Field>

            <Form.Field>
              <Button disabled={isinvalid} type="submit">
                Encrypt Text
              </Button>
            </Form.Field>

            <Form.Field>
              <label>Decrypted Text</label>
              <Input disabled value={decrypt} />
            </Form.Field>
          </Form>
        )}

        {decryption && (
          <Form onSubmit={this.handleDecryptSubmit}>
            <Form.Field>
              <label>Enter Decrypt Text (Only Letter)</label>
              <Input
                name="decryptInput"
                value={decryptInput}
                onChange={this.handleChange}
              />
            </Form.Field>

            <Form.Field>
              <label>Enter Key</label>
              <Input
                name="decryptKey"
                value={decryptKey}
                onChange={this.handleChange}
                type="number"
              />
            </Form.Field>

            <Form.Field>
              <Button disabled={isinvalidDecrypt} type="submit">
                Decrypt Text
              </Button>
            </Form.Field>

            <Form.Field>
              <label>Plain Text</label>
              <input disabled value={encrypt} />
            </Form.Field>
          </Form>
        )}
      </Container>
    );
  }
}

export default LabOne;

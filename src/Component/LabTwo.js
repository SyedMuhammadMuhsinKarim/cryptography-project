import React, { Component } from "react";
import { Form, Button, Input, Container } from "semantic-ui-react";

class LabTwo extends Component {
  state = { encryption: true };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newKey = this.keyGeneration(this.state.text, this.state.key);
    this.textToCode(newKey);
  };

  handleDecryptSubmit = event => {
    event.preventDefault();
    const newKeyDecrypt = this.keyGeneration(
      this.state.decryptInput,
      this.state.decryptKey
    );
    this.codeToText(newKeyDecrypt);
  };

  keyGeneration(string, key) {
    let str;
    if (string.length === key.length) {
      return key;
    } else {
      str = key.repeat(string.length);
      if (str.length > string.length) {
        str = str.slice(0, string.length);
      }
    }
    return str;
  }

  textToCode(newKey) {
    const { text } = this.state;
    let extractKey = newKey
      .toUpperCase()
      .split("")
      .map(value => parseInt(value.charCodeAt(0), 10));

    let textCode = text
      .toUpperCase()
      .split("")
      .map((value, i) => {
        return (
          ((parseInt(value.charCodeAt(0), 10) - 65 + extractKey[i] - 65) % 26) +
          65
        );
      });

    // console.log(textCode, String.fromCharCode(...textCode));
    this.setState({ decrypt: String.fromCharCode(...textCode) });
  }

  codeToText(newKeyDecrypt) {
    const { decryptInput } = this.state;

    let extractKeyDecrypt = newKeyDecrypt
      .toUpperCase()
      .split("")
      .map(value => parseInt(value.charCodeAt(0), 10));

    let textCode = decryptInput
      .toUpperCase()
      .split("")
      .map((value, i) => {
        let s =
          parseInt(value.charCodeAt(0), 10) - 65 - (extractKeyDecrypt[i] - 65);
        if (s < 0) {
          s = 26 - (Math.abs(s) % 26);
        } else if (s > 0) {
          s %= 26;
        } else {
          s = 0;
        }
        s = s + 65;
        return s;
      });
    // console.log(textCode);
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
        {" "}
        {/* Error Resolve: I put <Component></Component> */}
        <Container textAlign="center">
          <Button onClick={this.onEncrypt}>Encryption</Button>
          <Button onClick={this.onDecrypt}>Decryption</Button>
        </Container>
        {encryption && (
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Enter Plain Text (Only Letter)</label>
              <Input name="text" value={text} onChange={this.handleChange} />
            </Form.Field>

            <Form.Field>
              <label>Enter Key</label>
              <Input
                name="key"
                value={key}
                onChange={this.handleChange}
                type="text"
              />
            </Form.Field>

            <Form.Field>
              <Button disabled={isinvalid} type="submit">
                Encrypt Text
              </Button>
            </Form.Field>

            <Form.Field>
              <label>Decrypted Text</label>
              <Input disabled inverted value={decrypt} />
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
                type="text"
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

export default LabTwo;

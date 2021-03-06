import React, { Component } from "react";
import { Form, Button, Input, Container } from "semantic-ui-react";
import playfair from "crypto-classic-playfair";

class LabFour extends Component {
  state = { encryption: true };

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
    var ciperText = playfair.encipher(text, key);
    this.setState({ decrypt: ciperText });
  }

  codeToText() {
    const { decryptInput, decryptKey } = this.state;

    var plainText = playfair.decipher(decryptInput, decryptKey);
    this.setState({ encrypt: plainText });
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
              <label>Enter Key (Remove J)</label>
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
              <label>Enter Key (Remove J)</label>
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

export default LabFour;

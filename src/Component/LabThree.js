import React, { Component } from "react";
import { Form, Button, Input, Container } from "semantic-ui-react";

class LabThree extends Component {
  state = { encryption: true };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const enc = this.encryptDecrypt(this.state.text);
    this.setState({ decrypt: enc });
  };

  handleDecryptSubmit = event => {
    event.preventDefault();
    const dec = this.encryptDecrypt(this.state.decryptInput, true);
    this.setState({ encrypt: dec });
  };

  encryptDecrypt(text, decode = false) {
    var map = {
      a: "q",
      b: "w",
      c: "e",
      d: "r",
      e: "t",
      f: "y",
      g: "u",
      h: "i",
      i: "o",
      j: "p",
      k: "a",
      l: "s",
      m: "d",
      n: "f",
      o: "g",
      p: "h",
      q: "j",
      r: "k",
      s: "l",
      t: "z",
      u: "x",
      v: "c",
      w: "v",
      x: "b",
      y: "n",
      z: "m"
    };

    if (decode) {
      map = (function() {
        var tmp = {};
        var k;

        for (k in map) {
          if (!map.hasOwnProperty(k)) continue;
          tmp[map[k]] = k;
        }

        return tmp;
      })();
    }

    return text
      .split("")
      .filter(v => map.hasOwnProperty(v.toLowerCase()))
      .map(v => map[v.toLowerCase()].toUpperCase())
      .join("");
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
      encrypt,
      encryption,
      decryption
    } = this.state;

    const isinvalid = text === undefined || text === null;
    const isinvalidDecrypt =
      decryptInput === undefined || decryptInput === null;

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
              <Input name="text" value={text} onChange={this.handleChange} />
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

export default LabThree;

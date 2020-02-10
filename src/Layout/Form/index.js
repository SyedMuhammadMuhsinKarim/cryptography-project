import React from "react";
import { Form, Button, Input } from "semantic-ui-react";

const FormElement = ({
  handleSubmit,
  firstInputName,
  text,
  handleChange,
  secondInputName,
  key,
  isinvalid,
  buttonName,
  thirdInputName,
  decrypt
}) => (
  <Form onSubmit={handleSubmit}>
    <Form.Field>
      <label>{firstInputName}</label>
      <Input name="text" value={text} onChange={handleChange} />
    </Form.Field>

    <Form.Field>
      <label>{secondInputName}</label>
      <Input name="key" value={key} onChange={handleChange} type="number" />
    </Form.Field>

    <Form.Field>
      <Button disabled={isinvalid} type="submit">
        {buttonName}
      </Button>
    </Form.Field>

    <Form.Field>
      <label>{thirdInputName}</label>
      <Input disabled value={decrypt} />
    </Form.Field>
  </Form>
);

export default FormElement;

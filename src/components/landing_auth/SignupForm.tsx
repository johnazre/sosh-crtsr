import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

// TODO: Add state for signup form
const SignupForm = (props: {}) => {
  return (
    <Form>
      <FormGroup>
        <Label for='name'>Name</Label>
        <Input type='text' name='name' id='name' />
      </FormGroup>
      <FormGroup>
        <Label for='exampleEmail'>Email</Label>
        <Input type='email' name='email' id='exampleEmail' />
      </FormGroup>
      <FormGroup>
        <Label for='verify_email'>Verify Email</Label>
        <Input type='email' name='verify_email' id='verify_email' />
      </FormGroup>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
export default SignupForm

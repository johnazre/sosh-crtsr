import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

// TODO: Add state for login form
const LoginForm = (props: {}) => {
  return (
    <Form>
      <FormGroup>
        <Label for='exampleEmail'>Email</Label>
        <Input type='email' name='email' id='exampleEmail' />
      </FormGroup>
      <FormGroup>
        <Label for='examplePassword'>Password</Label>
        <Input type='password' name='password' id='examplePassword' />
      </FormGroup>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
export default LoginForm

import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button
} from 'reactstrap'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
const LandingPage = (props: {}) => {
  return (
    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader tag='h3'>Login</CardHeader>
            <CardBody>
              <LoginForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader tag='h3'>Signup</CardHeader>
            <CardBody>
              <SignupForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default LandingPage

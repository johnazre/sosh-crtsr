import React from 'react'
import {
  CardHeader,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap'

const styles = {
  card: {
    margin: '15px 0'
  },
  button: {
    marginLeft: 20
  }
}

const NewStatusForm = (props: {}) => {
  return (
    <Card style={styles.card}>
      <CardHeader tag='h5'>Add a new status</CardHeader>
      <CardBody>
        <Form>
          <FormGroup>
            <Row noGutters>
              <Col sm={{ size: 8, offset: 1 }}>
                <Input
                  type='text'
                  name='newStatus'
                  id='newStatus'
                  placeholder='Tell your friends what you are up to!'
                />
              </Col>
              <Col>
                <Button color='primary' style={styles.button}>
                  Share
                </Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

export default NewStatusForm

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import NewStatusForm from '../dashboard/NewStatusForm'
import StatusList from '../dashboard/StatusList'

const styles = {
  container: {
    padding: 0,
    backgroundColor: '#ddd'
  }
}

const ContentArea = (props: {}) => {
  return (
    <Container fluid style={styles.container}>
      <Row>
        <Col sm={{ size: 10, offset: 1 }}>
          <NewStatusForm />
        </Col>
      </Row>
      <Row>
        <Col>
          <StatusList />
        </Col>
      </Row>
    </Container>
  )
}
export default ContentArea

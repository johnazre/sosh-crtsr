import React from 'react'
import Status from './Status'
import { Container, Row, Col } from 'reactstrap'

const styles = {
  container: {
    padding: 0
  }
}

const StatusList = (props: {}) => {
  return (
    <Container fluid style={styles.container}>
      <Row>
        <Col sm={{ size: 10, offset: 1 }}>
          <Status />
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 10, offset: 1 }}>
          <Status />
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 10, offset: 1 }}>
          <Status />
        </Col>
      </Row>
    </Container>
  )
}
export default StatusList

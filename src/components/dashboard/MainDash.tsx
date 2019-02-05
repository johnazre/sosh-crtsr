import React from 'react'
import SideNav from '../main_layout/SideNav'
import ContentArea from '../main_layout/ContentArea'
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'

const styles = {
  container: {
    padding: 0
  }
}

const MainDash = (props: {}) => {
  return (
    <Container fluid style={styles.container}>
      <Row noGutters>
        <Col sm={{ size: 3 }}>
          <SideNav />
        </Col>
        <Col sm={{ size: 9 }}>
          <ContentArea />
        </Col>
      </Row>
    </Container>
  )
}
export default MainDash

import React, { Component } from 'react'
import Status from './Status'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { fetchStatuses } from '../../redux/actions/statuses'
import { IStatus } from '../../redux/reducers/statuses'

const styles = {
  container: {
    padding: 0
  }
}

interface Props {
  fetchStatuses: any
  user: any
  statuses: IStatus[]
}

interface Status {}

class StatusList extends Component<Props> {
  componentDidMount() {
    this.props.fetchStatuses(this.props.user.id)
  }

  render() {
    console.log('status list', this.props)
    let listOfStatuses = this.props.statuses.map((status: any) => (
      <Row key={status.id}>
        <Col sm={{ size: 10, offset: 1 }}>
          <Status status={status} />
        </Col>
      </Row>
    ))
    return (
      <Container fluid style={styles.container}>
        {listOfStatuses}
      </Container>
    )
  }
}

const mstp = (state: any) => ({
  user: state.auth.user,
  statuses: state.statuses
})

export default connect(
  mstp,
  { fetchStatuses }
)(StatusList)

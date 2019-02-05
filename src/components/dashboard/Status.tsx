import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap'
import Moment from 'react-moment'

import { IStatus } from '../../redux/reducers/statuses'

const styles = {
  card: {
    marginBottom: 15
  }
}

interface Stuff extends IStatus {
  name?: string
}

interface Props {
  status: Stuff
}

const Status = (props: Props) => {
  let { status } = props
  return (
    <Card style={styles.card}>
      <CardBody>
        <CardTitle>
          <b>{status.name}</b>
        </CardTitle>
        <CardSubtitle>
          <small>
            <Moment fromNow>{status.created_at}</Moment>
          </small>
        </CardSubtitle>
        <CardText>{status.content}</CardText>
      </CardBody>
      {/* // TODO: Could add a button to send message to this person */}
    </Card>
  )
}

export default Status

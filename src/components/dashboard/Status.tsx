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

const styles = {
  card: {
    marginBottom: 15
  }
}

const Status = (props: {}) => {
  return (
    <Card style={styles.card}>
      <CardBody>
        <CardTitle>
          <b>James Taylor</b>
        </CardTitle>
        <CardSubtitle>
          <small>Yesterday</small>
        </CardSubtitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
          varius ipsum. Aenean sagittis eget nulla suscipit vulputate. Phasellus
          vel neque massa. Aliquam rutrum iaculis consectetur.
        </CardText>
      </CardBody>
      {/* // TODO: Could add a button to send message to this person */}
    </Card>
  )
}

export default Status

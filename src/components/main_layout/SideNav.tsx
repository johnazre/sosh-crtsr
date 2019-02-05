import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const styles = {
  listGroup: { borderRight: '1px solid black', minHeight: 600 }
}

const SideNav = (props: {}) => {
  return (
    <ListGroup flush style={styles.listGroup}>
      <ListGroupItem tag={Link} to='/'>
        Mini Picture of User | User name
      </ListGroupItem>
      <ListGroupItem tag={Link} to='/'>
        Home
      </ListGroupItem>
      <ListGroupItem tag={Link} to='/'>
        Messages
      </ListGroupItem>
      <ListGroupItem tag={Link} to='/'>
        Pages
      </ListGroupItem>
      <ListGroupItem tag={Link} to='/'>
        Groups
      </ListGroupItem>
      <ListGroupItem tag={Link} to='/'>
        Settings
      </ListGroupItem>
      <ListGroupItem tag={Link} to='/' />
    </ListGroup>
  )
}
export default SideNav

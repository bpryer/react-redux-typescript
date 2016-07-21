import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import UserDetail from './user-detail'

// import actions
import { selectUser } from '../actions/user.actions'

class UserList extends React.Component<any, any> {

  // render the component
  public render() {
    return (
      <ul>
        {this.createListItems() }
      </ul>
    )
  }

  // create a list of users
  private createListItems() {
    return this.props.users.map((user) => {
      return (
        <li
          key={user.id}
          onClick={() => this.props.selectUser(user) }
          >
          {user.first} {user.last}
        </li>
      )
    })
  }
}

// map application state to props
const mapStateToProps = (state: any) => {
  return {
    users: state.users
  }
}

// map dispatch functions to props
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectUser }, dispatch)
}

// create the smart component
const ContainerUserList = connect(
  mapStateToProps,
  matchDispatchToProps
)(UserList)

export default ContainerUserList

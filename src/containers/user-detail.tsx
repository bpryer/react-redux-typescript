import * as React from 'react'
import { connect } from 'react-redux'

class UserDetail extends React.Component<any, any> {
  public render() {
    if (!this.props.user) {
      return (
        <div>
          Select a user...
        </div>
      )
    }
    return (
      <div>
        <h2>
          {this.props.user.first} {this.props.user.last}
        </h2>
        <h3>{this.props.user.description}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    user: state.activeUser
  }
}

const ContainerUserDetail = connect(mapStateToProps)(UserDetail)

export default ContainerUserDetail

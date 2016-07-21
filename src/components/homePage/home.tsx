import * as React from 'react'
import UserList from '../../containers/user-list'
import UserDetail from '../../containers/user-detail'

export class Home extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h1>Hello from the home page.</h1>
        <hr />
        <UserList />
        <hr />
        <h2>User Details:</h2>
        <UserDetail />
      </div>
    )
  }
}

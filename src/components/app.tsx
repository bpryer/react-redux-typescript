import * as React from 'react'
import { Header } from './common/header'

interface Props extends React.Props<App> {}

export class App extends React.Component<Props, {}> {
  public render() {
    return (
      <div className=''>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

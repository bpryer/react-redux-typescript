import * as React from 'react'
import { Link } from 'react-router'

/**
 * Header - Nav component
 * 
 * @export
 * @class Header
 * @extends {React.Component<any, any>}
 */
export class Header extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <nav className='c-nav c-nav--inline'>
          <Link to='/home' className='c-nav__item'>Home</Link>
          <Link to='/about' className='c-nav__item'>About</Link>
        </nav>
      </div>
    )
  }
}

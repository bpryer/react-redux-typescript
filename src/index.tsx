// import react modules
import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// redux imports
import { createStore } from 'redux'

// react-redux imports
import { Provider } from 'react-redux'

// import reducers
import { rootReducer } from './reducers'

// create stor
// const store = createStore(allReducers)
let store = createStore(rootReducer, window['devToolsExtension'] && window['devToolsExtension']());

// import app component
import { App } from './components/app'
import { Home } from './components/homePage/home'
import { About } from './components/aboutPage/about'

// used to stop the unused import for React
if (React.version === 'abc') {
  console.log('hi')
}

// render the app
ReactDom.render(
  // jsx
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
      </Route>
    </Router>
  </Provider>,

  document.getElementById('root')
)

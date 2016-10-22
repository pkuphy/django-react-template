import React from "react"
import ReactDOM from 'react-dom'
import Test from './components/test'

class App1 extends React.Component {
  render() {
    return (
      <Test />
    )
  }
}

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App1/>, document.getElementById('App1'));

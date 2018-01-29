const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Main = require('../layout')
const initialState = require('../state.json')

const ControllerService = (app) => {
  // app routes
  app.get('/', (req, res) => {
    res.send(Main({
      title: 'Brakli',
      stylesheetURL: '',
      scriptURL: '/js/app.js',
      initialState
    }))
  })
}

module.exports = ControllerService
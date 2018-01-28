const Main = require('../layout')

const ControllerService = (app) => {
  // app routes
  app.get('/', (req, res) => {
    res.send(Main({
      title: 'Brakli',
      stylesheetURL: '',
      scriptURL: ''
    }))
  })
}

module.exports = ControllerService
const Main = ({
  title = 'Brakli',
  stylesheetURL = '',
  scriptURL = '',
  initialState = {}
}) => `

<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
    <link rel='stylesheet' href='/css/_main.css' />
    <link rel='stylesheet' href='${stylesheetURL}' />
    <script>
      window.INITIAL_STATE = ${JSON.stringify(initialState)}
    </script>
  </head>
  <body>
    <div id='app'></div>
    <script src='${scriptURL}'></script>
  </body>
</html>
`

module.exports = Main

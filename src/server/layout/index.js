const Main = ({
  title = 'Brakli',
  stylesheetURL = '',
  scriptURL = ''
}) => `

<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
    <link rel='stylesheet' href='${stylesheetURL}'/>
  </head>
  <body>
    <article id='app'></article>
    <script src='${scriptURL}'></script>
  </body>
</html>
`

module.exports = Main
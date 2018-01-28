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
    <article id='page'>
      <div style='width: 100px; height: 200px; background-color: yellow;' id='t'>
        testsssss
      </div>
    </article>
    <script>
      const socket = new WebSocket('ws://localhost:8880')

      // Connection opened
      socket.addEventListener('open', e => socket.send('Hello Server!'))

      // Listen for messages
      socket.addEventListener('message', e => console.log('Message from server ', event.data))

      document
        .getElementById('t')
        .addEventListener('click',
          e => socket.send(JSON.stringify({a: 'b'}))
        )
    </script>
    <script src='${scriptURL}'></script>
  </body>
</html>
`

module.exports = Main
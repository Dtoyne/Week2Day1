var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML(options, callback) {
  var dataReceived = [];

var https = require('https');

https.get(options, function (response) {
  response.setEncoding('utf8');
  response.on('err', function (err) {
    console.log('Error. ' + err + '\n');
  });
  response.on('data', function(data) {
    console.log('Received Chunk of length:', data.length + '\n');
      dataReceived.push(data)
  });
  response.on('end', function() {
    console.log('Stream complete!\n');
    console.log('Total data received:', dataReceived.length);
    callback(dataReceived.join())
    })
  })
}

  function printHTML(html) {
    console.log(html);
};

getHTML(requestOptions, printHTML);

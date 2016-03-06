var mcpe = require('../');

var parser = mcpe.createDeserializer();
var serializer = mcpe.createSerializer();

serializer.write('mcpe_player_status', {
  status: 1
});

serializer.pipe(parser);

parser.on('error', function(err) {
  console.log(err.stack);
})

parser.on('data', function(chunk) {
  console.log(JSON.stringify(chunk, null, 2));
});

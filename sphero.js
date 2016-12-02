var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bluetooth: {
      adaptor: 'central',
      uuid: "PUT YOUR UUID HERE", //run ./node_modules/cylon-ble/examples/discovery/discovery.js
      module: 'cylon-ble',
    devices:{
      sphero: {
        driver: 'bb8',
        module: 'cylon-sphero-ble'
      }
    }
  }
  },

  work: function(my) {
    my.sphero.color("purple");
    after(3000, function() {
      my.sphero.color("red");
    });
    after(6000, function() {
      my.sphero.color("green");
    });
    after(9000, function() {
      my.sphero.color("blue");
    });
    after(12000, function() {
      my.sphero.color("white");
    });
  }
}).start();

angular.module('starter.services', [])

.factory('Data', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var data = [{

    id: 0,
    word: 'small',
    translate: 'bé',
    img: 'img/small.jpg',
    audio: 'audio/small.ogg'
  }, {
    id: 1,
    word: 'cake',
    translate: 'bánh',
    img: 'img/cake.jpg',
    audio: 'audio/cake.ogg'
  }, {
    id: 2,
    word: 'table',
    translate: 'bàn',
    img: 'img/table.JPG',
    audio: 'audio/table.ogg'
  }, {
    id: 3,
    word: 'boring',
    translate: 'chán',
    img: 'img/boring.jpg',
    audio: 'audio/boring.ogg'
  }, {
    id: 4,
    word: 'mouse',
    translate: 'chuột',
    img: 'img/mouse.jpg',
    audio: 'audio/mouse.ogg'
  }];

  return {
    all: function() {
      return data;
    },
    remove: function(chat) {
      data.splice(data.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === parseInt(chatId)) {
          return data[i];
        }
      }
      return null;
    }
  };
});

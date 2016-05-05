// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('ended', this.playNext, this);
    this.on('dequeue', this.dequeue, this);
  },

  enqueue: function (song) {
    this.add(song);
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function () {
    this.at(0).play();
  },

  dequeue: function (song) {
    this.remove(song);
  },

  playNext: function () {
    this.shift();
    if (this.length >= 1) {
      this.playFirst();   
    } 
  }

});

// once the song ends - this.on('remove', this.dequeue, this)
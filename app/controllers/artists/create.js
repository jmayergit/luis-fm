import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      var userInput = this.get(name).userInput;
      var artist = this.store.createRecord('artist', {
        name: userInput
      });
      artist.save();
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
       books: this.store.findAll('book'),
       reviews: this.store.findAll('review')
     });
   },
 actions:
 {
    saveBook(params) {
      var newBook = this.store.createRecord('book', params);
      newBook.save();
      this.transitionTo('index');
    },
    saveReview(params) {
        var newReview = this.store.createRecord('review', params);
        newReview.save();
        this.transitionTo('index');
      }
    }
  });

import Ember from 'ember';

export default Ember.Component.extend({

  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
     var params = {
       user: this.get('user'),
       rating: parseInt(this.get('rating')),
       content: this.get('content'),
       book: this.get('book')
     };
     this.set('addNewReview', false);
     this.sendAction('saveReview', params);
   }
  }
});

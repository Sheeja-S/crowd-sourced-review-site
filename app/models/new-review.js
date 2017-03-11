import DS from 'ember-data';

export default DS.Model.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
     var params = {
       user: this.get('user'),
       rating: this.get('rating'),
       content: this.get('content'),
       book: this.get('book')
     };
     this.set('addNewReview', false);
     this.sendAction('saveReview', params);
   }
  }
});

import Ember from 'ember';

export function bookPopularity(params) {

  var book = params[0];
  if(book.get('reviews').get('length') >= 4){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-up"></span>');
  }
  else if(book.get('reviews').get('length') < 2){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-down"></span>');
  }
}

export default Ember.Helper.helper(bookPopularity);

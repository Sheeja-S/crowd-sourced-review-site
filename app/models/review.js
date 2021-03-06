import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  rating: DS.attr(),
  content: DS.attr(),
  book: DS.belongsTo('book', { async: true }),
});

import DS from 'ember-data';
const {attr, hasMany} = DS

export default DS.Model.extend({
    // page: attr('string'),
    // total_pages: attr('number'),
    // total_results: attr('number'),
    // results: attr('string')
    // id: attr('string'),
    poster_path: attr('string'),
    title: attr('string'),
    overview: attr('string')
});

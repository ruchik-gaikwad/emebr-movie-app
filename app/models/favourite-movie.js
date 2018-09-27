import DS from 'ember-data';
import attr from 'ember-data/attr';


export default DS.Model.extend({
    poster_path: attr('string'),
    title: attr('string'),
    overview: attr('string')
});

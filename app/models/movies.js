import DS from 'ember-data';
import {attr} from 'ember-data/attr';


export default DS.Model.extend({
   id: attr('number'),
   title: attr('string'),
   poster: attr('string')
});

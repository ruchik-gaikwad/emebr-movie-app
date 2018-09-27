import DS from 'ember-data';
import { computed } from '@ember/object';


export default DS.RESTAdapter.extend({
    host: 'https://api.themoviedb.org',
    headers: {},
    namespace: '3/trending/movies/week',
    buildURL (modelName, id, snapshot, requestType, query) {
        return `${this.host}/${this.namespace}?api_key=46cb0826bc9d924445bc90903e183ebf`
    }
    
});

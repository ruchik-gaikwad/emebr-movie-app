import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
        payload = {
           trending: payload.results
        }
         
        //  payload['']  
        // console.log(payload, id,"asdaadasasd");
        return this._super(store, primaryModelClass, payload, id, requestType)
    }
});

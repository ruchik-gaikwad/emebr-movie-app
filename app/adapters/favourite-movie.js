import DS from 'ember-data';
import Em from 'ember'
// import { resolve } from 'url';

export default DS.RESTAdapter.extend({
    host: "http://localhost:3000",
    namespace: "favourite",
    createRecord(store, type, snapshot) {
        let data = this.serialize(snapshot, { includeId: true });
        let url = `${this.host}/${this.namespace}/`;
        console.log(data, url, "asdasdadasdadsasd")
        
        debugger
        return new Promise((resolve, reject) => {
            Em.$.ajax({
                type: 'POST',
                url: url,
                contentType: 'application/json',
                data: JSON.stringify(data),
                statusCode: {
                    200: () => {
                        Em.run(null, resolve)
                    }
                }
            })
        })
      },
      deleteRecord(store, type, snapshot) {
        debugger
        return new Promise((resolve, reject) => {
            console.log(snapshot)
            Em.$.ajax({
                type: 'DELETE',
                contentType: 'appication/json',
                url: `${this.host}/${this.namespace}/${snapshot.id}`,
                statusCode: {
                    200: () => {
                        Em.run(null, resolve)
                    },
                    404:() =>  {
                        Em.run(null, resolve)
                    }
                }
            })
        })
      },
    buildURL (modelName, id, snapshot, requestType, query) {
        debugger
        // let data = this.serialize(snapshot, { includeId: true });
        // console.log(data)
        return `${this.host}/${this.namespace}/${id?id : ''}`  
    },
});

import Route from '@ember/routing/route';
import  Ember  from 'ember';
// import embeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

export default Route.extend({

    model() {
        console.log(this.get('routeName'))
        // this.store.findAll('trending').toArray
       return this.store.findAll('trending')
    return {
        a: "hello",
        b: "world"
    }
    },
    

    
});

let a = Ember.Object.extend({
    init(){
        this._super(...arguments);
        this.firstName = 'Betty';
        this.lastName = 'Jones';
    },
    fullName: Ember.computed('firstName', 'lastName', {
        get(key) {
            return `${this.get('firstName')} ${this.get('lastName')}`;
          },
          set(key, value) {
            let [firstName, lastName] = value.split(/\s+/);
            this.setProperties({ firstName, lastName });
            return value;
          }
    }) 
})

import Controller from '@ember/controller';
// import { Ember } from 'ember';


export default Controller.extend({
    
    checkCurrentRoute: Ember.computed('currentChat', function (){
        console.log()
        let currentPath = Ember.getOwner(this).lookup('controller:application').currentPath
        if(currentPath === 'favourite'){
                return true
         } else {
             return false
         }
    }),
    actions: {
        delete (movie) {
            console.log(this.store, movie.get('id'))
            this.store.findRecord('favourite-movie', parseInt(movie.get('id'), {backgroundReload: true})).then(data => {
                // console.log(data.get('title'))
                data.deleteRecord()
                data.save()
            })
            console.log(movie)
        }
    } 
});

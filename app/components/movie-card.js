import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    // actions: {
    //     select (movie) {
    //         console.log(movie.get('id'))
    //     },
    //     // addToFavs(){
    //     //     console.log(this.movie.get('title'))
    //     // }
    // },
    // hideHomeButtonRoutes: ['index', 'login'], 
    // isFavouriteButtonVisible: Ember.computed('currentRouteName', function() { 
    //     // console.log(this.get(''))
    //     return true 
    //     // return this.get('hideHomeButtonRoutes').indexOf(this.get('currentRouteName')) > -1; 
    // })
    // click: function () {
    //             this.sendAction('action', this.movie)
    //         }
    actions: {
        favs(movie) {
            this.ruchik(movie)
        },
        delete(movie) {
            this.delete(movie)
        }
        
    }
});

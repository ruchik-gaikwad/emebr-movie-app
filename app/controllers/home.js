import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addToFavs(movie) {
            console.log("jasdhjkadhjaksdjkdh~~~~~~" )
            let movieAdd = this.store.createRecord('favourite-movie', {
                id: movie.get('id'),
                title: movie.get('title'),
                overview: movie.get('overview'),
                poster_path: movie.get('poster_path')
                
            })
            // this.store.findAll('favourite-movie')
            movieAdd.save().then(data => {
                console.log(data.get('id'))
            })
        },
       
    },
    
});

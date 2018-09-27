import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('favourite-movie')
    },
    setupController(controller, model) {
        this._super(controller, model);
        // this.controller
    }
});

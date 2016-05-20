import Ember from 'ember';
export default Ember.Controller.extend({
  myModel: Ember.computed(function () {
    return {firstName: 'Miguel'};
  })

  // "addon-with-disable-proxy-controllers": "file:../addon-with-disable-proxy-controllers"
});

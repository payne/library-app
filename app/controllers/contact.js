import Ember from 'ember';

export default Ember.Controller.extend({

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    emailAddress: '',
    message: '',

    actualEmailAddress: Ember.computed('emailAddress', function() { 
      console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    }),

    emailAddressChanged: Ember.observer('emailAddress', function() { 
      console.log('observer is called', this.get('emailAddress')); 
    }),
    actions: {

      saveInvitation() {
        alert(`Sending of the following email is in progress: ${this.get('emailAddress')}`);
        this.set('responseMessage', `Thank you! We've just sent your email from: ${this.get('emailAddress')}`);
        this.set('emailAddress', '');
      }
    }
});

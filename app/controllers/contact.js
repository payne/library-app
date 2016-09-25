import Ember from 'ember';

export default Ember.Controller.extend({
    // TODO(MGP): Learn to write tests for this!
    isLongEnough: Ember.computed.gte('message.length', 7),
    isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isValid: Ember.computed.and('isLongEnough', 'isValidEmail'),
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

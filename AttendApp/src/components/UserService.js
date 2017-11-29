import Realm from 'realm';
import repository from './Repository.js';

let UserService = {
  findAll: function (){
    return repository.objects('User');
  },

  save: function(user){
    if(repository.objects('User').filtered("email = '" + user.email + "'").length) return;

    repository.write(() => {
      repository.create('User', user);
    })
  }
};

module.exports = UserService;

const nodePath = require('path');

var getPlopActions = require('./plopActions').getPlopActions;

function validate(name, value) {
  if ((/.+/).test(value)) {
    return true;
  }
  return name + ' is required';
}

const defaults = function(name) { 

  const p = [{
        type: 'input',
        name: 'name',
        message: name + ' for? ',
        validate: validate.bind(this, name + ' name')
      },
      {
        type: 'input',
        name: 'dirPath',
        message: 'Directory Path : '
      }];
  return { 
    description: 'New ' + name,
    prompts:  p
  }
}

function ngrxForRXJSVersion6(plop) {
    plop.setGenerator('RXJS Version 6', 
      Object.assign({}, defaults('Generate NGRX feature module with RXJS version 6'), {
        description: 'Actions, Reducer, Service, Effect, State and Module',
        actions: [].concat(getPlopActions('rxjs6'))
      })
  );
}

function ngrxForRXJSVersion5(plop) {
  plop.setGenerator('RXJS Version 5', 
    Object.assign({}, defaults('Generate NGRX feature module with RXJS version 5'), {
      description: 'Actions, Reducer, Service, Effect, State and Module',
      actions: [].concat(getPlopActions('rxjs5'))
    })
);
}

module.exports = function (plop) {

  plop.addHelper('dir', (path) => {
   if(path) {
     return nodePath.resolve(process.cwd(), path);
   }

    return nodePath.resolve(process.cwd(), '.');
  });

  plop.setWelcomeMessage("Hello, select one of the following option");

  ngrxForRXJSVersion6(plop);
  ngrxForRXJSVersion5(plop);

};
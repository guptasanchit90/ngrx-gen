const get = require('lodash.get');
const pkg = require('./package.json');
const finder = require('find-package-json');
const pjson = finder().next().value;
const nodePath = require('path');
const pkgDir = require('pkg-dir');

var plopActions = require('./plopActions').plopActions;

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

function ngrxWithService(plop) {
    plop.setGenerator('Generate complete module (Recommended)', 
      Object.assign({}, defaults('Generate complete module'), {
        description: 'Actions, Reducer, Service, Effect, State and Module',
        actions: [].concat(plopActions.ngrx, plopActions.service, plopActions.module)
      })
  );
}

function ngrxWithoutService(plop) {
  plop.setGenerator(
    'Generate only ngrx files', 
    Object.assign({}, defaults('Generate only ngrx files'), {
      description: 'Actions, Reducer, Effect and State',
      actions: [].concat(plopActions.ngrx)
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

  ngrxWithService(plop);
  ngrxWithoutService(plop);

};
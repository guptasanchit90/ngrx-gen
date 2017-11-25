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
    plop.setGenerator('ngrx with Service', 
      Object.assign({}, defaults('ngrx with Services'), {
        description: 'Actions, Reducer, Service and Effect',
        actions: [].concat(plopActions.ngrx, plopActions.service)
      })
  );
}

function ngrxWithoutService(plop) {
  plop.setGenerator(
    'ngrx without Service', 
    Object.assign({}, defaults('ngrx without Services'), {
      description: 'Actions, Reducer and Effect',
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

  ngrxWithService(plop);
  ngrxWithoutService(plop);

};
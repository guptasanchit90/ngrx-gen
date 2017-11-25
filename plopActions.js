const plopActions = {
    ngrx: [
      {
        type: 'add',
        path: '{{dir dirPath}}/{{dashCase name}}.actions.ts',
        templateFile: './templates/_actions.ts'
      },
      {
        type: 'add',
        path: '{{dir dirPath}}/{{dashCase name}}.reducer.ts',
        templateFile: './templates/_reducer.ts'
      },
      {
        type: 'add',
        path: '{{dir dirPath}}/{{dashCase name}}.effects.ts',
        templateFile: './templates/_effect.ts'
      }
    ],
    service: [
      {
        type: 'add',
        path: '{{dir dirPath}}/{{dashCase name}}.service.ts',
        templateFile: './templates/_service.ts'
      }
    ]
  }
  
  

module.exports = {
    plopActions: plopActions
};

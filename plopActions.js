const getPlopActions = function (rxjsVersion) {
  return [
    {
      type: 'add',
      path: '{{dir dirPath}}/{{dashCase name}}.actions.ts',
      templateFile: `./templates/${rxjsVersion}/_actions.ts`
    },
    {
      type: 'add',
      path: '{{dir dirPath}}/{{dashCase name}}.reducer.ts',
      templateFile: `./templates/${rxjsVersion}/_reducer.ts`
    },
    {
      type: 'add',
      path: '{{dir dirPath}}/{{dashCase name}}.effects.ts',
      templateFile: `./templates/${rxjsVersion}/_effect.ts`
    },
    {
      type: 'add',
      path: '{{dir dirPath}}/{{dashCase name}}.state.ts',
      templateFile: `./templates/${rxjsVersion}/_state.ts`
    },
    {
      type: 'add',
      path: '{{dir dirPath}}/{{dashCase name}}.service.ts',
      templateFile: `./templates/${rxjsVersion}/_service.ts`
    },
    {
      type: 'add',
      path: '{{dir dirPath}}/{{dashCase name}}.module.ts',
      templateFile: `./templates/${rxjsVersion}/_module.ts`
    }
  ]
}


module.exports = {
  getPlopActions: getPlopActions
};

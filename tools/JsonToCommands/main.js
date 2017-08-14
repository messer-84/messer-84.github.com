(function() {
  const find = (selector, attr) => {
    return document.querySelector(selector);
  };

  const btn = find('.btn');

  btn.addEventListener('click', e => {
    e.preventDefault();
    const packageContentStr = find('#objectData').value;
    const packageContent = JSON.parse(packageContentStr);
    const bundlerAgent = find('.radio:checked').value;
    const dependenciesType = find('.radio2:checked').value;
    const commandsField = find('#commands');

    commandsField.textContent = getCommands(
      bundlerAgent,
      dependenciesType,
      packageContent,
    );

    commandsField.addEventListener('focus', e => {
      commandsField.select();
    });
  });

  const getCommands = (bundlerAgent, dependenciesType, packageContent) => {
    const isNPM = bundlerAgent === 'npm';
    let commandsStr = isNPM ? 'npm i' : 'yarn add';

    if (dependenciesType === 'devDependencies') {
      commandsStr += isNPM ? ' -D' : ' --dev';
    }

    for (let key in packageContent) {
      if (key === dependenciesType) {
        for (let value in packageContent[key]) {
          commandsStr += ' ' + value;
        }
      }
    }
    return commandsStr;
  };
})();

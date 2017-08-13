const btn = document.querySelector(".btn");

btn.addEventListener("click", e => {
  e.preventDefault();
  const packageContentStr = document.querySelector("#objectData").value;
  const packageContent = JSON.parse(packageContentStr);
  const bundlerAgent = document.querySelector('.radio:checked').value;
  const dependenciesType = document.querySelector('.radio2:checked').value;
  const commandLineField = document.getElementById('commands');


 const commandsData = jsonConverter(bundlerAgent, dependenciesType, packageContent);

  commandLineField.textContent = commandsData;

  commandLineField.addEventListener('focus', e => {
    commandLineField.select();
  });

});

const jsonConverter = (bundlerAgent, dependenciesType, packageContent) => {
  const isNPM = bundlerAgent === 'npm';
  let commandLineStr = isNPM ? 'npm i' : 'yarn add';

  if(dependenciesType === "devDependencies"){
    commandLineStr += isNPM ? " -D" : " --dev";
  }

  for (let key in packageContent) {
    if (key === dependenciesType) {
      for (let field in packageContent[key]) {
        commandLineStr += " " + field;
      }
    }
  }
  return commandLineStr;
};



const generateBtn = document.getElementById('generate-btn');
const nameOutput = document.getElementById('name-output');

generateBtn.addEventListener('click', () => {
  fetch('dogNames.json')
    .then(response => response.json())
    .then(data => {
      const dogNames = data.dogNames;
      const randomIndex = Math.floor(Math.random() * dogNames.length);
      const randomName = dogNames[randomIndex];
      nameOutput.textContent = randomName;
    })
    .catch(error => {
      console.error(error);
    });
});
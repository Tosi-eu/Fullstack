
class AirFryer {
  constructor(model, power, capacity, defaultImage, activeImage) {
    this.model = model;
    this.power = power;
    this.capacity = capacity;
    this.isRunning = false;
    this.defaultImage = defaultImage;
    this.activeImage = activeImage;
    this.currentImage = this.defaultImage;
    this.audioElement = new Audio();
    this.runningAudio = null; 
    this.selectedFood = null;
    this.foodImageElement = document.getElementById('foodImage');
    this.updateImage();
  }

  updateFoodImage(imagePath) {
    this.foodImageElement.src = imagePath;
  }

  showWarning(message) {
    const warningsElement = document.getElementById('warnings');
    const warningMessage = document.createElement('p');
    warningMessage.textContent = message;
    warningsElement.appendChild(warningMessage);
    setTimeout(() => {
      warningsElement.removeChild(warningMessage);
    }, 5000);
  }

  playSound(soundFile, playbackRate = 1.0, loop=true) {
    this.audioElement.src = soundFile;
    this.audioElement.playbackRate = playbackRate;
    this.audioElement.loop = loop;
    this.audioElement.play();
  }

  foodReady(soundFile){
    this.audioElement.src = soundFile;
    this.audioElement.play()
  }

   stopAudio() {
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
    this.runningAudio = null;
  }

  turnOn() {
    if (!this.isRunning) {
      this.playSound('../audio/open.m4a', 3.0, false);
      this.showWarning(`${this.model} ligada.`);
      this.isRunning = true;
      this.currentImage = this.activeImage;
      this.updateImage();
      disableFields();
    } else {
      this.showWarning(`${this.model} já está ligada.`);
    }
  }

  turnOff() {
    if (this.isRunning) {
      this.showWarning(`${this.model} desligada.`);
      this.isRunning = false;
      this.currentImage = this.defaultImage;
      this.updateImage();
      this.stopAudio();
      enableFields();
    } else {
      this.showWarning(`${this.model} já está desligada.`);
    }
  }

  selectFood(food, foodImage) {
    if (this.isRunning) {
      this.playSound('../audio/on.m4a');
      this.showWarning(`Opção de comida "${food}" selecionada.`);
      this.currentImage = this.activeImage;
      this.updateImage();
      this.updateFoodImage(foodImage);
      this.selectedFood = { food, foodImage };
    } else {
      this.showWarning(`${this.model} não está ligada. Ligue antes de selecionar um alimento.`);
    }
  }
  
  cook(food) {
    if (this.isRunning) {
      this.showWarning(`Cozinhando ${food} na ${this.model}.`);
    } else {
      this.showWarning(`${this.model} não está ligada. Ligue antes de cozinhar.`);
    }
  }

  updateImage() {
    const airFryerImage = document.getElementById('airFryierImage');
    airFryerImage.src = this.currentImage;
  }

  clearFoodImage() {
    this.foodImageElement.src = '';
  }
  
  stopAudio() {
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
  }

  startCookingTimer(cookingTime) {
    let remainingTime = cookingTime * 60;
    const timeRemainingElement = document.getElementById('time-remaining');

    this.timerInterval = setInterval(() => {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      timeRemainingElement.textContent = formattedTime;

      if (remainingTime <= 0) {
        clearInterval(this.timerInterval);
        timeRemainingElement.textContent = '00:00';
        this.showWarning('Cozimento concluído!');
        this.foodReady('../audio/ready.mp3'); 
        this.currentImage = this.activeImage;
        this.updateImage();
        if (this.selectedFood) {
          this.updateFoodImage(this.selectedFood.foodImage);
        }
        setTimeout(() => {
          this.clearFoodImage();
          this.playSound("../audio/open.m4a",3.0);
          this.turnOff();
        }, 2000);
      }
      remainingTime -= 1;
    }, 1000);
  }
}

let myAirFryer;
const foodImages = {
  'Batata': '../alimentos/batata.png',
  'Esfirra': '../alimentos/salgado.png',
  'Pastel': '../alimentos/pastel.png',
  'Frango empanado': '../alimentos/frango.png',
};

function showLoadingImage() {
  const loadingContainer = document.getElementById('loadingContainer');
  loadingContainer.style.display = 'block';
}

function hideLoadingImage() {
  const loadingContainer = document.getElementById('loadingContainer');
  loadingContainer.style.display = 'none';
}

function turnOnAirFryier() {

  const capacity = document.getElementById('capacity').value;
  const power = document.getElementById('power').value;
  const name = document.getElementById('name').value;
  const cookingTime = document.getElementById('cookingTime').value;
  const temperature = document.getElementById('temperature').value;
  const allFieldsFilled = capacity && power && name && cookingTime && temperature;

  if((temperature <= 0 || temperature > 300) && (cookingTime <= 0 || cookingTime > 90)){
    showWarningInitial('Temperatura e tempo de cozimento fora dos limites!')
    return;
  }
  
  if(!allFieldsFilled){
    showWarningInitial("Não existe instância de Air Fryer. Preencha os campos corretamente!")
    return;
  }else{
    showLoadingImage();
  }

  if (myAirFryer) {
    if (allFieldsFilled) {
    /*  if (name === 'Federupa Fryer') {
        myAirFryer = new AirFryer(name, power, capacity, '../img/off/federupa_off.png', '../img/on/federupa_on.png');
      } else if (name === 'XCS Fryer') {
        myAirFryer = new AirFryer(name, power, capacity, '../img/off/caaso_off.png', '../img/on/caaso_on.png');
        myAirFryer.playSound("../audio/xupa_federal.mp3",1.0,false);
      } */
      myAirFryer = new AirFryer(name, power, capacity, '../img/off/air_fryer_off.png', '../img/on/air_fryier_on.png');
      myAirFryer.turnOn();
      hideLoadingImage();
    } else {
      myAirFryer.showWarning('Preencha todos os campos antes de ligar.');
      hideLoadingImage();
    }
  } else {
    if (allFieldsFilled) {
      myAirFryer = new AirFryer(name, power, capacity, '../img/off/air_fryer_off.png', '../img/on/air_fryier_on.png');
      myAirFryer.turnOn();
      hideLoadingImage();
    } else {
      myAirFryer.showWarning('Preencha todos os campos antes de ligar.');
      hideLoadingImage();
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const initialCookingTime = 0;
  const timeRemainingElement = document.getElementById('time-remaining');
  const formattedTime = formatTime(initialCookingTime);
  timeRemainingElement.textContent = formattedTime;
});

function turnOffAirFryier() {
  if (myAirFryer) {
    myAirFryer.turnOff();
    myAirFryer.clearFoodImage();
    resetCookingTimer();
    enableFields();
    myAirFryer.selectedFood = null;
  } else {
    myAirFryer.showWarning(`${this.model} já está desigada!`);
  }
}

function resetCookingTimer() {
  const timeRemainingElement = document.getElementById('time-remaining');
  timeRemainingElement.textContent = '00:00';
  clearInterval(myAirFryer.timerInterval);
}

function selectAirFryierFood(food) {
  const cookingTimeValue = document.getElementById('cookingTime').value;
  const temperatureValue = document.getElementById('temperature').value;

  if (myAirFryer && myAirFryer.selectedFood) {
    myAirFryer.showWarning('Já foi selecionado um alimento. Desligue a Air Fryer para selecionar outro.');
    return;
  }

  if (cookingTimeValue <= 0 || cookingTimeValue > 90) {
    myAirFryer.showWarning('O tempo de cozimento deve estar entre 1 e 90 min!');
    return;
  }else if(temperatureValue <= 0 || temperatureValue > 300){
    myAirFryer.showWarning('A temperatura deve estar entre 1 e 300°C');
    return;
  }else if((temperatureValue <= 0 || temperatureValue > 300) && (cookingTimeValue <= 0 || cookingTimeValue > 90)){
    myAirFryer.showWarning('Temperatura e tempo de cozimento fora dos limites!')
    return;
  }

  if (myAirFryer) {
    const imageName = foodImages[food];
    myAirFryer.playSound('../audio/on.m4a');
    disableFields();
    if (imageName) {
      const imagePath = `../img/alimentos/${imageName}`;
      myAirFryer.selectFood(food, imagePath);
      myAirFryer.selectedFood = { food, foodImage: imagePath };

      setTimeout(() => {
        myAirFryer.currentImage = myAirFryer.defaultImage;
        myAirFryer.updateImage();
        myAirFryer.clearFoodImage(); 
      }, 2000);

      myAirFryer.startCookingTimer(cookingTimeValue);
    } else {
      myAirFryer.showWarning(`Imagem não encontrada para ${food}.`);
    }
  } else {
    myAirFryer.showWarning(`${this.model} não foi inicializada. Preencha os campos e selecione um alimento.`);
  }
}

function updatePower() {
  const nameElement = document.getElementById('name');
  const powerElement = document.getElementById('power');
  const capacityElement = document.getElementById('capacity');
''
  const modelName = nameElement.value;
  const defaultValues = getDefaultValues(modelName);

  if (defaultValues) {
    powerElement.value = defaultValues.power;
    capacityElement.value = defaultValues.capacity;
  }
}

function getDefaultValues(modelName) {
  const modelDefaults = {
    'AirFryer Pro': { power: 1500, capacity: 8 },
    'AirFryer XL': { power: 1800, capacity: 12 },
    'AirFryer Deluxe': { power: 2000, capacity: 10 },
    'Federupa Fryer': { power: 3000, capacity: 5},
    'XCS Fryer': { power:1000, capacity: 10}
  };

  return modelDefaults[modelName] || null;
}

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function showWarningInitial(message) {
  const warningsElement = document.getElementById('warnings');
  const warningMessage = document.createElement('p');
  warningMessage.textContent = message;
  warningsElement.appendChild(warningMessage);
  setTimeout(() => {
    warningsElement.removeChild(warningMessage);
  }, 5000);
}

function disableFields() {
  const fields = document.querySelectorAll('#name, #cookingTime, #temperature');
  fields.forEach((field) => {
    field.disabled = true;
  });
}

function enableFields() {
  const fields = document.querySelectorAll('#name, #cookingTime, #temperature');
  fields.forEach((field) => {
    field.disabled = false;
  });
}

document.addEventListener('DOMContentLoaded', function () {
  disablePowerCapacityFields();
});

function disablePowerCapacityFields() {
  const formFields = document.querySelectorAll('#power, #capacity');
  formFields.forEach((field) => {
    field.disabled = true;
  });
}

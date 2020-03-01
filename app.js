
  
'use strict';

var imagesNames = ['bag.jpg', 'banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark','sweep.png','usb.gif','water-can.jpg','wine-glass.jpg'];

busMall.list = [];

var Count = 0;
var maxClicked = 25;


//constructor funtion
function busMall(name, filePath, description){
  this.name = name;
  this.filePath = filePath;
  this.description = description;
  this.numDisplayed = 0;
  this.numClicked = 0;
  busMall.list.push(this);
}
if(localStorage.previousChartData){
 busMall.list = JSON.parse(localStorage.getItem('previousChartData'));
}else{
  newInstances(imagesNames,imagesPaths,images);
}

function newInstances(newName, newFilePath, newDescription){
  for (var i = 0; i< imagesNames.length; i++){
    new busMall(newName[i], newFilePath[i], newDescription[i]);
  }
}

console.log(busMall.list);

function getrandomnumber(){
  return Math.floor(Math.random()* busMall.list.length);
}


function setupEventListener(){
  var img = ['image1', 'image2', 'image3'];
  for(var i =0; i < img.length; i++){
    var imgGroups = document.getElementById(img[i]);
    imgGroups.addEventListener('click', runClick);
  }
}


function rmEventListener(){
  var img = ['image1', 'image2', 'image3'];
  for(var i =0; i < img.length; i++){
    var imgGroups = document.getElementById(img[i]);
    imgGroups.removeEventListener('click', runClick);
  }
}



function runClick(event){
  Count++;
  for(var i = 0; i < busMall.list.length; i++){
    if(busMall.list[i].name === event.target.alt){
      busMall.list[i].numClicked++;

      if(Count === maxClicked){
        localStorage.setItem('previousChartData', JSON.stringify(busMall.list));
        rmEventListener();
        doTheChartThing();
       
       
        break;
      }

    }
  }
  getRandoImages();
}


var previousImgDisplayedArr = [];

function getRandoImages(){
  var img = ['image1', 'image2', 'image3'];
  var currentImgDisplayedArr = [];
  for (var i = 0; i < img.length; i++){
    var image = document.getElementById(img[i]);
    var deDuplicated = false;
    while(deDuplicated === false){
      var randomImageIndex = getrandomnumber();
      if (!currentImgDisplayedArr.includes(randomImageIndex) && !previousImgDisplayedArr.includes(randomImageIndex)){
        currentImgDisplayedArr.push(randomImageIndex);
        busMall.list[randomImageIndex].numDisplayed++;
        image.src = busMall.list[randomImageIndex].filePath;
        image.alt = busMall.list[randomImageIndex].name;
        deDuplicated = true;
      }

    }
  }
  previousImgDisplayedArr = currentImgDisplayedArr;
}



setupEventListener();
getRandoImages();

var ctx = document.getElementById('chartArea').getContext('2d');

var allTheData = busMall.list;


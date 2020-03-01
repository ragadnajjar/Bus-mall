// `use strict`
// var random

// Images = [
//     'bag.jpg',
//     'banana.jpg',
//     'bathroom.jpg',
//     'boots.jpg',
//     'breakfast.jpg',
//     'bubblegum.jpg',
//     'chair.jpg',
//     'cthulhu.jpg',
//     'dog-duck.jpg',
//     'dragon.jpg',
//     'pen.jpg',
//     'pet-sweep.jpg',
//     'scissors.jpg',
//     'shark.jpg',
//     'sweep.png',
//     'tauntaun.jpg',
//     'unicorn.jpg',
//     'usb.gif',
//     'water-cam.jpg',
//     'wine-glass.jpg'
//   ];
  

//   var left_imge = document.querySelector('#left_imge');
//   var right_imge = document.querySelector('#right_imge');
//   var groupImageSection = document.getElementById('randomImages');
//   var busMall = [];
//   var totalClicks = 1;

//   function image(name){
//     this.name = name;
//     this.urlImage = `images/${this.name}.jpg`;
//     busMall.push(this);//this its refer to the object that im created
//   }
  
//   function pickRandomImages(){


//   var leftImageRandom =  busMall[pickRandomImages(0 , busMall.length-1 )];
//   var centerImageRandom  = busMall[pickRandomImages(0 , busMall.length-1 )];

//   var rightImageRandom =  busMall[pickRandomImages(0 , busMall.length-1 )];
//   left_imge.setAttribute('src' , leftImageRandom.urlImage);
//   left_imge.setAttribute('alt' , leftImageRandom.name);
//   right_imge.setAttribute('src' , rightImageRandom.urlImage);
//   right_imge.setAttribute('alt' ,rightImageRandom.name);
//   center_image.setAttribute('src' , centerImageRandom.urlImage);
//   center_imge.setAttribute('alt' , centerImageRandom.name);
//   while(left_imge === right_imge){
//       console.log(pickRandomImages);
//   }

// }
// for(var i = 0; i< Images.length ; i++){
//     new image(Images[i]);
//   }
//   pickRandomImages();
//   console.log(imagesObject);




  
'use strict';

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two imagesObject
  Let students participate by suggesting the steps needed to make the app run
  App Flow:
  - Welcome and instructions
  - Randomly put 2 imagesObject on the screen
    - Random number generator
    - a function to display imagesObject
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler firesx
      - ? check if total clicks is 5 ?
      - stop letting the user click
    - if the user reach 5 tries remove image section for imagesObject and display to the user you fininshed.
  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
  We need an Array to hold all image Objects
  function to randomly pick an image{
  }
  click on an image, targetted by id
  add event listener('click', function(){
  })
*/

var myImages = [
        'bag.jpg',
        'banana.jpg',
        'bathroom.jpg',
        'boots.jpg',
        'breakfast.jpg',
        'bubblegum.jpg',
        'chair.jpg',
        'cthulhu.jpg',
        'dog-duck.jpg',
        'dragon.jpg',
        'pen.jpg',
        'pet-sweep.jpg',
        'scissors.jpg',
        'shark.jpg',
        'sweep.png',
        'tauntaun.jpg',
        'unicorn.jpg',
        'usb.gif',
        'water-cam.jpg',
        'wine-glass.jpg'
      ];

// Globals
var left = document.querySelector('#leftImage');
var right = document.querySelector('#rightImage');
var center = document.querySelector('#centerImage');
var groupImageSection = document.getElementById('allImages');
var imagesObject = [];//an array to store all imagesObject object
var totalClicks = 1;
// leftGoatImage.src = `images/${imagesObjectImages[0]}.jpg`;
// leftGoatImage.alt = imagesObjectImages[0];

// rightGoatImage.src = `images/${imagesObjectImages[1]}.jpg`;
// rightGoatImage.alt = imagesObjectImages[1];


//constructor function to generate dynamic imagesObject objects
function busMall(name){
  this.name = name;
  this.urlImage = `images/${this.name}.jpg`;
  imagesObject.push(this);//this its refer to the object that im created
}

function pickRandomImages(){
  var leftImageRandom =  imagesObject[randomNumber(0 , imagesObject.length-1 )];

  var rightImageRandom =  imagesObject[randomNumber(0 , imagesObject.length-1 )];
  leftGoatImage.setAttribute('src' , leftImageRandom.urlImage);
  leftGoatImage.setAttribute('alt' , leftImageRandom.name);
  rightGoatImage.setAttribute('src' , rightImageRandom.urlImage);
  rightGoatImage.setAttribute('alt' ,rightImageRandom.name);
  while(leftGoatImage === rightGoatImage){
    //pick another random number
  }
}

for(var i = 0; i< imagesObjectImages.length ; i++){
  new Goat(imagesObjectImages[i]);//we pass the name of the imagesObject from the array
}
pickRandomImages();
console.log(imagesObject);

// Variables to store the imagesObject already on the page
// the allImages array is a property of the GoatPicture constructor
function clickImage(e){
  if( e.target.id === 'left_goat_img' || e.target.id === 'right_goat_img'){
    pickRandomImages();
    totalClicks++;
  }
  if(totalClicks === 6){
    //remove event listener
    leftGoatImage.remove();
    rightGoatImage.remove();
    console.log('finished');
  }
}

groupImageSection.addEventListener('click' , clickImage);

//when they reach total max clicks, remove the clicky function



// Instantiate my image objects
//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
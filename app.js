function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var busMallImages = [
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
  'water-can.jpg',
  'wine-glass.jpg'
];

var leftImage = document.querySelector('#leftImge');
var centerImage = document.querySelector('#centerImge')
var rightImage = document.querySelector('#rightImge');
var groupImageSection = document.getElementById('all_images');

var position = [];
var totalClicks = 1;

function Positions(raghad) {
  this.name = raghad.split('.')[0];
  this.urlImage = `images/${raghad}`;
  this.likes = 0;
  this.viwes = 0;
  position.push(this);
}
for (var i = 0; i < busMallImages.length; i++) {
  new Positions(busMallImages[i]);
}
var savedViews=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function setItem(){
  
  for (var i = 0 ; i < position.length ; i++){
    savedViews[i] = savedViews[i] + position[i].viwes;
    position[i].viwes=savedViews[i];
  }
  localStorage.setItem( 'yy',JSON.stringify(position));

}




function getItem(){
  var get = localStorage.getItem('yy');
  JSON.parse(get);
}
  renderImages();
  var left, right, center;


function renderImages() {
  left = position[randomNumber(0, position.length - 1)];
  right = position[randomNumber(0, position.length - 1)];
  center = position[randomNumber(0, position.length - 1)];

  while (left === right || right === center || left === center) {
    left = position[randomNumber(0, position.length - 1)];
    right = position[randomNumber(0, position.length - 1)];
    center = position[randomNumber(0), position.length - 1];
  }

  leftImage.setAttribute('src', left.urlImage);
  leftImage.setAttribute('alt', left.name);

  rightImage.setAttribute('src', right.urlImage);
  rightImage.setAttribute('alt', right.name);

  centerImage.setAttribute('src', center.urlImage);
  centerImage.setAttribute('alt', center.name);
}
renderImages();

function renderlist(){
  var ulEl =document.getElementById('list');
  for ( i= 0;  i < position.length; i++){
    var liEl=document.createElement ('li');
    liEl.textContent=` ${position[i].name} , has ${position[i].likes} likes , and ${position[i].viwes} views `
    ulEl.appendChild(liEl);

  } 
}
   
  groupImageSection.addEventListener('click', clickImage);
  


function clickImage(e) {
  if (e.target.id === 'leftImge' || e.target.id === 'rightImge' || e.target.id === 'centerImge') {
    renderImages();
    left.viwes++;
    right.viwes++;
    center.viwes++;
    totalClicks++;
  }
  if (event.target.id === 'leftImge') {
    left.likes++;
  }
  if (event.target.id === 'rightImge') {
    right.likes++;
  }
  if (event.target.id === 'centerImge') {
    center.likes++;
  }

  if (totalClicks === 25) {

    groupImageSection.removeEventListener('click', clickImage);
    // rightImage.remove();
    // leftImage.remove();
    // centerImage.remove();
    renderlist();
    renderChartResults();
    console.log(right.likes);
    setItem();
  }
}
// console.log('left is ',left);
// console.log('right is ',right);
// console.log('center is ',center);


//    console.log(position);
   function renderChartResults(){
     var positionNames = [];
     var positionClicks = [];
     for(var i = 0 ; i < position.length ; i++){
       
       positionNames.push(position[i].name);
       positionClicks.push(position[i].likes);
     }
     var ctx = document.getElementById('myposition').getContext('2d');
     var myChart = new Chart(ctx, {
       type: 'bar',
       data: {
         labels: positionNames,
         datasets: [{
           label: '# of Votes',
           data: positionClicks,
           backgroundColor: 'rgba(255, 99, 132, 0.2)',
           borderColor: 'rgba(255, 99, 132, 1)',
           borderWidth: 1
         }]
       },
       options: {
         scales: {
           yAxes: [{
             ticks: {
               beginAtZero: true
             }
           }]
         }
       }
     });
    }
    getItem();



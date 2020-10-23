const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const eyeball = document.querySelector('.eyeball img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const colors = document.querySelector('.colors');


// Moving animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', e => {
  card.style.transition = 'none';
  // Popout
  title.style.transform = 'translateZ(150px)';
  eyeball.style.transform = 'translateZ(200px) rotateZ(35deg)';
  description.style.transform = 'translateZ(125px)';
  colors.style.transform = 'translateZ(100px)';
  purchase.style.transform = 'translateZ(75px)';
})

//Animate Out
container.addEventListener('mouseleave', e => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // Popback
  title.style.transform = 'translateZ(0px)';
  eyeball.style.transform = 'translateZ(200px) rotateZ(0deg)';
  description.style.transform = 'translateZ(0px)';
  colors.style.transform = 'translateZ(0px)';
  purchase.style.transform = 'translateZ(0px)';

});
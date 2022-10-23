const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector(".imgs");
const h3 = document.querySelector(".h3");
const home  = document.querySelector(".home");
const home1  = document.querySelector(".home1")
const home2  = document.querySelector(".home2")
const home3  = document.querySelector(".home3");
const mainnav = document.querySelector('.mainnav')

const headline = document.querySelector(".headline");

const tl = new TimelineMax();
tl.fromTo(hero,1,{height:"0%"},{height:"80%" , ease:Power2.easeInOut})
.fromTo(hero,1.2,{width:"100%"},{width:"80%" , ease:Power2.easeInOut})
.fromTo(slider,1,{x:"-100%"},{x:"0%" , ease:Power2.easeInOut})
.fromTo(logo,1,{x:"-100%"},{x:"0%" , ease:Power2.easeInOut})
.fromTo(home,2.5,{opacity:0,x:40},{opacity:1,x:0})
.fromTo(mainnav,1.2,{x:"-100%"},{x:"0%",ease:Power2.easeInOut})
.fromTo(home1,2.5,{opacity:0,x:40},{opacity:1,x:0})
.fromTo(home2,2.5,{opacity:0,x:40},{opacity:1,x:0})
.fromTo(home3,2.5,{opacity:0,x:40},{opacity:1,x:0})


.fromTo(headline,0.5,{opacity:0,x:40},{opacity:1,x:0},"-=0.1")
.fromTo(h3,1,{opacity:0,x:80},{opacity:1,x:20},"-=0.5")
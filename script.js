let time = gsap.timeline({defaults: {ease: "power2.out"}});

time.from("#nav div", {
  y: -50,
  opacity: 0,
  duration: 0.8,
  delay: 0.5
})

.from("#center div", {
  x: -300,  
  opacity: 0,
  duration: 0.8,
  stagger: 0.3
})


time.from("#footer div", {
    opacity: 0,
    duration: 0.8,
})

.from("#image img", {
  x: 80,          
  rotate: 45,     
  opacity: 0,
  duration: 1.2,  
  stagger: 0.25,  
  ease: "power2.out"
});

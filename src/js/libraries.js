particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": false,
        "value_area": 100.7442924896818
      }
    },
    "color": {
      "value": "#463f3f"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": true
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 236.74429248968178,
      "color": "#7d6464",
      "opacity": 0.2762016745712954,
      "width": 1.4204657549380908
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// scroll reveal about-us 
ScrollReveal().reveal('#about-us .title', { delay: 500, origin: 'top', interval: '200', distance: '5px', easing: 'cubic-bezier(.31,.13,.82,.36)' });
ScrollReveal().reveal('#about-us .body', { delay: 600, easing: 'cubic-bezier(.31,.13,.82,.36)' });

// scroll reveal project 
ScrollReveal().reveal('#projects .intro .content', { delay: 700, origin: 'left', interval: '200', distance: '5px', easing: 'cubic-bezier(.31,.13,.82,.36)' });

ScrollReveal().reveal('#projects .intro .illustration', { delay: 900, origin: 'left', distance: '5px', easing: 'cubic-bezier(.31,.13,.82,.36)' });


ScrollReveal().reveal('#projects #list', { delay: 900,  origin: 'top', distance: '5px', easing: 'cubic-bezier(.31,.13,.82,.36)' });




// project list carousel 
$('#list').carousel();
$('#coming-list').carousel();
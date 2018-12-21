

// we want to duplicate our crosses 10x
// this serves as a base function for duplicating the html of any element any number of times
const duplicate = (element, quantity) => {
  const newContent = new Array(quantity).fill(element.innerHTML).join('')
  element.innerHTML = newContent
}

duplicate(document.querySelector('#crosses'), 10)
// cross rotate animation
anime({
  targets: '#crosses path',
  rotate: '1turn',
  delay: (el, i, l) => i * 100,
  duration: 1200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// normal tunnel animation w/ no addEventListener

//   anime({
//     targets: '#tunnel circle',
//     scale: 1.1,
//     duration: 250,
//     direction: 'alternate',
//     easing: 'easeInOutSine',
//     loop: true,
//     delay: (el, index) => index * 50
//   })


// tunnel animation
// add a hover event to any other element which will start/stop animation on another element

const hover = document.querySelector('#title')
function animateButton(scale, duration, loop) {
  anime.remove('#tunnel circle');
  anime({
    targets: '#tunnel circle',
    scale: scale,
    duration: duration,
    direction: 'alternate',
    easing: 'easeInOutSine',
    loop: loop,
    delay: (el, index) => index * 50
  });
}

function enterButton() { animateButton(1.1, 250, true) };
function leaveButton() { animateButton(1, 250, 0) };

hover.addEventListener('mouseenter', enterButton, false);
hover.addEventListener('mouseleave', leaveButton, false);



anime({
  targets: '.conveyor',
  // only move it left by half of its width so that when it repeats it looks seamless.
  translateX: '-50%',
  duration: 1500,
  loop: true,
  easing: 'linear',
  autoplay: true
})


// !grab the path and set it as a const when you want to animate along the path!
const zigZagPath = document.querySelector('#zigzag path')
// setDashoffset figures out how long our path is
const zigZagOffset = anime.setDashoffset(zigZagPath)

zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset);
anime({
  targets: zigZagPath,
  strokeDashoffset: [zigZagOffset, 0],
  duration: 3000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
  autoplay: true
});

const wavePath = document.querySelector('#wave path')
const waveOffset = anime.setDashoffset(wavePath)
wavePath.setAttribute('stroke-dashoffset', waveOffset)
anime({
  targets: wavePath,
  strokeDashoffset: [0, waveOffset],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})


// we want to duplicate the dots 40x
duplicate(document.querySelector('#dots'), 40)

const allDots = document.querySelectorAll('#dots .dot')
allDots.forEach(dot => {
  anime({
    targets: dot,
    rotate: (el, i) => anime.random(90, 360),
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  });
});

// duplicate 20 circles
duplicate(document.querySelector('#circles'), 20)
// animate circles
anime({
  targets: '#circles .dot',
  scale: [0, 1.2],
  delay: (el, i) => i * 100,
  duration: 250,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
})



// flashing colour animation
anime({
  targets: '#flashes .flash',
  backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#ffebfd'][i],
  delay: (el, i) => anime.random(50, 100),
  duration: 500,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
})

// rotating squares
anime({
  targets: '#squares rect',
  translateX: ['-50%', '-50%'],
  translateY: ['-50%', '-50%'],
  rotate: [45, 0, -45],
  delay: (el, i) => 100 * i,
  duration: (el, i) => 750,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
})

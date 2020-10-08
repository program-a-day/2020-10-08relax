'use strict'
let outerCircle = document.querySelector('.outer-circle')

new ResizeObserver(() => console.log(outerCircle.getBoundingClientRect().width)).observe(outerCircle)
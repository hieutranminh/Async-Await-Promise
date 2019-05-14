
$(document).ready(function () {
    anime({
        // targets element need make animation
        targets: '.battery-log',
        // targets more element with array
        targets: [el, '.ele-01', '.ele-02'],
        // set value property animation
        translateX: 250,
        // set value DETAILS property animation
        rotate: {
            // use unit DEG or TURN - example : 360deg || 1turn
            value: '360deg',
            // duration animation of element
            duration: 1800,
            // easing jquery - example : easeInOutExpo,...
            easing: 'linear'
        },
        // write function return & random one values
        rotate: function() { 
            return anime.random(-360, 360); 
        },
        // round up the value to decimal
        round: 1,
        // easing jquery - example : easeInOutExpo,...
        easing: 'easeInOutQuad',
        // time delay before run animation - can write function (el, i, l)
        delay: 250,
        // time delay before run animation with stagger : value, {from: 'first | center | last | index'}
        delay: anime.stagger(100, {from: 'center'})
        // done animation 01 and waiting 1ms - can write function (el, i, l)
        endDelay: 1000,
        // loop animation , the same for loop or infinity animation
        loop: true,
        // 3 direction : normal , reverse , alternate
        direction: 'normal',
        // auto starts the animation true or false
        autoplay: true,
    });
    //-----------CONTROL--------------
    animation.play;
    animation.pause;
    animation.reverse;
})

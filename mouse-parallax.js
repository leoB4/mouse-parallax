let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {

}
else {

    document.addEventListener('mousemove', mouseParallax);

    function mouseParallax (e){
        this.querySelectorAll('.moParallax').forEach(moParallax =>{
            let speed = moParallax.getAttribute('data-speed')
            let x = (window.innerWidth - e.pageX * speed)/100
            let y = (window.innerWidth - e.pageY *speed)/100

            moParallax.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    }
}
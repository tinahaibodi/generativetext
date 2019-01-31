const $text = document.querySelector('.text')

window.addEventListener('mousemove', ({clientX: x, clientY: y}) => {
   
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    const ratio = Math.round((x - centerX) / (y - centerY))

    function longShadow() {
        const x = [...Array(200).keys()]
       
        return  y > centerY ? x.map(x => `${x * ratio}px ${x}px #ED634C`) : x.map(x => `-${x * ratio}px -${x}px #3090A1`)
    }    

    $text.style.textShadow = longShadow()

})
const $ = document
const btnColors = $.querySelectorAll('.btn')

btnColors.forEach(btnColor =>{
    btnColor.addEventListener('click', () =>{
        let btnElmStyles = getComputedStyle(btnColor)
        let newColor = btnElmStyles.backgroundColor
        $.documentElement.style.setProperty('--theme-color', newColor) 
        localStorage.setItem('theme-color', newColor)
    })
})

window.addEventListener('load', () =>{
    let newColor = localStorage.getItem('theme-color') || '#ff1756'
    $.documentElement.style.setProperty('--theme-color', newColor) 
})
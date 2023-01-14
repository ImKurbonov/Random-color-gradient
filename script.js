// let container = document.querySelector('.container')
// let colorName = document.querySelector('.color-name')
// let body = document.querySelector('body')

// let values = 
// [
//     '0',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
// ]

// let randomDegree = Math.floor(Math.random() * 360)
// function colorGenerate() {
//     function randomColor () {
//         let color = '#'
//         for (i = 0; i < 6; i++) {
//             let randomNumber = Math.floor(Math.random() * values.length)
//             const result = values[randomNumber]
//             color += result
//         }
//         return color
//     }
    
//     let color1 = randomColor()
//     let color2 = randomColor()

//     body.style.background = `linear-gradient(${randomDegree}deg, ${color1}, ${color2})`
//     colorName.textContent = `${randomDegree}deg, ${color1}, ${color2}`
// }

// colorGenerate()

// container.addEventListener('click', colorGenerate)

const container = document.querySelector('.container')
const colorName = document.querySelector('.color-name')
const body = document.querySelector('body')
const music = document.querySelector('.music')
let musicImg = document.querySelector('.music-img')
let values = 
[
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
]

function colorGenerate() {
    let randomDegree = Math.floor(Math.random() * 360)

function randomColor () {
    let color = '#'
    for(i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * values.length)
        color += values[randomNumber]
    }
    return color
}
    let color1 = randomColor()
    let color2 = randomColor()

    body.style.background = `linear-gradient(${randomDegree}deg, ${color1}, ${color2})`
    colorName.textContent = `${randomDegree}deg, ${color1}, ${color2}`
}
colorGenerate()

let playMusic = false
let audio = new Audio('music.mp3')
music.addEventListener('click', ()=> {
    if(playMusic) {
        audio.play()
        musicImg.src = 'pause.svg'

        setInterval (()=> {
        colorGenerate()
        }, 1000)
    } else {
        audio.pause()
        musicImg.src = 'play.svg'
    }

    playMusic = !playMusic
   
})
container.addEventListener('click', colorGenerate)
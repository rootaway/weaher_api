let tempBlock = document.querySelector('#temp')
let cityBlock = document.querySelector('#city')
let update_date = document.querySelector('#update-date')
let local_date = document.querySelector('#local-date')
let searchInp = document.querySelector('.search')

setInterval(() => {
    let date = new Date;
    local_date.textContent = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000)

let city = 'Gomel'
let c_1 = document.querySelector('.container_1');

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        let value = searchInp.value;
        if(!value) return false;
        city = value;
        init()
        searchInp.value = ''
        c_1.classList.toggle('container_2');
        
        
    }
})


function init() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fabd212ae528248044818650c7e4b61`)
    .then((resp) => {return resp.json()})
    .then((data) => {

    
        

        tempBlock.textContent = `${temperature()}°С`

        cityBlock.textContent = `Город: ${data.name}`

        

        function temperature() {
            let getTemp = data.main.temp
            let tempC = Math.floor(getTemp) - 273
            return tempC
        }

        let date = new Date;

        update_date.textContent = `Последний раз обновлялось: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

        
    })
    .catch(() => {
        alert('Город не найден')
        city = 'Gomel';
        init()
        searchInp.value = ''
    })
}

init()

setInterval(() => {
    init()
}, 10000) 







     
   

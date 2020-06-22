console.log('Client side javascript file is loaded')



const formdata = document.querySelector('form')
const search = document.querySelector('input')
const p1 = document.querySelector('#error')
const p2 = document.querySelector('#message')

formdata.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    p1.textContent = 'Loading...'
    fetch('/corona?country=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            p1.textContent = data.error
        }else{
            p1.textContent = data.country
            p2.textContent = data.count
        }
    })
})

})
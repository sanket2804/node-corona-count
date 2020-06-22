console.log('Client side javascript file is loaded')



const formdata = document.querySelector('form')
const search = document.querySelector('input')
const p = document.querySelector('#error')
const p1 = document.querySelector('#message1')
const p2 = document.querySelector('#message2')
const p3 = document.querySelector('#message3')
const p4 = document.querySelector('#message4')
const p5 = document.querySelector('#message5')
const p6 = document.querySelector('#message6')
const p7 = document.querySelector('#message7')
const p8 = document.querySelector('#message8')
const p9 = document.querySelector('#message9')
const p10 = document.querySelector('#message10')
const p11 = document.querySelector('#message11')
// const details = document.querySelector('#details')

formdata.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    p1.textContent = 'Loading...'
    fetch('/corona?country=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            p.textContent = data.error
            // details.innerHTML = ""
            p1.textContent = ""
            p2.textContent = ""
            p3.textContent = ""
            p4.textContent = ""
            p5.textContent = ""
            p6.textContent = ""
            p7.textContent = ""
            p8.textContent = ""
            p9.textContent = ""
            p10.textContent = ""
            p11.textContent = ""
        }else{
            p.textContent = "Country : " + data.country
            p1.textContent = "Total Count :" + data.count
            p2.textContent = "New Cases :" + data.new_cases
            p3.textContent = "Total Deaths :" + data.total_deaths
            p4.textContent = "New Deaths :" + data.new_deaths
            p5.textContent = "Total Recovered :" + data.total_recovered
            p6.textContent = "Serious Critical :" + data.serious_critical
            p7.textContent = "Total Cases per 1m :" + data.total_cases_per1m
            p8.textContent = "Deaths per 1m :" + data.deaths_per1m
            p9.textContent = "Total tests :" + data.total_tests
            p10.textContent = "Total tests per 1m :" + data.total_tests_per1m
            p11.textContent = "Updated On : " + data.record_date_pure
        }
    })
})

})
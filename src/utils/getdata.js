const request = require('request')

const total = (country, callback) => {
    var options = {
      method: 'GET',
      url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php',
      qs: {country: country},
      headers: {
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': '761f7f3584msh64bbd12e24818bep10b0cbjsnbe16a1321ab9',
        useQueryString: true
      }
    }
  
    request(options, (error, {body}) => {
      if (error) { 
        callback('Unable connect to service',undefined)
      }
      else if (body === ""){
        callback('Unable to find country you entered',undefined)
      }
      else {
      const data = JSON.parse(body)
      const latest_data = data['latest_stat_by_country']
      
      callback(undefined,{
        Country : latest_data[0].country_name,
        Total_cases:latest_data[0].total_cases,
        new_cases:latest_data[0].new_cases,
        total_deaths:latest_data[0].total_deaths,
        new_deaths:latest_data[0].new_deaths,
        total_recovered:latest_data[0].total_recovered,
        serious_critical:latest_data[0].serious_critical,
        total_cases_per1m:latest_data[0].total_cases_per1m,
        deaths_per1m:latest_data[0].deaths_per1m,
        total_tests:latest_data[0].total_tests,
        total_tests_per1m:latest_data[0].total_tests_per1m,
        record_date_pure:latest_data[0].record_date_pure,
      })
      }
    });
  }

  module.exports = total
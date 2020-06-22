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
        callback('Unable to find country',undefined)
      }
      else {
      const data = JSON.parse(body)
      const latest_data = data['latest_stat_by_country']
      
      callback(undefined,{
        Total_cases:latest_data[0].total_cases,
        Country : latest_data[0].country_name
      })
      }
    });
  }

  module.exports = total
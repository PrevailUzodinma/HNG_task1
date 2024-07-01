const express = require('express');
const axios = require('axios');

async function greet (req,res) {

    try {
        // get visitors name from the query parameter
        const { visitor_name } = req.query
        // get clients IP address from the request object
        const clientIp = req.ip;
        // because the request object cannot directly retrieve the clients geographical location, we use an external service "ipinfo"
        const response = await axios.get(`https://ipinfo.io/${clientIp}/json`);
        // extract the city from response data
        const { city } = response.data;

        const message = `Hello ${visitor_name}, the temperature is 11 degree Celcius in ${city}`
    
        res.status(200).json({
          client_ip: clientIp,
          location: city,
          greeting: message
        });
      } catch (error) {
        res.status(500).send('Error retrieving location information');
      }
}

module.exports = { greet }
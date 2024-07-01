const express = require("express");
const axios = require("axios");

async function controller(req, res) {
  try {
    // Extract visitor's name from query parameter
    const {visitor_name} = req.query;
    // Get client's IP address from the request object
    const clientIp = req.ip;

    // Use an external service "Abstract api" to get the geographical location
    const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=f19bdf9464d14594aaafe82996bae3c1`;

    // Make the HTTP request using axios
    const response = await axios.get(url);

    // Extract the city from the response
    const { city } = response.data;

    
    const message = `Hello ${visitor_name}, the temperature is 11 degrees Celsius in ${city}`;

    return res.status(200).json({
      client_ip: clientIp,
      location: city,
      greeting: message,
    });
  } catch (error) {
    // never forget to console.error your errors!!!
    console.error(error);
    return res.status(500).send("Error retrieving location information");
  }
}

module.exports = { controller };

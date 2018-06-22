# Ride-My-Way
[![Build Status](https://travis-ci.org/Luckzman/Ride-My-Way.svg?branch=develop)](https://travis-ci.org/Luckzman/Ride-My-Way)
[![Coverage Status](https://coveralls.io/repos/github/Luckzman/Ride-My-Way/badge.svg)](https://coveralls.io/github/Luckzman/Ride-My-Way)
[![Maintainability](https://api.codeclimate.com/v1/badges/11ca2d3bbdce9641bc2c/maintainability)](https://codeclimate.com/github/Luckzman/Ride-My-Way/maintainability)

Ride-My-Way App is a carpooling application that provides drivers with the ability to create ride offers
and passengers to join available ride offers.

## Table of Content 
1. [Built With](#built-with)
2. [Application Features](#application-features)
3. [How to use](#how-to-use)
4. [Author](#author)
5. [License](#license)

## Built With
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) & [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [Express-validator](https://www.npmjs.com/package/express-validator)

### Deployment
Ride-My-Way UI is hosted on gh-pages while the app is hosted on Heroku
* [Github Page](https://luckzman.github.io/Ride-My-Way/UI/index.html)
* [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2177986)
* [Heroku app](https://ridemywayapp.herokuapp.com)

## Application Features
* Authenticated users can signin
* users can signup
* Authenticated users can create ride offers
* users can view ride offers
* users can view specific ride offer details
* Authenticated users can make ride request to join ride
* Authenticated users can accept or reject ride
* Authenticated users can view number of ride given/taken
* Authenticated users can view list of rides given/taken

### API Endpoint
Endpoint | Functionality
-------- | -------------
GET  /rides | Fetch all ride offers
GET /rides/:id | Fetch a single ride offer
POST /rides | Create a ride offer
POST /rides/:id/request | Make a request to join a ride

## How to use
### Prerequisite
To clone and run this application, you'll need [git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download/)(which comes with [npm](https://www.npmjs.com/)) installed on you computer.

### Installing
From your command line
```
# Clone this repository
$ git clone https://github.com/Luckzman/Ride-My-Way.git

# Go into the repository directory
$ cd Ride-My-Way

# Install dependencies
$ npm install

# run the app
$ npm start
```

### Running Test
* Navigate to the project root directory
* After installation, run `npm test`

## Author
Lucky Omokarho Oniovosa

## License
ISC

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
// path is a core node module built into node, no need to install. built in
const path = require('path');
const db = require('./config/connection');


const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// create express app by calling express functions
const app = express();

// checks if we have defined PORT as an environment variable, if it is defined, set PORT equal to that value
// if not, set PORT to 3001
// when we deploy to heroku, heroku will define the PORT by default, as an environment variable 
const PORT = process.env.PORT || 3001;

// app.use sets up middleware for our app to use 
// express.urlencoded is built into express, it matches requests with a "URL-encoded" content type dedined in the header. 
// it parses(translates) encoded URLs
// express.json is built into express, it matches requests with a "JSON" content type dedined in the header. 
// it ONLY parses requests that contain JSON
// we know which method to use without opening up the "envelope"(body) by reading the "header" (header/body relationship)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
// check id NODE_ENV value is set to production, if it is, then for any route (or any web page on the site) requested, 
// you are going to send the client/build file back 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get handles get requests to the / path otherwise known as the root, barkr.com 
// we handle the request by sending the client the index.html file in the final "build" of the project
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// db is mongoose.connection which was imported from config/connection.js
// it wraps the express app.listen method which starts the server on the PORT that we defined earlier
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
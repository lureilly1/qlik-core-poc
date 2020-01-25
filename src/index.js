import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Styles
import './index.css';
// Leonardo-UI styles. See: https://github.com/qlik-oss/leonardo-ui
//import '../node_modules/leonardo-ui/dist/leonardo-ui.css';
//import '../node_modules/leonardo-ui/dist/leonardo-ui.js';

var enigma = require("enigma.js");
var qixSchema = require("enigma.js/schemas/12.20.0.json");

// As example, we'll add a connection to localhost.
var config = {
    schema: qixSchema,
    url: 'ws://167.99.80.6:19076/app',

   /* url: 'ws://localhost:19076/app',*/
};

// Create a QIX session & open the Qlik App.
var session = enigma.create(config);
session.open().then(async function(global) {
    const version = await global.engineVersion();
    return { obj: global, ver: version }
}).then(function(app) {
    // Pass the Qlik's app object to the App component
    ReactDOM.render(<App engine={app}/>, document.getElementById('root'));
});




/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Styles
import './index.css';
// Leonardo-UI styles. See: https://github.com/qlik-oss/leonardo-ui
//import '../node_modules/leonardo-ui/dist/leonardo-ui.css';
//import '../node_modules/leonardo-ui/dist/leonardo-ui.js';

// In production, we register a service worker to serve assets from local cache.
import * as serviceWorker from './serviceWorker';

const WebSocket = require('ws');
const enigma = require('enigma.js');
const schema = require('enigma.js/schemas/3.2.json');

(async () => {
    try {
      console.log('Creating and opening session.');
      const session = enigma.create({
        schema,
        url: 'ws://localhost:19076/app',
        createSocket: (url) => new WebSocket(url),
      });
      const global = await session.open();
      const version = await global.engineVersion();
      console.log(`Engine version retrieved: ${version.qComponentVersion}`);
      
      //Render App
      ReactDOM.render(<App engine={global}/>, document.getElementById('root'));

    } catch (err) {
      console.log('Whoops! An error occurred.', err);
      process.exit(1);
    }
  })();
*/

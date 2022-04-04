
module.exports={
  "src_folders" : ["tests"],
 
  //FOR CHROME


  /*"webdriver" : {
    "start_process": true,
    "server_path":require('chromedriver').path,
    "port": 9515
  },

  
  "test_settings" : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      },
     
    },

  },*/



// FOR FIREFOX

  "webdriver": {
    "start_process": true,
    "server_path": require('geckodriver').path,
    "cli_args": [
        "--log", "debug"
    ],
    "port": 4444
},

"test_settings": {
    "default": {

  "desiredCapabilities": {
  "browserName": "firefox",
  "javascriptEnabled": true,
  "marionette": true,
  "acceptSslCerts": true,
  "moz:firefoxOptions": {
    "binary": "/Applications/Firefox.app/Contents/MacOS/firefox-bin",
    "args": ["-P"],
    "profile": "Li90bXAvZmlyZWZveA=="
  }
}
  }
},

}



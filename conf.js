
exports.config= {
    // launch locally when fields directConnect and seleniumAddress are not provided
    // for testing directly against a browser without using a Selenium Server. applies only to chrome and firefox.
    directConnect:true,

    
  // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['JSFiles/specs/*.js'],

    
    
  // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
      /*
      //Using headless Chrome
      chromeOptions: {
        args: [ "--headless", "--disable-gpu", "--window-size=800,600" ],
      // disable "chrome is being controlled by automated software"
        'args': ['disable-infobars=true'],
      }*/

      //Using headless Firefox
      /*
      capabilities: {
       browserName: 'firefox',
  
      'moz:firefoxOptions': {
      args: [ "--headless" ]
      }
      }
      */

     /*
      // allows different specs to run in parallel.
      // If this is set to be true, specs will be sharded by file
      // (i.e. all files to be run by this set of capabilities will run in parallel).
      // Default is false.
      shardTestFiles: true,
      // Maximum number of browser instances that can run in parallel for this
      // set of capabilities. This is only needed if shardTestFiles is true.
      // Default is 1.
      maxInstances: 2, 
     */
    },

    //Testing Against Multiple Browsers
    /*
       multiCapabilities: [{
      'browserName': 'firefox'
    }, {
      'browserName': 'chrome'
    }]
    
    //Paraller Testing
    multiCapabilities: [
    {
        shardTestFiles: true,
        maxInstances: 1,
        sequential: true,
        browserName: 'chrome',
        specs: ['specs/spec1.js','specs/spec2.js','specs/spec3.js']
    },
    {
        shardTestFiles: true,
        maxInstances: 1,
        sequential: true,
        browserName: 'chrome',
        specs: ['specs/spec4.js', 'specs/spec5.js','specs/spec6.js',
        ]
    }
    */

    //Multiple Suits
    /*
    suites: {
    smoke: 'tests/e2e/smoke/*.js',
    performance: 'tests/e2e/performance/*.js'
    regression: 'tests/e2e/regression/*.js',
    full: 'tests/e2e/*.js'
    },
    //Run the smoke test and performance test suites:
    //protractor conf.js --suite smoke, performance
    */

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,   // Use colors in the command line report.  
        defaultTimeoutInterval: 30000   // Default time to wait in ms before a test fails.
      },
      //onPrepare: () => {
    onPrepare: function () {
       let globals = require('protractor');
       let browser = globals.browser;
       
       browser.manage().window().maximize();
       // set implicit time to 5 seconds
       //browser.manage().timeouts().implicitlyWait(5000);

       //Jasmine Report 
       var ChercherTechJasmineReporter = require('chercher-tech-jasmine-reporter');

	      jasmine.getEnv().addReporter(new ChercherTechJasmineReporter({
		    screenshotOnFail :true,
		    reportName:'Execution Report',
		    showSkipped:true,
		    browser:browser,
		    showLineChart:true

	      }));
     },
    // Specifying global beforeEach and afterEach jasmine2 hooks.
    beforeEach:function() {
      // Adding .toAppear() and .toDisappear() into available matchers.
      // https://github.com/Xotabu4/jasmine-protractor-matchers
      let matchers = require('jasmine-protractor-matchers')
      jasmine.addMatchers(matchers);
    },

    afterEach:function() {
      // Clearing browser data after each test
       browser.manage().deleteAllCookies();
       browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
    }
  }
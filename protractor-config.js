
exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',

    specs: ['./protractor/*_spec.js'],

    capabilities: {
        platformName: 'android',
        platformVersion: '6.0',
        deviceName: 'Nexus',
        appPackage: 'com.ionicframework.ionicappiumprotractorexample806497',
        appActivity: 'com.ionicframework.ionicappiumprotractorexample806497.MainActivity',
        browserName: "",
        autoWebview: true,
        //CHANGE THIS TO YOUR ABSOLUTE PATH
        app: 'C:/Users/Infinity Labs/.jenkins/workspace/Demo Pipeline/platforms/android/build/outputs/apk/android-debug.apk'
       // app: 'D:/dc_MyProductivity_debug.apk'
        //newCommandTimeout: 60
    },
    baseUrl: 'http://10.0.2.2:8000',

    // configuring wd in onPrepare
    // wdBridge helps to bridge wd driver with other selenium clients
    // See https://github.com/sebv/wd-bridge/blob/master/README.md
    onPrepare: function () {
        var wd = require('wd'),
            protractor = require('protractor'),
            wdBridge = require('wd-bridge')(protractor, wd);
        wdBridge.initFromProtractor(exports.config);

    }
};


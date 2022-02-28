module.exports = {
    
    //https://www.npmjs.com/package/@applitools/eyes-storybook
    
    /* Server configuration */
    serverUrl: "https://eyesapi.applitools.com",
    apiKey: process.env.APPLITOOLS_API_KEY,  // as default used value from environment variable
    appName: 'My Storybook 6',
    
    batchName: process.env.CI
          ? undefined
          : 'Storbook6-Local',
    
    batchId: process.env.APPLITOOLS_BATCH_ID,

 
    browser: [
       { width: 800,   height: 1000, name: 'firefox' },
       { width: 1000,  height: 600, name: 'chrome'  },
    ],

    testConcurrency: 50,

    showLogs: true,
    
    waitBeforeScreenshot: 1000,
    readStoriesTimeout: 30000,
    //puppeteerOptions: { args: ['--no-sandbox'], timeout: 0 },
    
};
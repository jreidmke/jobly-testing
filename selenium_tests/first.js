const webdriver = require('selenium-webdriver');
require("colors");

async function runSampleTest () {
  let driver;
  try {
    driver = new webdriver.Builder().forBrowser("chrome").build();
    await driver.get('http://www.google.com');
    await (await driver.findElement(webdriver.By.name('q'))).sendKeys('BrowserStack\n');
    const title = await driver.getTitle();
    console.log(title);
    // Setting the status of test as 'passed' or 'failed' based on the condition; if title of the web page included 'BrowserStack'
    if(title.includes('BrowserStack')) {
      console.log("Title Test Passed".green);
    } else {
      console.log("Title Test Failed".red);
    }
  } catch (e) {
    console.log(e);
  } finally {
    if(driver) {
      await driver.quit();
    }
  }
}
runSampleTest(); 
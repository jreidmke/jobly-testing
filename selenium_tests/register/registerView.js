const webdriver = require('selenium-webdriver');
require("colors");
const baseUrl = 'http://localhost:3000/';
let driver = new webdriver.Builder().forBrowser("chrome").build();

async function registerView() {
    try {
        await driver.get(baseUrl);
        await driver.findElement(webdriver.By.name("registerBtn")).click();
        const title = await driver.getTitle();
        console.log(title);
        if(title.includes('Registration Form')) {
            console.log('Register Title Test Passed'.green);
        } else {
            console.log('Register Title Test Failed'.red);
        }
    } catch (error) {
        console.error(error);
    } finally {
        if(driver) {
            (await driver).quit();
        }
    }
};
registerView();
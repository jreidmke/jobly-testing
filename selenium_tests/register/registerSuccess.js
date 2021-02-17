const webdriver = require('selenium-webdriver');
require("colors");
const baseUrl = 'http://localhost:3000/';
let driver = new webdriver.Builder().forBrowser("chrome").build();

async function registerSuccess() {
    try {
        await driver.get(`${baseUrl}signup`);
        await driver.findElement(webdriver.By.name("username")).sendKeys((Math.random() * 1000).toString());
        await driver.findElement(webdriver.By.name("password")).sendKeys("password");
        await driver.findElement(webdriver.By.name("firstName")).sendKeys("James");
        await driver.findElement(webdriver.By.name("lastName")).sendKeys("Reid");
        await driver.findElement(webdriver.By.name("email")).sendKeys("jreidmke@gmail.com\n");
        await driver.sleep(2000);
        const title = await driver.getTitle();
        console.log(title);
        if(title.includes("Company List")) {
            console.log('Register Success Test Passed'.green);
        } else {
            console.log('Register Success Test Failed'.red);
        }
    } catch (error) {
        console.error(error);
    } finally {
        if(driver) {
            (await driver).quit()
        }
    }
};
registerSuccess();

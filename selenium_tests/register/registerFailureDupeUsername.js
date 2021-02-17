const webdriver = require('selenium-webdriver');
require("colors");
const baseUrl = 'http://localhost:3000/';
let driver = new webdriver.Builder().forBrowser("chrome").build();

async function registerFailureDuplicateUsername() {
    try {
        await driver.get(`${baseUrl}signup`);
        await driver.findElement(webdriver.By.name("username")).sendKeys("testuser");
        await driver.findElement(webdriver.By.name("password")).sendKeys("password");
        await driver.findElement(webdriver.By.name("firstName")).sendKeys("James");
        await driver.findElement(webdriver.By.name("lastName")).sendKeys("Reid");
        await driver.findElement(webdriver.By.name("email")).sendKeys("jreidmke@gmail.com\n");
        await driver.sleep(2000);
        const title = await driver.getTitle();
        const warningText = await driver.findElement(webdriver.By.xpath("//*[text()='Duplicate username: testuser']")).getText();
        console.log(title);
        console.log(warningText);
        if(title.includes("Registration Form") && warningText==="Duplicate username: testuser") {
            console.log('Register Failure Test Passed'.green);
        } else {
            console.log('Register Failure Test Failed'.red);
        }
    } catch (error) {
        console.error(error);
    } finally {
        if(driver) {
            (await driver).quit()
        }
    }
};
registerFailureDuplicateUsername();


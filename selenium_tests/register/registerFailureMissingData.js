const webdriver = require('selenium-webdriver');
require("colors");
const baseUrl = 'http://localhost:3000/';
let driver = new webdriver.Builder().forBrowser("chrome").build();

async function registerFailureDuplicateUsername() {
    try {
        await driver.get(`${baseUrl}signup`);
        await driver.findElement(webdriver.By.name("username")).sendKeys("testuser");
        await driver.findElement(webdriver.By.name("password")).sendKeys("password");
        await driver.findElement(webdriver.By.name("email")).sendKeys("jreidmke@gmail.com\n");
        await driver.sleep(2000);
        const title = await driver.getTitle();
        const warningTextFirstName = await driver.findElement(webdriver.By.xpath("//*[text()='instance.firstName does not meet minimum length of 1']")).getText();
        const warningTextLastName = await driver.findElement(webdriver.By.xpath("//*[text()='instance.lastName does not meet minimum length of 1']")).getText();
        console.log(title);
        console.log(warningTextFirstName);
        console.log(warningTextLastName);
        if(title.includes("Registration Form") 
        && warningTextFirstName==="instance.firstName does not meet minimum length of 1"
        && warningTextLastName==="instance.lastName does not meet minimum length of 1") {
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


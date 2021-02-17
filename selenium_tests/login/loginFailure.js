const webdriver = require('selenium-webdriver');
require("colors");
const baseUrl = 'http://localhost:3000/';
let driver = new webdriver.Builder().forBrowser("chrome").build();

async function loginFailure() {
    try {
        await driver.get(`${baseUrl}login`);
        await driver.findElement(webdriver.By.id("usernameInput")).sendKeys("fdafdsa");
        await driver.findElement(webdriver.By.id("passwordInput")).sendKeys("fdafda\n");
        await driver.sleep(2000);
        const title = await driver.getTitle();
        const warningText = await driver.findElement(webdriver.By.xpath("//*[text()='Invalid username/password']")).getText();
        console.log(warningText);
        console.log(title);
        if(title.includes("Login Form") && warningText==="Invalid username/password") {
            console.log('Login Failure Test Passed'.green);
        } else {
            console.log('Login Failure Test Failed'.red);
        }
    } catch (error) {
        console.error(error);
    } finally {
        if(driver) {
            (await driver).quit()
        }
    }
};
loginFailure();


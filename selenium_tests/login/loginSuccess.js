const webdriver = require('selenium-webdriver');
require("colors");
const baseUrl = 'http://localhost:3000/';
let driver = new webdriver.Builder().forBrowser("chrome").build();

async function loginSuccess() {
    try {
        await driver.get(`${baseUrl}login`);
        await driver.findElement(webdriver.By.id("usernameInput")).sendKeys("testuser");
        await driver.findElement(webdriver.By.id("passwordInput")).sendKeys("password\n");
        await driver.sleep(2000);
        const title = await driver.getTitle();
        console.log(title);
        if(title.includes("Company List")) {
            console.log('Login Success Test Passed'.green);
        } else {
            console.log('Login Success Test Failed'.red);
        }
    } catch (error) {
        console.error(error);
    } finally {
        if(driver) {
            (await driver).quit()
        }
    }
};
loginSuccess();

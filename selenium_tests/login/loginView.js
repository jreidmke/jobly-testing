const webdriver = require('selenium-webdriver');
require("colors");
const baseUrl = 'http://localhost:3000/';
let driver = new webdriver.Builder().forBrowser("chrome").build();

async function loginView() {
    try {
        await driver.get(baseUrl);
        await driver.findElement(webdriver.By.name("loginBtn")).click();
        const formTitle = await driver.findElement(webdriver.By.id("LoginFormTitle")).getText();
        console.log(formTitle);
        if(formTitle === 'Log In Form') {
            console.log('Login Title Test Passed'.green);
        } else {
            console.log('Login Title Test Failed'.red);
        }
    } catch (error) {
        console.error(error);
    } finally {
        if(driver) {
            (await driver).quit();
        }
    }
};
loginView();

module.exports = loginView;

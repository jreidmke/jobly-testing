const webdriver = require('selenium-webdriver');
require("colors");

async function loginView() {
    let driver;
    try {
        driver = new webdriver.Builder().forBrowser("chrome").build();
        await driver.get('http://localhost:3000/login');
        // (await driver.findElement(webdriver.By.name("loginBtn"))).click();
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

// await (await driver).findElement(webdriver.By.className("LoginForm")).getText();
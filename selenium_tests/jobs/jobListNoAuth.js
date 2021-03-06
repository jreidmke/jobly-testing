const webdriver = require('selenium-webdriver');
require("colors");
const baseUrl = 'http://localhost:3000/';
let driver = new webdriver.Builder().forBrowser("chrome").build();

async function jobListNoAuth() {
    try {
        await driver.get(`${baseUrl}jobs`);
        await driver.sleep(2000);
        const title = await driver.getTitle();
        if(title.includes("Login Form")) {
            console.log("Job List No Auth Test Passed".green);
        } else {
            console.log("Job List No Auth Test Failed".red);
        }
    } catch (error) {
        console.error(error);
    } finally {
        if(driver) {
            (await driver).quit()
        }
    }
};

jobListNoAuth();
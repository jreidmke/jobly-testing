const webdriver = require('selenium-webdriver');
require("colors");
const baseUrl = 'http://localhost:3000/';
let driver = new webdriver.Builder().forBrowser("chrome").build();

async function updateProfileFailure() {
    try {
        await driver.get(`${baseUrl}login`);
        await driver.findElement(webdriver.By.id("usernameInput")).sendKeys("testuser");
        await driver.findElement(webdriver.By.id("passwordInput")).sendKeys("password\n");
        await driver.sleep(2000);
        await driver.findElement(webdriver.By.xpath("//*[text()='Profile']")).click();
        await driver.sleep(500);
        await driver.findElement(webdriver.By.name("firstName")).sendKeys("Jim");
        await driver.findElement(webdriver.By.id("submitBtn")).click();
        await driver.sleep(500);
        title = await driver.getTitle();
        const failureText = driver.findElement(webdriver.By.xpath("//*[text()='instance.password does not meet minimum length of 5']"));
        if(title.includes("Update Profile") && failureText) {
            console.log("Profile Update Submit Fail Test Passed".green);
        } else {
            console.log("Profile Update Submit Fail Test Failed".red);
        }
    } catch (error) {
        console.error(error);
    } finally {
        if(driver) {
            await driver.quit()
        }
    }
};

updateProfileFailure();
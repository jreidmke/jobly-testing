const webdriver = require('selenium-webdriver');
require("colors");
const baseUrl = 'http://localhost:3000/';
let driver = new webdriver.Builder().forBrowser("chrome").build();

async function updateProfileSuccess() {
    try {
        await driver.get(`${baseUrl}login`);
        await driver.findElement(webdriver.By.id("usernameInput")).sendKeys("testuser");
        await driver.findElement(webdriver.By.id("passwordInput")).sendKeys("password\n");
        await driver.sleep(2000);
        await driver.findElement(webdriver.By.xpath("//*[text()='Profile']")).click();
        await driver.sleep(500);
        let title = await driver.getTitle();
        if(title.includes("Update Profile")) {
            console.log("Profile Update View Test Passed".green);
        } else {
            console.log("Profile Update View Search Test Failed".red);
        }
        await driver.findElement(webdriver.By.name("firstName")).sendKeys("Jim");
        await driver.findElement(webdriver.By.name("password")).sendKeys("password\n");
        await driver.sleep(500);
        title = await driver.getTitle();
        const successTest = driver.findElement(webdriver.By.xpath("//*[text()='Updated successfully.']"));
        if(title.includes("Update Profile") && successTest) {
            console.log("Profile Update Submit Test Passed".green)
        } else {
            console.log("Profile Update Submit Test Failed".red)
        }
    } catch (error) {
        console.error(error);
    } finally {
        if(driver) {
            await driver.quit()
        }
    }
};

updateProfileSuccess();
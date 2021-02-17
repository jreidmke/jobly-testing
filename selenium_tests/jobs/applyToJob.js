const webdriver = require('selenium-webdriver');
require("colors");
const baseUrl = 'http://localhost:3000/';
let driver = new webdriver.Builder().forBrowser("chrome").build();

async function companyListSearchNoResults() {
    try {
        await driver.get(`${baseUrl}login`);
        await driver.findElement(webdriver.By.id("usernameInput")).sendKeys("testuser");
        await driver.findElement(webdriver.By.id("passwordInput")).sendKeys("password\n");
        await driver.sleep(2000);
        await driver.findElement(webdriver.By.id("jobs-link")).click();
        await driver.sleep(500);
        await driver.findElement(webdriver.By.name("searchTerm")).sendKeys("Accommodation manager\n");
        await driver.sleep(500);
        await driver.findElement(webdriver.By.id("applyBtn")).click();
        const applySuccess = driver.findElement(webdriver.By.xpath("//*[text()='Applied']"))
        const title = await driver.getTitle();
        if(applySuccess && title.includes("Job List")) {
            console.log("Company List Search Test Passed".green);
        } else {
            console.log("Company List Search Test Failed".red);
        }
    } catch (error) {
        console.error(error);
    } finally {
        if(driver) {
            (await driver).quit()
        }
    }
};

companyListSearchNoResults();
const webdriver = require('selenium-webdriver');
require("colors");
const baseUrl = 'http://localhost:3000/';
let driver = new webdriver.Builder().forBrowser("chrome").build();

async function companyListSearch() {
    try {
        await driver.get(`${baseUrl}login`);
        await driver.findElement(webdriver.By.id("usernameInput")).sendKeys("testuser");
        await driver.findElement(webdriver.By.id("passwordInput")).sendKeys("password\n");
        await driver.sleep(2000);
        await driver.findElement(webdriver.By.name("searchTerm")).sendKeys("Ayala\n");
        await driver.sleep(500);
        const ayalaText = await driver.findElement(webdriver.By.xpath("//*[text()='Ayala-Buchanan']")).getText();
        if(ayalaText) {
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

companyListSearch();
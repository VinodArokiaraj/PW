const { expect } = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))

class LoginPage {
    constructor(page) {
        this.page = page;
        this.header = "//h2[normalize-space()='Sign In']"
        this.username = '#email1'
        this.password = '#password1'
        this.loginButton = "//button[text()='Sign in']"
    }

    async verifySignIn() {
        
        await expect(this.page.locator(this.header)).toBeVisible()
        
    }

    async loginToApplication() {
        await this.page.fill(this.username, testdata.username)
        await this.page.fill(this.password, testdata.password)
        await this.page.click(this.loginButton);
        //await this.page.pause()
    }
}

module.exports = LoginPage;
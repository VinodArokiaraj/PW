const {test,expect} = require('@playwright/test')

test('verify Error Message',async function({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    await page.getByPlaceholder("Username").fill("Admin")

    await page.locator("input[name='password']").fill("admin")
    
    await page.locator("//button[@type='submit']").click()
    
    const errorMessage = await page.locator("//p[contains(@class, 'alert-content-text')]").textContent()

    console.log("error message is "+errorMessage)
    
    expect(errorMessage.includes("Invalid")).toBeTruthy()

    expect(errorMessage === "Invalid credentials").toBeTruthy()

})
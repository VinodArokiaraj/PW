const {test,expect} = require('@playwright/test')

test("Valid login", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").fill("Admin",{delay:200}) // delay is to type slow just for reference

    await page.locator("input[name='password']").fill("admin123")

    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").first().click()

    await page.getByText("Logout").click()

    await expect(page).toHaveURL(/Login/);
})
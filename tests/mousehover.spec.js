const {test,expect} = require("@playwright/test")
test("Verify mouse hover", async ({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByPlaceholder("Enter Email").fill("admin@email.com")
    await page.getByPlaceholder("Enter Password").fill("admin@123")
    await page.getByRole("button",{name:"Sign in"}).click()
    await page.locator("//span[text()='Manage']").hover() //.hover({force:true}) --> optional
    await page.locator("//a[normalize-space()='Manage Courses']").click()
    await page.waitForTimeout(2000)

})
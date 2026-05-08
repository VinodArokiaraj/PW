const {test,expect} = require("@playwright/test")
test("Verify mouse hover", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("./uploads/ISTQB_CTFL_Syllabus_v4.0.1.pdf");
    await page.locator("#file-submit").click()
    expect(await page.locator("//h3")).toHaveText("File Uploaded!")
})
const {test,expect} = require("@playwright/test")
test("handle frames", async ({page}) => {
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

    await page.waitForTimeout(10000)

    const iframe = await page.frameLocator("//frame[@name='packageListFrame']")

    await iframe.locator("//a[text()='java.applet']").click()

    //await page.pause() --> will pause the execution and also show the playwright inspector
})
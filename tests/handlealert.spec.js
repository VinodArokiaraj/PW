const{test,expect} = require("@playwright/test")

test("Handle Alert", async function({page}) {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.waitForTimeout(2000)

    page.on('dialog', async (d) => {

        //not required in realtime projects
        expect(d.type()).toContain("alert") //cannot accept "Alert" or "JS"
        
        expect(d.message()).toContain("I am a JS Alert")

        await d.accept()
    })

    await page.locator("//button[text()='Click for JS Alert']").click()

})

test("Handle Confirm Alert", async function({page}) {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.waitForTimeout(2000)

    page.on('dialog', async (dialogWindow) => {

        //not required in realtime projects
        expect(dialogWindow.type()).toContain("confirm")
        
        expect(dialogWindow.message()).toContain("I am a JS Confirm")

        await dialogWindow.dismiss()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()

})

test("Handle Prompt Alert", async function({page}) {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.waitForTimeout(2000)

    page.on('dialog', async (dialogPrompt) => {

        //not required in realtime projects
        expect(dialogPrompt.type()).toContain("prompt")
        
        expect(dialogPrompt.message()).toContain("I am a JS prompt")

        await dialogPrompt.accept("Test")
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

})
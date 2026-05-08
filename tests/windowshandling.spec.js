const {test,expect} = require('@playwright/test')
test("working with multiple tabs", async ({browser}) => {

    const context = await browser.newContext()
    
    const page = await context.newPage();
    
    await page.goto("https://freelance-learn-automation.vercel.app/login")

   // await page.waitForTimeout(10000)

    const [newPage] = await Promise.all
        (
            [
                context.waitForEvent('page'),

                page.locator("a[href*='facebook']").first().click()
            
            ]
        )

        //await newPage.waitForTimeout(2000)

        await newPage.locator("(//input[@name='email'])[2]").fill("Test@gmail.com")

        //await newPage.waitForTimeout(2000)

        await newPage.close()

        await page.locator("#email1").fill("Testing@gmail.com")

        //await page.waitForTimeout(2000)
        
})
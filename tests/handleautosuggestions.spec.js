const {test,expect} = require("@playwright/test")
test("Verify autosuggestion feature", async function({page}) {
    await page.goto("https://www.google.com")
    
    await page.locator("textarea[name='q']").fill("Job search")
    
    //await page.locator("//b[text()=' ai']").click()

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("Enter")

})

test("Verify autosuggestion feature using loop", async function({page}) {
    await page.goto("https://www.google.com")
    await page.waitForTimeout(2000)
    
    await page.locator("textarea[name='q']").fill("Job search")
    
    const elements = await page.$$("//li[@role='presentation']")
    
    for(let i=0; i<elements.length; i++) {
        const suggestion = await elements[i].textContent()

        if(suggestion.includes('testing')) {
                await elements[i].click()
                break
        }
        console.log(elements)
    }

})
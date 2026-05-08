const {test,expect} = require ("@playwright/test")
test("Verify keyboard actions", async ({page})=>{

    await page.goto("https://www.google.com")
    
    await page.waitForTimeout(2000)
    
    await page.locator("textarea[name='q']").focus()
    await page.keyboard.type("Vinod Arokiaraj!")
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")

    for(let i=0; i<9; i++){
    // The above line can also be written as shown below
    //    for(let i=0; i<"Arokiaraj".length; i++){

        await page.keyboard.up("Shift")
        await page.keyboard.press("Backspace")
    }

    

    await page.waitForTimeout(2000)

    /*await page.locator("textarea[name='q']").fill("Vayne Nicolas")
    
    await page.keyboard.press("Meta+A")
    
    await page.keyboard.press("Backspace")
    */
    //await page.keyboard.press("Enter")
})
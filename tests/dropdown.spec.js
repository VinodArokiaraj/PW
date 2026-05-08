const {expect, test} = require("@playwright/test")
test("Verify dropdown",async ({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.locator("#state").selectOption({label:"Goa"})
    await page.locator("#state").selectOption({value:"Himachal Pradesh"})
    await page.locator("#state").selectOption({index:10})

    /*
    //to select from a dropdown and to check an option is included in the same
    const value = await page.locator("#state").textContent()
    console.log(value)

    await expect(value.includes("Kerala")).toBeTruthy()

    */

    // to get the list of options from the dropdown
    // and to stop the loop upon iterating until a selected option

    let state = await page.$("#state")
    
    let allElements = await state.$$("option")

    let ddStatus = false

    for(let i=0; i<allElements.length; i++) {
        let element = await allElements[i]
        let value = await element.testContent()
        console.log(value)
        if(value.include("Rajasthan")){
            ddStatus = true
            break
        }
    }

    await expect(ddStatus).toBeTruthy()

})
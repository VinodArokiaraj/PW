const {test,expect} = require('@playwright/test')

test("init test",async function({page}){
    expect(10).toBe(10)
})

test("second test",async function({page}){
    expect(100).toBe(101)
})

test("third test",async function({page}){
    expect("Vinod Arokiaraj").toContain("Arokiaraj")
})
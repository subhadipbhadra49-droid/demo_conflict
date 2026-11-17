import {test,expect  } from "@playwright/test";
test("auto retrying", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    //check whether the username text field is visible
    await expect(page.locator("#me"))
})
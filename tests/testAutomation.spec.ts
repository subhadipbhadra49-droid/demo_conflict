import {test} from '@playwright/test';
test.only('test3', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('input#name').fill("SUBHADIP");
    await page.pause()
})
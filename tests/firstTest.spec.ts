import {test} from '@playwright/test';
test.only('test1', async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage()

    await page.goto('https://www.amazon.in')
    // await page.pause()
    // await page.waitForTimeout(2000)
    await page.getByLabel('Search Amazon.in').fill('shoes')
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    // await page.waitForTimeout(5000)
    await page.locator('//span[text()="Get It in 2 Days"]').click()
    await page.waitForTimeout(2000)
    await page.locator('//div[@class="a-section aok-relative s-image-tall-aspect"]').click()
    await page.pause()

    

})

test('test2', async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage()

    await page.goto('https://www.amazon.in')

    // await page.screenshot('tests/screenshots/ss.png')



})
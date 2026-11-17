import {test,expect} from '@playwright/test'
test('Kt', async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.waitForTimeout(2000)
    await page.goto("https://www.flipkart.com")
    await page.goto("https://www.amazon.com")
    // await expect(page).toHaveURL("https://demoapps.qspiders.com/ui?scenario=1")
    await page.reload();
    await page.goBack()
    await page.goForward()
    console.log(await page.title())
    console.log(await page.url())
    console.log(await page.viewportSize())
    await page.setViewportSize({width:1920,height:1080})
    console.log(await page.viewportSize())
    await page.screenshot({path:`tests/screenshot/plaaywright${Date.now()}.png`})
    // await page.pause()


})
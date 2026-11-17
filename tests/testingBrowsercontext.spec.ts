import {test} from "@playwright/test";
test("testing browserContext", async({browser})=>{

    let context=await browser.newContext({
        viewport: {height: 900, width: 1280},
        ignoreHTTPSErrors: true
    })
    let page= await context.newPage();
    await page.goto("https://www.facebook.com");
    await page.pause()
})

test.only("testing browserContext part2", async({browser})=>{

    let page=await browser.newPage({
        colorScheme: "dark"
    })
    await page.goto("https://www.facebook.com");
})
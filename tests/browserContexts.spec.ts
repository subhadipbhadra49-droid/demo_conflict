import {test} from "@playwright/test";
test("Browser Contexts", async({browser})=>{

    let context1=await browser.newContext({
        colorScheme: "dark"
    })
    let context2=await browser.newContext()

    let contexts= browser.contexts()

    console.log(contexts.length);
    // await page.goto("https://www.facebook.com");
})

test.only("testing browserContext part2", async({browser})=>{

    // let page=await browser.newPage({
    //     colorScheme: "dark"
    // })
    // await page.goto("https://www.facebook.com");

    let browserType= browser.browserType()
    console.log(browserType.name());
})
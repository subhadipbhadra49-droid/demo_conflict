import {test} from "@playwright/test"
test("Task1", async({browser})=>{

    let context1=await browser.newContext()
    let context2=await browser.newContext()
    let context3=await browser.newContext()

    let page1=await context1.newPage()
    let page2=await context2.newPage()
    let page3=await context3.newPage()

    let contexts= await browser.contexts()
    console.log(contexts.length)

    await page1.goto("https://www.hotstar.com/in/home")
    await page2.goto("https://www.makautexam.net/")
    await page3.goto("https://www.amazon.in/")

    console.log(await page1.title())
    console.log(await page1.url())
    console.log(await page2.title())
    console.log(await page2.url())
    console.log(await page3.title())
    console.log(await page3.url())
})


test("Task2", async({page})=>{

    await page.goto("https://www.google.com")

    console.log(await page.title());
    console.log(await page.url());

    await page.goto("https://www.wikipedia.com")

    console.log(await page.title());
    console.log(await page.url());

    await page.goBack()
    await page.goForward()
    await page.reload()

    console.log(await page.url());
    
})


test("Task3", async({browser})=>{

    let context=await browser.newContext()

    let page1=await context.newPage()
    let page2=await context.newPage()
    let page3=await context.newPage()

    await page1.goto("https://www.hotstar.com/in/home")
    await page2.goto("https://www.makautexam.net/")
    await page3.goto("https://www.amazon.in/", {waitUntil:"load"})

    console.log(await page1.title())
    console.log(await page1.url())
    console.log(await page2.title())
    console.log(await page2.url())
    console.log(await page3.title())
    console.log(await page3.url())

    await page1.screenshot({path:`tests/screenshot/TaskSS.png`})
    await page2.screenshot({path:`tests/screenshot/TaskSS1.png`})
    await page3.screenshot({path:`tests/screenshot/TaskSS2.png`})

    await page2.close()

    console.log(await context.pages().length);
    
})


test("Task4", async({browser})=>{

    let context=await browser.newContext({viewport:{width:1280,height:720}})
    let page=await context.newPage()

    await page.goto("https://www.flipkart.com")
    console.log(await page.viewportSize());

    await page.setViewportSize({width:1920,height:1080})
    console.log(await page.viewportSize());

    await page.screenshot({path:`tests/newSSFolder/ss.png`})
    await context.close();
})


test("Task5", async({browser})=>{

    let context1=await browser.newContext()
    let context2=await browser.newContext()
    
    let page1=await context1.newPage()
    let page2=await context2.newPage()

    await page1.setViewportSize({width:1000,height:800})
    await page2.setViewportSize({width:800,height:500})

    await page1.goto("https://www.flipkart.com")
    await page2.goto("https://www.flipkart.com")

    console.log(await page1.title());
    console.log(await page1.url());
    console.log(await page2.title());
    console.log(await page2.url());

    await page1.screenshot({path:`tests/newSSFolder/ss24.png`, fullPage:true})
    await page2.screenshot({path:`tests/newSSFolder/ss25.png`, fullPage:true})

    console.log(await browser.contexts().length);
    await context1.close()
    console.log(await browser.contexts().length);
    
})


test.only("Task6", async({browser})=>{

    let context=await browser.newContext({viewport:{width:1366,height:768}})
    let page=await context.newPage()

    await page.goto("https://playwright.dev/")
    await page.screenshot({path:`tests/screenshot/devPlay.png`})

    await page.goto("https://www.typescriptlang.org/docs/")
    await page.reload()
    await page.screenshot({path:`tests/screenshot/typeOff${Date.now()}.png`})

    await page.goBack()
    console.log(await page.title());
    console.log(await page.url());
    
    await context.close();
})
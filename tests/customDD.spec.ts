import {test} from "@playwright/test";
test("Single DD", async({page})=>{
    
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    let D=await page.locator("#country_code")
    await page.waitForTimeout(2000)
    await D.selectOption("+01");
    await page.waitForTimeout(1000)
    await D.selectOption({value:"+92"});
    await page.waitForTimeout(1000)
    await D.selectOption({label:"+14"});
    await page.waitForTimeout(1000)
    await D.selectOption({index:4});
    await page.waitForTimeout(2000)
    
})

test("Multi DD", async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    let MD=page.locator("#select-multiple-native")
    await MD.selectOption(["Fjallraven - Foldsac...","Mens Casual Premium ...","Mens Cotton Jacket...","Mens Casual Slim Fit...","John Hardy Women's L..."])
    await page.waitForTimeout(2000)
    await page.getByText("Add").click()
    await page.waitForTimeout(2000)
})

test.only("Custom DD", async({page})=>{

    await page.goto("https://www.amazon.in/",{waitUntil:"load"})
    await page.locator('//div[@id="icp-nav-flyout"]').hover()
    await page.waitForTimeout(2000)
    await page.locator('//div[@id="nav-flyout-icp"]//li[normalize-space(.)="বাংলা - BN"]').click({force:true})
    // await page.mouse.move(target?.x,target?.y);
    await page.waitForTimeout(2000)
    await page.locator('//div[@id="icp-nav-flyout"]').hover()
    await page.waitForTimeout(2000)
    let eng="English - EN"
    await page.locator(`//div[@id="nav-flyout-icp"]//li[normalize-space(.)="${eng}"]`).click({force:true})
    await page.waitForTimeout(2000)
})
import {test} from '@playwright/test';
test.only('test1', async({page})=>{

    // for(let i:number=0;i<=5;i++){
    await page.goto('https://www.saucedemo.com/')
    // await page.locator('#user-name').fill('standard_user')
    // let store=await page.locator("#user-name").inputValue()
    // console.log(store)
    let a=await page.locator("//div").allInnerTexts()
    console.log(a);
    
    await page.getByPlaceholder('Username').type('secret_sauce')
    await page.locator('//input[@name="login-button"]').click()
    await page.locator('//div[text()="Sauce Labs Backpack"]').click()
    await page.locator('//button[text()="Add to cart"]').click()
    await page.locator('//a[@class="shopping_cart_link"]').click()
    await page.locator('//button[text()="Checkout"]').click()
    await page.locator('//input[@id="first-name"]').fill('Subhadip')
    await page.locator('//input[@id="last-name"]').fill('Bhadra')
    await page.locator('//input[@id="postal-code"]').fill('700061')
    await page.click('//input[@id="continue"]')
    await page.locator('//button[text()="Finish"]').click()
    await page.locator('//button[text()="Back Home"]').click()
    await page.pause()
    // }


})
import {test} from "@playwright/test"
test("Demo App", async({page})=>{

    await page.goto("https://www.saucedemo.com/")

    // await page.locator("//input[@id='email']").fill("admin@gmail.com")
    await page.getByRole("textbox", {name:"Username"}).fill("standard_user")
    await page.getByRole("textbox", {name:"Password"}).fill("secret_sauce")
    await page.getByTestId("login-button").click()
    await page.getByAltText("Sauce Labs Backpack").click()
    await page.getByRole("button", {name:"Add to cart"}).click()
    await page.getByTestId("shopping-cart-link").click()
    await page.getByRole("button", {name:"Checkout"}).click()
    await page.locator("input#first-name").fill("Subhadip")
    await page.locator("input#last-name").fill("Bhadra")
    await page.locator("//input[@id='postal-code']").fill("700061")
    await page.getByRole("button", {name:"Continue"}).click()
    await page.getByRole("button", {name:"Finish"}).click()
    await page.getByRole("button", {name:"Back Home"}).click()

})
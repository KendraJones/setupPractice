import { Builder, By, until, Capabilities, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

import { emPagePO } from "./emPagePO";

const employeePage = new emPagePO(driver);

describe("Testing Employee Manager", () => {
    beforeEach(async () => {
        await employeePage.navigate()
    })
    afterAll(async () => {
        await employeePage.driver.quit()
    })
    test('Creating an employee', async () => {
        await employeePage.click(employeePage.addEmployee)
        await employeePage.click(employeePage.newEmployee)
        await employeePage.setInput(employeePage.nameField, "Fake Name")
        await employeePage.setInput(employeePage.phoneField, "1231231234")
        await employeePage.setInput(employeePage.titleField, "CEO")
        await employeePage.click(employeePage.saveBtn)
    })
    test('Editing an Employee', async () => {
      await employeePage.click(employeePage.editEmployee)
      await employeePage.setInput(employeePage.nameField, "Test Name")
      await employeePage.click(employeePage.saveBtn)
    })
})
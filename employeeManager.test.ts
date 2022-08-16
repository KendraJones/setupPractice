import { emPagePO } from "./emPagePO";
const chromedriver = require("chromedriver");
import { Builder, By, Capabilities, until, WebDriver, WebElement } from "selenium-webdriver";

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const page = new emPagePO(driver, "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html");

test("Create a new employee", async () => {
  await page.navigate();
  await page.doSearch("");
  expect(await page.getResults()).toContain("");
});

test("Edit an employee", async () => {
    await page.navigate();
    await page.doSearch("");
    expect(await page.getResults()).toContain("");
  });

afterAll(async () => {
  await driver.quit();
});
const { Builder, By, Key } = require("selenium-webdriver");
var should = require("chai").should();

// describe
describe("add todo tests", function () {
  //it block
  it("successfully add a todo to application", async function () {
    //launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate t our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn Selenium", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert using chai
    // todoText.should.equal("Learn Chai"); // get error!!! if we change text to "Learn Selenium" is ok
    todoText.should.equal("Learn Selenium"); // get error!!! if we change text to "Learn Selenium" is ok

    //close the browser
    await driver.quit();
  });
});

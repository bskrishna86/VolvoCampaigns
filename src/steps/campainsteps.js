// import { Given, When, Then, And } from '@cucumber/cucumber';
const {Given, When, Then, Before} = require('@cucumber/cucumber');

var LoginPage = require('../../test/pageobjects/login.page');
var MillionMorePage = require('../../test/pageobjects/million-mode-page');
var CookiesPage = require('../../test/pageobjects/cookies-page');

Before(async () =>{
    await browser.reloadSession();
})

Given(/^I am on A million more car safety screen$/, async () =>{
    await LoginPage.navigateToCampainPage();
    await CookiesPage.acceptCookies();
})

Then(/^I will be displayed with correct ScreenTitle (.*) on the browser$/, async (Title) => {
    await MillionMorePage.verifyScreenTitle(Title);
})

When(/^I click the menu button$/, async () => {
    await browser.pause(3000)
    await MillionMorePage.clickMenuButton();
})

Then(/^I will be displayed with menu items$/, async ()=> {
    let menus = await MillionMorePage.getMenus();
    expect(menus).to.be.an('array');
    expect(menus).to.include('Buy');
    expect(menus).to.include('Own');
    expect(menus).to.include('Why Volvo');
    expect(menus).to.include('Explore');
    expect(menus).to.include('More');
})

Then(/^I will be displayed with Volvo's icon image on the screen$/,async()=> {
    await MillionMorePage.captureVolvoIconImage(); 
    await MillionMorePage.valdiateVolvoIconImage();
})

Then(/^I will be displayed with correct first Header (.*) on the screen$/, async (Header) => {
    await MillionMorePage.verifyScreenHeader(Header);
})

When(/^I click on Learn More About Car Safety link$/, async () => {
    await MillionMorePage.clickMoreAboutCarSafety();
})

Then(/^I will be navigated to correct screen to learn more about (.*) on the browser$/, async (Title) => {
    await MillionMorePage.verifyNavigationToCarSafety(Title);
})

Then(/^I will be displayed with correct second Header (.*) on the screen$/, async (secondHeader) => {
    await MillionMorePage.verifyScreenSecondHeader(secondHeader);
})

Then(/^I will be displayed with correct sections (.*) and (.*) on the screen$/, async (section1, section2) => {
    await MillionMorePage.verifySections(section1, section2);
})

When(/^I click on Learn More link of Innovation$/, async () => {
    await MillionMorePage.clickLearnMoreOfInnovation();
})

Then(/^I will be presented with more details screen of (.*) on the browser$/, async (InnovationTitle) => {
    await MillionMorePage.verifyNavigationToInnovation(InnovationTitle);
})
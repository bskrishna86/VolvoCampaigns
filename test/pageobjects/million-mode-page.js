
const Page = require('./page');


class MillionMorePage extends Page {

    get menuButton() { return $('#sitenav-v2-sidenav-toggle')};

    get closeIcon() { return $('//button[@aria-label=\'Close\']')};

    get menuItems() {return $$('//*[@data-autoid=\'nav:sideNavLinksMenuDrawer\']')};

    get volvoImage() {return $('//*[@id="site-nav-topbar-wrapper"]/nav/div[1]/a/img')};

    get screenHeader() {return $('//section[@data-autoid="ModelIntro"]/h2')};

    get linkToCarSafety() {return $('//a[@href="/intl/v/car-safety"]')};

    get screenSecondHeader() {return $('//div[@data-component="TextStatement"]/section/div/div/p')};

    get oneOfaMillionHeader() {return $('//*[@data-component="VideoTestimonials"]/section/div/div/h2')};

    get decadesOfInnovationHeader() {return $('//*[@data-autoid="imageWithText:title"]')};

    get linkToInnovation() {return $('//a[@href="/intl/v/car-safety/safety-heritage"]')};

    async verifyScreenTitle(screenTitle) {
        await wdioExpect(browser).toHaveTitleContaining(screenTitle);
    }

    async clickMenuButton() {
        await (await super.waitForClickable(await this.menuButton)).click();
     }

    async getMenus() {
        await super.waitFor(await this.closeIcon);
         let items = await this.menuItems;
         var texts= await Promise.all(items.map(async (item) => {
                return await item.getText();
         }));
         return texts;
    }

    async captureVolvoIconImage() {
        let imageVolvo = await super.waitForClickable(await this.volvoImage);
        await browser.pause(2000);
        await browser.saveElement(imageVolvo, 'volvoImage', {});
    }
    
    async valdiateVolvoIconImage() {
        expect(await browser.checkElement(await this.volvoImage, 'volvoImage', {})).to.equal(0);
    }

    async verifyScreenHeader(HeaderText) {
        let textScreenHeader = await (await super.waitFor(await this.screenHeader)).getText();
        expect(textScreenHeader).to.include(HeaderText);
    }

    async clickMoreAboutCarSafety() {
        await (await super.waitForClickable(await this.linkToCarSafety)).click();
    }

    async verifyNavigationToCarSafety(carSafetyTitle) {
        await wdioExpect(browser).toHaveTitleContaining(carSafetyTitle);
    }

    async verifyScreenSecondHeader(secondHeaderText) {
        let textScreenHeader = await (await super.waitFor(await this.screenSecondHeader)).getText();
        console.log("this is the test" + textScreenHeader);
        expect(textScreenHeader).to.include(secondHeaderText);
    }

    async verifySections(section1, section2) {
        let textOneOfMillion = await (await super.waitFor(await this.oneOfaMillionHeader)).getText();
        let textDecadesOfInnovation = await (await super.waitFor(await this.decadesOfInnovationHeader)).getText();
        expect(textOneOfMillion).to.include(section1);
        expect(textDecadesOfInnovation).to.include(section2);
    }

    async clickLearnMoreOfInnovation() {
        await (await super.waitForClickable(await this.linkToInnovation)).click();
    }

    async verifyNavigationToInnovation(textInnovationTitle) {
        await wdioExpect(browser).toHaveTitleContaining(textInnovationTitle);
    }


}

module.exports = new MillionMorePage();
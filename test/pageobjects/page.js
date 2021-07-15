/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
  
    async navigateToCampainPage() {
        return browser.url(browser.options.baseUrl+'/intl/v/car-safety/a-million-more')
    }

   async waitFor(element) {
        await element.waitForExist({timeout: 15000});
        return element;
    }

    async waitForClickable(element) {
        await element.waitForClickable({timeout: this.timeout});
        return element;
    }
 }

const Page = require('./page');

class Cookies extends Page {

    get acceptButton() {
        return $('button=Accept');
    }

    async acceptCookies() {
        await (await super.waitFor((await this.acceptButton))).click();
    }
}

module.exports = new Cookies();
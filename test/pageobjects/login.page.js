const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
   
    openCampainPage() {
        return super.navigateToCampainPage();
    }
}

module.exports = new LoginPage();

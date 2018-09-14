"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BasePage_1 = require("../pages/BasePage");
const logger_1 = require("../util/logger");
describe('Home Page', function () {
    //Globally
    var basePage = new BasePage_1.BasePage();
    const EC = protractor_1.protractor.ExpectedConditions;
    beforeEach(function () {
        logger_1.logger.log('info', "Starting executing test");
    });
    afterEach(function () {
        logger_1.logger.log('info', "Ending executing test");
    });
    it('Home Page Launch', function () {
        //Open Browser
        basePage.OpenBrowser('https://www.protractortest.org/');
        logger_1.logger.log('info', "Browser Launch succesfully");
        protractor_1.browser.wait(EC.visibilityOf(basePage.homeLink));
    });
    it('Title verifications of Home Page', function () {
        protractor_1.browser.getTitle().then(function (title) {
            ;
            logger_1.logger.log('info', "The title of Home Page is  : " + title);
            expect(title).toBe("Protractor - end-to-end testing for AngularJS");
            protractor_1.browser.sleep(5000);
        });
    });
    it('Navigate to Tutorial Page', function () {
        basePage.NavigateToTutorialPage();
        logger_1.logger.info("Succesfully navigated to Tutorial Page");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF1bmNoSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9MYXVuY2hIb21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE0RDtBQUM1RCxnREFBNkM7QUFDN0MsMkNBQXdDO0FBRXhDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDckIsVUFBVTtJQUNWLElBQUksUUFBUSxHQUFDLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBQzVCLE1BQU0sRUFBRSxHQUFDLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7SUFDdkMsVUFBVSxDQUFDO1FBQ1YsZUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUM3QyxDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQztRQUNULGVBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLHVCQUF1QixDQUFDLENBQUE7SUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsa0JBQWtCLEVBQUU7UUFDdEIsY0FBYztRQUNkLFFBQVEsQ0FBQyxXQUFXLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUN4RCxlQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2hELG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0NBQWtDLEVBQUU7UUFDcEMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO1lBQUUsQ0FBQztZQUMxQyxlQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQywrQkFBK0IsR0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLCtDQUErQyxDQUFDLENBQUM7WUFDcEUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQywyQkFBMkIsRUFBRTtRQUM5QixRQUFRLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNsQyxlQUFNLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDLENBQUM7QUFHTCxDQUFDLENBQUMsQ0FBQyJ9
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BasePage_1 = require("../pages/BasePage");
describe('Home Page', function () {
    //Globally
    var basePage = new BasePage_1.BasePage();
    const EC = protractor_1.protractor.ExpectedConditions;
    it('Home Page Launch', function () {
        basePage.OpenBrowser('https://www.protractortest.org/');
        let flag = protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.linkText('Home'))));
    });
    it('Title verifications of Home Page', function () {
        protractor_1.browser.getTitle().then(function (title) {
            ;
            console.log("The title of Home Page is  : " + title);
            expect(title).toBe("Protractor - end-to-end testing for AngularJS");
            protractor_1.browser.sleep(5000);
        });
        it('Navigate to Tutorial Page', function () {
            basePage.NavigateToTutorialPage();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF1bmNoSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9MYXVuY2hIb21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE0RDtBQUc1RCxnREFBNkM7QUFDN0MsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUNyQixVQUFVO0lBQ1YsSUFBSSxRQUFRLEdBQUMsSUFBSSxtQkFBUSxFQUFFLENBQUM7SUFDNUIsTUFBTSxFQUFFLEdBQUMsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztJQUV2QyxFQUFFLENBQUMsa0JBQWtCLEVBQUU7UUFDdEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksSUFBSSxHQUFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQyxDQUFDO0lBRUosRUFBRSxDQUFDLGtDQUFrQyxFQUFFO1FBRXRDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUFFLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsR0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLCtDQUErQyxDQUFDLENBQUM7WUFDcEUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFFSixFQUFFLENBQUMsMkJBQTJCLEVBQUU7WUFDL0IsUUFBUSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIn0=
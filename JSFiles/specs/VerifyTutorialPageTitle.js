"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TutorialPage_1 = require("../pages/TutorialPage");
const BasePage_1 = require("../pages/BasePage");
const logger_1 = require("../util/logger");
describe('Tutorial Page', function () {
    //Globally
    var basePage = new BasePage_1.BasePage();
    var tutorialPage = new TutorialPage_1.TutorialPage();
    it('Title verifications of Tutorial Page', function () {
        // basePage.NavigateToTutorialPage();
        tutorialPage.VerifyTutoraialPageTitle().then(function (title) {
            logger_1.logger.info("The title of Tutorial Page is : " + title);
            expect(title).toBe("Protractor - end-to-end testing for AngularJS");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyaWZ5VHV0b3JpYWxQYWdlVGl0bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9WZXJpZnlUdXRvcmlhbFBhZ2VUaXRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdEQUFxRDtBQUNyRCxnREFBNkM7QUFDN0MsMkNBQXdDO0FBRXhDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFDdEIsVUFBVTtJQUNWLElBQUksUUFBUSxHQUFFLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBQzdCLElBQUksWUFBWSxHQUFDLElBQUksMkJBQVksRUFBRSxDQUFDO0lBRXZDLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRTtRQUNyQyxxQ0FBcUM7UUFDcEMsWUFBWSxDQUFDLHdCQUF3QixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUM1RCxlQUFNLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxHQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUMsQ0FBQyxDQUFDO0FBR0osQ0FBQyxDQUFDLENBQUMifQ==
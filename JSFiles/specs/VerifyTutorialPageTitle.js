"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TutorialPage_1 = require("../pages/TutorialPage");
const BasePage_1 = require("../pages/BasePage");
describe('Tutorial Page', function () {
    //Globally
    var basePage = new BasePage_1.BasePage();
    var tutorialPage = new TutorialPage_1.TutorialPage();
    it('Title verifications of Tutorial Page', function () {
        basePage.NavigateToTutorialPage();
        tutorialPage.VerifyTutoraialPageTitle().then(function (title) {
            console.log("The title of Tutorial Page is : " + title);
            expect(title).toBe("Protractor - end-to-end testing for AngularJS");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyaWZ5VHV0b3JpYWxQYWdlVGl0bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9WZXJpZnlUdXRvcmlhbFBhZ2VUaXRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdEQUFxRDtBQUNyRCxnREFBNkM7QUFDN0MsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUN0QixVQUFVO0lBQ1YsSUFBSSxRQUFRLEdBQUUsSUFBSSxtQkFBUSxFQUFFLENBQUM7SUFDN0IsSUFBSSxZQUFZLEdBQUMsSUFBSSwyQkFBWSxFQUFFLENBQUM7SUFJdkMsRUFBRSxDQUFDLHNDQUFzQyxFQUFFO1FBQ3hDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2hDLFlBQVksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUs7WUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsR0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDLENBQUMsQ0FBQztBQUdKLENBQUMsQ0FBQyxDQUFDIn0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class BasePage {
    constructor() {
        //Elements defineds
        this.quickStart = protractor_1.element(protractor_1.by.id('drop1'));
        this.tutorial = protractor_1.element(protractor_1.by.linkText('Tutorial'));
    }
    //Open Browser
    OpenBrowser(url) {
        protractor_1.browser.get(url);
    }
    //Navigate to Tutorials Page
    NavigateToTutorialPage() {
        this.quickStart.click();
        this.tutorial.click();
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9CYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRjtBQUdsRixNQUFhLFFBQVE7SUFBckI7UUFFSSxtQkFBbUI7UUFDYixlQUFVLEdBQWUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbEQsYUFBUSxHQUFlLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBaUJqRSxDQUFDO0lBZEcsY0FBYztJQUNkLFdBQVcsQ0FBQyxHQUFVO1FBQ2xCLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXJCLENBQUM7SUFDRCw0QkFBNEI7SUFDNUIsc0JBQXNCO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBS0o7QUFyQkQsNEJBcUJDIn0=
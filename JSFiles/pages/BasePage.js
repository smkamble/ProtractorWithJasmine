"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const logger_1 = require("../util/logger");
class BasePage {
    constructor() {
        //Elements defined
        this.homeLink = protractor_1.element(protractor_1.by.linkText('Home'));
        this.quickStartDropDown = protractor_1.element(protractor_1.by.id('drop1'));
        this.tutorialLink = protractor_1.element(protractor_1.by.linkText('Tutorial'));
    }
    //Open Browser
    OpenBrowser(url) {
        protractor_1.browser.get(url);
    }
    //Navigate to Tutorials Page
    NavigateToTutorialPage() {
        this.quickStartDropDown.click();
        this.tutorialLink.click();
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9CYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRjtBQUNsRiwyQ0FBc0M7QUFFdEMsTUFBYSxRQUFRO0lBQXJCO1FBRUksa0JBQWtCO1FBQ1AsYUFBUSxHQUFlLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25ELHVCQUFrQixHQUFlLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3pELGlCQUFZLEdBQWUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFhNUUsQ0FBQztJQVZHLGNBQWM7SUFDZCxXQUFXLENBQUMsR0FBVTtRQUNsQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsNEJBQTRCO0lBQzVCLHNCQUFzQjtRQUNsQixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEMsZUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsQ0FBQztDQUNKO0FBbEJELDRCQWtCQyJ9
import { browser, element, by} from 'protractor'
import { TutorialPage } from '../pages/Tutorial.Page';
import { BasePage } from '../pages/Base.Page';
import { logger } from "../util/logger";

describe('Tutorial Page', function() {
    //Globally
    var basePage =new BasePage();
    var tutorialPage=new TutorialPage();
    
	it('Title verifications of Tutorial Page', function() {
       // basePage.NavigateToTutorialPage();
        tutorialPage.VerifyTutoraialPageTitle().then(function (title) {
        logger.info("The title of Tutorial Page is : "+title);
        expect(title).toBe("Protractor - end-to-end testing for AngularJS");
      });
	});

	
});
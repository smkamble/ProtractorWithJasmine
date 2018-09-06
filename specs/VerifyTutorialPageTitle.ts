import { browser, element, by} from 'protractor'
import { TutorialPage } from '../pages/TutorialPage';
import { BasePage } from '../pages/BasePage';
describe('Tutorial Page', function() {
    //Globally
    var basePage =new BasePage();
    var tutorialPage=new TutorialPage();

    
    
	it('Title verifications of Tutorial Page', function() {
    basePage.NavigateToTutorialPage();
      tutorialPage.VerifyTutoraialPageTitle().then(function (title) {
      console.log("The title of Tutorial Page is : "+title);
      expect(title).toBe("Protractor - end-to-end testing for AngularJS");
      });
	});

	
});
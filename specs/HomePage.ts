import { browser, element, by, protractor, ExpectedConditions as EC} from 'protractor';
import { BasePage } from '../pages/Base.Page';
import { logger } from "../util/logger";

describe('Home Page', function() {
	//Globally
	var basePage=new BasePage();
	beforeEach(function() {
		logger.log('info',"Starting executing test");
		//Open Browser
		basePage.OpenBrowser('https://www.protractortest.org/');
		logger.log('info',"Browser Launch succesfully");
		browser.wait(EC.visibilityOf(basePage.homeLink));
	});	

	afterEach(function() {
		logger.log('info',"Ending executing test")
	});
	

	it('Title verifications of Home Page', function() {
	  	browser.getTitle().then(function(title){;
		logger.log('info',"The title of Home Page is  : "+title);
    		expect(title).toBe("Protractor - end-to-end testing for AngularJS");
    		browser.sleep(5000);
		});
	});
	it('Navigate to Tutorial Page', function() {
			basePage.NavigateToTutorialPage();
			logger.info("Succesfully navigated to Tutorial Page");
		});
	  
	
});

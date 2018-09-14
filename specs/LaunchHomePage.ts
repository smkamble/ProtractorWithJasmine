import { browser, element, by, protractor} from 'protractor'
import { BasePage } from '../pages/BasePage';
import { logger } from "../util/logger";

describe('Home Page', function() {
	//Globally
	var basePage=new BasePage();
	const EC=protractor.ExpectedConditions;
	beforeEach(function() {
		logger.log('info',"Starting executing test")
	});	

	afterEach(function() {
		logger.log('info',"Ending executing test")
	});
	

	it('Home Page Launch', function() {
		//Open Browser
		basePage.OpenBrowser('https://www.protractortest.org/');
		logger.log('info',"Browser Launch succesfully");
		browser.wait(EC.visibilityOf(basePage.homeLink));
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
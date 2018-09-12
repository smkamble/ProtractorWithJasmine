import { browser, element, by, protractor} from 'protractor'
import { BasePage } from '../pages/BasePage';

describe('Home Page', function() {
	//Globally
	var basePage=new BasePage();
	const EC=protractor.ExpectedConditions;

	it('Home Page Launch', function() {
		//Open Browser
		basePage.OpenBrowser('https://www.protractortest.org/');
		let flag=browser.wait(EC.visibilityOf(element(by.linkText('Home'))));
		});

	it('Title verifications of Home Page', function() {
	  
		browser.getTitle().then(function(title){;
		console.log("The title of Home Page is  : "+title);
    	expect(title).toBe("Protractor - end-to-end testing for AngularJS");
    	browser.sleep(5000);
		});

	it('Navigate to Tutorial Page', function() {
		basePage.NavigateToTutorialPage();
	});
	  
	});
});
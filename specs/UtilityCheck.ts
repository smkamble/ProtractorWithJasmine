import { browser, element, by, protractor, ExpectedConditions as EC} from 'protractor';
import { logger } from "../util/logger";
import { Select,FileUpload } from "../util/utils";

describe('Verify Utility', function() {
    it("Verify Dropdown utility", function(){
        browser.ignoreSynchronization=true; // For non angular website
        browser.manage().window().maximize();
        browser.get("https://chercher.tech/practice/practice-dropdowns-selenium-webdriver");
        let select:Select = new Select("first"); //Passing id to select class
		//select the value based on the index
        select.selectByIndex(3);
        select.selectByValue("Apple");
        browser.sleep(5000);
        select.selectByVisibleText("Bing");
        browser.sleep(5000);
        select.isMultiple();
    }),

    fit("Verify File Upload utility",function(){
        browser.ignoreSynchronization=true; // For non angular website
        browser.manage().window().maximize();
        browser.navigate().to("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
        let filePath:string="../util/foo.txt";
        let fileupload:FileUpload=new FileUpload(filePath);
        browser.sleep(7000);
    })
});	
import { browser, element, by, protractor, $,$$, ElementFinder} from 'protractor';
import {logger} from '../util/logger';

export class BasePage{
    
    //Elements defined
        public homeLink:ElementFinder=element(by.linkText('Home'));
        private quickStartDropDown:ElementFinder=element(by.id('drop1'));
        private tutorialLink:ElementFinder=element(by.linkText('Tutorial'));
    

    //Open Browser
    OpenBrowser(url:string){
        browser.get(url);
    }
    //Navigate to Tutorials Page
    NavigateToTutorialPage(){
        this.quickStartDropDown.click();
        this.tutorialLink.click();
    }
}
import { browser, element, by, protractor, $,$$, ElementFinder} from 'protractor';


export class BasePage{
    
    //Elements defineds
        quickStart:ElementFinder=element(by.id('drop1'));
        tutorial:ElementFinder=element(by.linkText('Tutorial'));
    

    //Open Browser
    OpenBrowser(url:string){
        browser.get(url);
        
    }
    //Navigate to Tutorials Page
    NavigateToTutorialPage(){
        this.quickStart.click();
        this.tutorial.click();
    }
    
    


}
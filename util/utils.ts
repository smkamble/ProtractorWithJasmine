//select.ts
import {browser, by, ElementFinder,element } from "protractor";
var path = require('path');

export class Select {
    // dropdown
    dropdown:ElementFinder;
    //constructor  accepts dropdown id
    constructor(id:string) {
        this.dropdown = element(by.css("select#"+id+""));
       // click the dropdown
       this.dropdown.click();
       browser.sleep(1000)
    }
    //Finding the inner element based on the an index of an element
    public selectByIndex(index:number){
        index = index + 1;
        console.log("Selecting element based index : "+index)
        // select the option
        this.dropdown.element(by.css("option:nth-child("+index+")")).click();
    }

    //Finding the inner element based on the an attribute value
    public selectByValue(value:string){
        console.log("Selecting element based value  : "+value)
        // select the option
        this.dropdown.element(by.css("option[value='"+value+"']")).click()
    }

    //Finding the inner element based on the text present in the element
    public selectByVisibleText(visibleText:string){
        console.log("Selecting element based text  : "+visibleText)
        // select the option
        this.dropdown.element(by.xpath("//option[text()='"+visibleText+"']")).click()
    }

    //Finding all the element which has option by their tag name
    // public getOptions(){
    //     console.log("Returning all options  : " +this.dropdown.all(by.css("option")))
    //     // return all the options
    //     return this.dropdown.all(by.css("option"))
    // }

    //Check whether single value dropdown or multiple value dropdown
    public  isMultiple(){
        // select the option
        this.dropdown.getAttribute("multiple").then(function(multipleOrNot){
            if(multipleOrNot){
                console.log("Dropdown is multple value");
                return true
            }else{
                console.log("Dropdown is single value");
                return false;
            }
        })
    }
 }

 export class FileUpload{
     constructor(filePath:string){
        var remote = require('../../node_modules/protractor/node_modules/selenium-webdriver/remote');
browser.setFileDetector(new remote.FileDetector());

        var fileToUpload = filePath,
        absolutePath = path.resolve(__dirname, fileToUpload);
  
        // Find the file input element
        var fileElement = element(by.css('input[type="file"]'));

        // Need to unhide flowjs's secret file uploader
        // browser.executeScript(
        //     "arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px'; arguments[0].style.opacity = 1",
        //     fileElement.getWebElement());

        // Sending the keystrokes will ultimately submit the request.  No need to simulate the click
        fileElement.sendKeys(absolutePath);
        browser.sleep(200);
     }

 }
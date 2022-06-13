import { api, LightningElement } from 'lwc';

export default class LwrTest extends LightningElement {
    @api buttonText;

    handleClick(){
        alert("Welcomeeeeeee noowww!!!");
    }
}
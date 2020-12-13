import {App} from "app-shared-codesets";

/**
 * Define our Metric model
 */
export default class Service implements App.IServices{

    readonly name: String;
    readonly icon: String;

    constructor(name: String, icon: String) {
        this.name = name;
        this.icon = icon;
    }
}
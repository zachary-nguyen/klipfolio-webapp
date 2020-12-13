import {App} from "app-shared-codesets";

/**
 * Define our ModelledData model
 */
export default class ModelledData implements App.IModeledData{

    readonly name: String;
    readonly authentication: String;
    readonly query: String;

    constructor(name: String, authentication: String, query: String) {
        this.name = name;
        this.authentication = authentication;
        this.query = query;
    }
}
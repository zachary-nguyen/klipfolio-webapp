import {App} from "app-shared-codesets";

/**
 * Define our Service model
 */
export default class Metric implements App.IMetrics{

    readonly name: String;
    readonly value: String;
    readonly percentageIncrease: String;

    constructor(name: String,value: String, percentageIncrease: String) {
        this.name = name;
        this.value = value;
        this.percentageIncrease = percentageIncrease;
    }
}
import {MongooseDocument} from "mongoose";

declare namespace App {

    interface IMetrics {
        readonly name: String;
        readonly value: String;
        readonly percentageIncrease: String;
    }

    interface IServices {
        readonly name: String;
        readonly icon: String;
    }

    interface IModeledData {
        readonly name: String;
        readonly authentication: String;
        readonly query: String;
    }

    interface IGalleryData {
        metrics: IMetrics[];
        services: IServices[];
        modelledData: IModeledData[];
    }

}
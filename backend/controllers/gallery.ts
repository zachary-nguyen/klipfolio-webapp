import * as express from "express";
import { NextFunction, Request, Response } from "express";
import Controller from "../interfaces/controller.interface";
import * as MockData from "../models/mock-data/mock-data.json";
import Metric from "../models/metric";
import ModelledData from "../models/modelledData";
import Service from "../models/service";
import {App} from "app-shared-codesets";

export default class GalleryController implements Controller {
    public path = "/api/gallery";

    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    /**
     *
     */
    private initializeRoutes() {
        this.router.get(`${this.path}`,this.getAllGalleryData)
        this.router.get(`${this.path}/metrics`, this.getMetrics);
        this.router.get(`${this.path}/services`, this.getServices);
        this.router.get(`${this.path}/modelled-data`, this.getModelledData);
    }

    /**
     * Get all models for the gallery page and return to client.
     * @param request The incoming request
     * @param response The response containing the metric models
     */
    private getAllGalleryData = async (request: Request, response: Response) => {
        try {
            // Prepare our gallery data
            const galleryData: App.IGalleryData = {
                metrics: MockData.metrics.map((metric: any) => {
                    return new Metric(metric.name,metric.value,metric.percentageIncrease)
                }),
                services: MockData.services.map((service: any) => {
                    return new Service(service.name,service.icon)
                }),
                modelledData: MockData["modelled-data"].map((data: any) => {
                    return new ModelledData(data.name,data.authentication,data.query)
                })
            }

            return response.status(200).json(galleryData)
        } catch (error) {
            return response.status(400).json(error);
        }
    };

    /**
     * Get all the metric models and return to client.
     * @param request The incoming request
     * @param response The response containing the metric models
     */
    private getMetrics = async (request: Request, response: Response) => {
        try {
            // Generate our metrics from the mock-data, this is would technically be querying the DB
            // metric type should be metric: App.IMetric but we don't have a real model stored in a DB
            const metrics: App.IMetrics[] = MockData.metrics.map((metric: any) => {
                return new Metric(metric.name,metric.value,metric.percentageIncrease)
            })

            return response.status(200).json(metrics)
        } catch (error) {
            return response.status(400).json(error);
        }
    };

    /**
     * Get all the services models and return to client
     * @param request The incoming request
     * @param response The response containing the service models
     */
    private getServices = async (request: Request, response: Response) => {
        try {
            // Generate our services from the mock-data, this is would technically be querying the DB
            // service type should be metric: App.IService but we don't have a real model stored in a DB
            const services : App.IServices[] = MockData.metrics.map((service: any) => {
                return new Service(service.name,service.icon)
            })

            return response.status(200).json(services)
        } catch (error) {
            return response.status(400).json(error);
        }
    };

    /**
     * Get all the modelled data models and return to client.
     * @param request The incoming request
     * @param response The response containing the modelled data
     */
    private getModelledData = async (request: Request, response: Response) => {
        try {
            // Generate our modelled data from the mock-data, this is would technically be querying the DB
            // data type should be data: App.IModelledData but we don't have a real model stored in a DB
            const modelledData : App.IModeledData[] = MockData.metrics.map((data: any) => {
                return new ModelledData(data.name,data.authentication,data.query)
            })

            return response.status(200).json(modelledData)
        } catch (error) {
            return response.status(400).json(error);
        }
    };


}

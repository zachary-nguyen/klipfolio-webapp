const request = require("supertest");
import app from "../../server"
import {Application} from "express";


describe('Test Gallery End Points', () => {

    let server: Application;

    beforeAll(() => {
        server = app.getExpressInstance();
    })

    afterAll(async done => {
        done();
    });

    it('Test /api/gallery for GalleryData', async done => {
        const res = await request(server).get("/api/gallery");
        const metrics = res.body.metrics;
        const services = res.body.services;
        const data = res.body["modelledData"];

        // Expect success
        expect(res.status).toEqual(200);

        // Test the response body
        expect(metrics.length).toEqual(6);
        expect(services.length).toEqual(11);
        expect(data.length).toEqual(6);

        done();
    })

    it('Test /api/galley/metrics for Metrics', async done => {
        const res = await request(server).get("/api/gallery/metrics");
        const metrics = res.body;

        // Expect success
        expect(res.status).toEqual(200);

        // Test the response body
        expect(metrics.length).toEqual(15);

        done();
    })

    it('Test /api/gallery/services for Services', async done => {
        const res = await request(server).get("/api/gallery/services");
        const services = res.body;

        // Expect success
        expect(res.status).toEqual(200);

        // Test the response body
        expect(services.length).toEqual(18);

        done();
    })

    it('Test /api/gallery/modelled-data for ModelledData', async done => {
        const res = await request(server).get("/api/gallery/modelled-data");
        const data = res.body;

        // Expect success
        expect(res.status).toEqual(200);

        // Test the response body
        expect(data.length).toEqual(12);

        done();
    })
})

import puppeteer from "puppeteer"
const {setup :setupDevServer} = require ("jest-dev-server")
const {teardown: teardownDevServer} = require("jest-dev-server")
let browser: any;
let page: any;
let page2: any;
let page3: any;

beforeAll(async () => {
    jest.setTimeout(30000);

    await setupDevServer({
        command: 'yarn start:dev',
        launchTimeout: 30000,
        port: 3000
    })

    // launch browser
    browser = await puppeteer.launch(
        {
            headless: true,
        }
    )

})

afterAll(async () => {
    await teardownDevServer();
})

describe("end to end test navigation",  () => {

    beforeAll(async () => {
        // creates a new page in the opened browser
        page = await browser.newPage();
        page2 = await browser.newPage();
        page3 = await browser.newPage();

        await page.goto("http://localhost:3000/")
        await page2.goto("http://localhost:3000/")
        await page3.goto("http://localhost:3000/")
    })

    it("navigates to more metrics page",async () => {
        // await page.click("#more-metrics")
    })
    //
    // it("navigates to more service page",async () => {
    //     await page2.click("#more-services")
    // })
    //
    // it("navigates to more modelled data page",async () => {
    //     await page3.click("#more-data")
    // })

    afterAll(async () => {
        await page.close();
        await page2.close();
        await page3.close();

        await browser.close();
    })
})
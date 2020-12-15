import puppeteer from "puppeteer"
const {setup :setupDevServer} = require ("jest-dev-server")
const {teardown: teardownDevServer} = require("jest-dev-server")
let browser: any;

beforeAll(async () => {
    jest.setTimeout(30000);

    await setupDevServer({
        command: 'yarn start',
        launchTimeout: 30000,
        port: 8080
    })

    // launch browser
    browser = await puppeteer.launch(
        {
            headless: true,
        }
    )

})

afterAll(async () => {
    await browser.close();
    await teardownDevServer();
})

/**
 * Running 3 test concurrently, therefore need 3 separate pages
 */
describe("end to end test navigation",  () => {

    let page: any;
    let page2: any;
    let page3: any;

    beforeAll(async () => {
        page = await browser.newPage();
        page2 = await browser.newPage();
        page3 = await browser.newPage();

        await page.goto("http://localhost:8080/")
        await page2.goto("http://localhost:8080/")
        await page3.goto("http://localhost:8080/")
    })

    it("navigates to more metrics page",async () => {
        await page.click("#more-metrics")
        expect(page.url()).toEqual("http://localhost:8080/more-metrics")
    })

    it("navigates to more service page",async () => {
        await page2.click("#more-services")
        expect(page2.url()).toEqual("http://localhost:8080/more-services")
    })

    it("navigates to more modelled data page",async () => {
        await page3.click("#more-data")
        expect(page3.url()).toEqual("http://localhost:8080/more-modelled-data")
    })

    afterAll(async () => {
        await page.close();
        await page2.close();
        await page3.close();
    })
})

describe("Test Search Bar Filtering",  () => {

    let page: any;

    beforeAll(async () => {
        page = await browser.newPage();
        await page.goto("http://localhost:8080/")
    })


    it("filters results out for profit", async() => {
        // Type value in search bar
        await page.focus("#search")
        await page.type("#search", 'profit')

        const popover = await page.$('#popover');

        // Verify values are properly filtered out
        expect(await popover.evaluate(node => {return node.innerText.includes("Profit")})).toBe(true);
        expect(await popover.evaluate(node => {return node.innerText.includes("Net Profit Margin")})).toBe(true);
        expect(await popover.evaluate(node => {return node.innerText.includes("Aerospace")})).toBe(false);

    })

    afterAll(async () => {
        await page.close();
    })
})
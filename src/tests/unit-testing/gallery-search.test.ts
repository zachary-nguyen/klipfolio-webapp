import {filteredValues, Tags} from "../../components/headers/gallery-header/GalleryHeader";


describe("Test search filter logic", () => {

    let tags: Tags[];

    // Prepare data
    beforeAll(() => {
        tags = [
            {
                name: "Metric",
                selected: true
            },
            {
                name: "Service",
                selected: true
            },
            {
                name: "Role",
                selected: true
            },
            {
                name: "Industry",
                selected: true
            },
            {
                name: "Finance",
                selected: true
            },
        ]
    });

    it("returns all assets unfiltered", async () => {
        // Empty search
        const values = filteredValues(tags,"");

        // Expect all assets to be returned
        expect(values.length).toEqual(10)
    })

    it("filters values by profit", () => {
        // Search Profit
        const values = filteredValues(tags,"profit");

        // Expects 4 assests
        expect(values.length).toEqual(4);
    })

    it("returns no assets", () => {
        // Search random value
        const values = filteredValues(tags,"randomvalue");

        // Expects 0 assests
        expect(values.length).toEqual(0);
    })

    it("returns 2 profit assets after finance filtered out", () => {
        // remove finance filter
        tags.forEach((tag: Tags) => {
            if(tag.name === "Finance") {
                tag.selected = false;
            }
        });

        // Search profit with filter on
        const values = filteredValues(tags,"profit");

        // Expects 2 assests
        expect(values.length).toEqual(2);
    })


})
import supertest from "supertest";
import app from "../index";
import resizeImage from "../utilities/resizeImage";

const request = supertest(app);

describe("Test main endpoint /api responses", () => {
  it("gets the /api endpoint", async () => {
    const response = await request.get('/api/imageFactory');
    expect(response.status).toBe(200);
  });
});

describe("Tests for imageProcess function", () => {
  it('expects imageProcess("fjord", 200, 200) to be resolved', async () => {
    await expectAsync(resizeImage("fjord", 200, 200)).toBeResolved();
  });
});

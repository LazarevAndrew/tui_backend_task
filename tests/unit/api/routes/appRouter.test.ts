import request from "supertest";

import App from "../../../../src/app";

describe("[/github-user-activity/:username]", () => {
  it("should retrun user repositories", async () => {
    const response = await request(App).get("/github-user-activity/userName");
    expect(response.statusCode).toEqual(200);
  });
});

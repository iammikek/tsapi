import request from "supertest";

import app from "../source/app";

describe("Test app.ts", () => {
    test("Catch-all route", async () => {
        const res = await request(app).get("/");
        expect(res.body).toEqual({message: "Allo! Catch-all route."});
    });

    test("Not found route", async () => {
        const res = await request(app).get("/ssss");
        expect(res.body).toEqual({message: "Allo! Catch-all route."});
    });
});

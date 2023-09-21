import request from "supertest";

import app from "../../source/app";

describe("Test app.ts", () => {
    test("get /posts route", async () => {
        const res = await request(app).get("/posts");
        expect(res.body).toHaveProperty('message');
    });

    test("get /post/1 route", async () => {
        const res = await request(app).get("/posts/1");
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toHaveProperty('userId');
    });

    test("post /post/ route", async () => {
        const payload = {
            title: "New post",
            body: "New post body"
        };
        const res = await request(app).post("/posts").send(payload);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toHaveProperty('title');
        expect(res.body.message).toHaveProperty('body');
        expect(res.body.message).toHaveProperty('id');
    });

    test("put /post/1 route", async () => {
        const payload = {
            title: "New post",
            body: "New post body"
        };
        const res = await request(app).put("/posts/1").send(payload);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toHaveProperty('title');
        expect(res.body.message).toHaveProperty('body');
        expect(res.body.message).toHaveProperty('id');
        expect(res.body.message.title).toEqual(payload.title);
        expect(res.body.message.body).toEqual(payload.body);
    });

    test("delete /post/1 route", async () => {

        const res = await request(app).delete("/posts/1");
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toEqual('post deleted successfully');
    });
});
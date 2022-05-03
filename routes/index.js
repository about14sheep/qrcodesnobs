import { Router } from "https://deno.land/x/oak/mod.ts";
import { qrcode } from "https://deno.land/x/qrcode/mod.ts";

export const router = new Router();
router.get("/", (ctx) => {
    ctx.response.body = "qrcode generator with no bs";
});
router.post("/", async (ctx) => {
    const body = ctx.request.body();
    const val = await body.value;
    const url = val?.url;
    const code = await qrcode(url);
    ctx.response.body = code;
});

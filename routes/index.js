import { Router } from "https://deno.land/x/oak/mod.ts";
import { qrcode } from "https://deno.land/x/qrcode/mod.ts";

export const router = new Router();
router.get("/", async (ctx) => {
    await ctx.send({
        root: `${Deno.cwd()}/static`,
        index: 'index.html'
    });
});
router.post("/", async (ctx) => {
    const body = ctx.request.body();
    const val = await body.value;
    const code = await qrcode(val);
    ctx.response.body = {code};
});

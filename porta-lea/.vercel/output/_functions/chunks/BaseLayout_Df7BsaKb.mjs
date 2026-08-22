import { t as createComponent } from "./compiler_cY-ecCHr.mjs";
import { S as createAstro, c as renderSlot, d as renderTemplate, h as createRenderInstruction, i as renderComponent, p as renderHead } from "./server_DP3Hs9E9.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region node_modules/@vercel/analytics/dist/astro/index.astro
createAstro("https://astro.build");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const propsStr = JSON.stringify(Astro.props);
	const paramsStr = JSON.stringify(Astro.params);
	return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", {
		"data-props": propsStr,
		"data-params": paramsStr,
		"data-pathname": Astro.url.pathname
	})}${renderScript($$result, "C:/Users/lea/Documents/GitHub/astro-portfolio-blog/porta-lea/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/lea/Documents/GitHub/astro-portfolio-blog/porta-lea/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);
//#endregion
//#region src/layouts/BaseLayout.astro
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="es" class="scroll-smooth"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Lensodev.</title><link rel="icon" type="image/svg+xml" href="images/logo.webp">${renderHead($$result)}</head><body class="overflow-x-hidden w-full bg-[#1e1e1e]">${renderComponent($$result, "Analytics", $$Index, {})}<main class="relative z-0">${renderSlot($$result, $$slots["default"])}</main></body></html>`;
}, "C:/Users/lea/Documents/GitHub/astro-portfolio-blog/porta-lea/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { renderScript as n, $$BaseLayout as t };

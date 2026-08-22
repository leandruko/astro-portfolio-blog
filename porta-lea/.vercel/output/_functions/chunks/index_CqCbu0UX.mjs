import { n as __exportAll, t as createComponent } from "./compiler_cY-ecCHr.mjs";
import { a as Fragment, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_DP3Hs9E9.mjs";
import { n as renderScript, t as $$BaseLayout } from "./BaseLayout_Df7BsaKb.mjs";
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const footerData = { year: (/* @__PURE__ */ new Date()).getFullYear() };
	return renderTemplate`${maybeRenderHead($$result)}<footer class="text-frog-green py-12 mt-30 bg-paper mx-auto text-center" id="footer"><div class="container mx-auto"></div><p class="text-sm font-mono">Developed by lea 2024 - ${footerData.year}<span class="text-frog-green"> ;)</span></p></footer>`;
}, "C:/Users/lea/Documents/GitHub/astro-portfolio-blog/porta-lea/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative w-full min-h-dvh bg-paper text-ink p-2 md:p-4 flex flex-col overflow-hidden" data-astro-cid-ge2uvauf><div class="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.15%22/%3E%3C/svg%3E');" data-astro-cid-ge2uvauf></div><main class="flex-1 border-4 border-ink relative z-10 flex flex-col md:grid md:grid-cols-12 md:grid-rows-[2fr_1fr]" data-astro-cid-ge2uvauf><div class="col-span-8 row-span-1 bg-paper p-6 md:p-12 border-b-4 md:border-r-4 border-ink flex items-end relative overflow-hidden " data-astro-cid-ge2uvauf><span class="absolute -top-10 -left-10 text-[8rem] md:text-[12rem] text-ink opacity-[0.03] font-serif select-none pointer-events-none leading-none" data-astro-cid-ge2uvauf>改善</span><h1 class="relative z-10 text-5xl font-serif font-black leading-[0.9] uppercase tracking-tighter" data-astro-cid-ge2uvauf><span class="block md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-ink to-zinc-700" data-astro-cid-ge2uvauf>Desarrollo</span><span class="block md:text-8xl text-frog-green px-2 -ml-2 my-2 italic bg-ink/5 w-fit transform -skew-x-6 will-change-transform" data-astro-cid-ge2uvauf>Web & Datos</span><span class="block  scramble-text text-xl md:text-3xl font-mono mt-4 tracking-normal text-ink/70" data-value="LEANDRO SOTO Miranda" data-astro-cid-ge2uvauf>Leandro Soto Miranda</span></h1></div><div class="col-span-4 row-span-2 bg-frog-green border-b-4 md:border-b-0 border-ink relative flex items-center justify-center overflow-hidden p-4" data-astro-cid-ge2uvauf><div class="absolute inset-0 opacity-20" data-astro-cid-ge2uvauf></div><div class="absolute w-64 h-64 md:w-96 md:h-96 bg-paper rounded-full mix-blend-soft-light opacity-30 blur-3xl" data-astro-cid-ge2uvauf></div><img src="/images/ranita.webp" alt="Mascota Digital - Ranita" width="400" height="400" fetchpriority="high" loading="eager" class="relative z-10 w-full max-w-[280px] md:max-w-sm h-auto object-contain grayscale contrast-125 mix-blend-multiply hover:mix-blend-normal hover:grayscale-0 transition-all duration-300 ease-out" data-astro-cid-ge2uvauf><div class="absolute top-4 right-4 border-2 border-ink p-2 bg-paper text-ink font-mono text-xs writing-vertical-rl uppercase tracking-widest shadow-[4px_4px_0px_#18181B]" data-astro-cid-ge2uvauf>こんにちは</div></div><div class="col-span-5 row-span-1 bg-paper p-8 md:border-r-4 border-ink flex flex-col justify-center" data-astro-cid-ge2uvauf><p class="font-mono text-lg md:text-xl mb-8 border-l-4 border-frog-green pl-4 text-ink/80" data-astro-cid-ge2uvauf>/// Aplicado a soluciones de código. Especializado en el stack de Astro y análisis de datos.</p><div class="flex flex-wrap gap-4 font-mono font-bold" data-astro-cid-ge2uvauf><a href="#proyectos" class="px-6 py-3 bg-ink text-paper border-2 border-ink hover:bg-stamp-red hover:border-stamp-red transition-colors duration-200" data-astro-cid-ge2uvauf>VER PROYECTOS_</a><a href="#contact" class="px-6 py-3 border-2 border-ink hover:bg-frog-green hover:text-paper transition-colors duration-200" data-astro-cid-ge2uvauf>CONTACTO //</a></div></div><div class="col-span-3 row-span-1 bg-paper p-4 border-t-4 md:border-t-0 border-ink flex items-center justify-between relative overflow-hidden group " data-astro-cid-ge2uvauf><div class="absolute inset-0 bg-frog-green" data-astro-cid-ge2uvauf></div><div class="relative flex flex-col font-mono group-hover:text-paper transition-colors z-10" data-astro-cid-ge2uvauf><span class="uppercase text-xs md:text-sm opacity-60" data-astro-cid-ge2uvauf>Ubicación</span><span class="text-lg md:text-xl font-bold" data-astro-cid-ge2uvauf>Concepción, CL</span></div><div class="relative w-12 h-12 md:w-16 md:h-16 border-2 border-stamp-red rounded-sm flex items-center justify-center text-stamp-red font-serif font-bold rotate-12 group-hover:border-paper group-hover:text-paper transition-all z-10 bg-paper group-hover:bg-transparent" data-astro-cid-ge2uvauf><span class="writing-vertical-rl text-xs md:text-sm leading-none" data-astro-cid-ge2uvauf>合格</span></div></div></main></section>`;
}, "C:/Users/lea/Documents/GitHub/astro-portfolio-blog/porta-lea/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/Projects.astro
var $$Projects = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="proyectos" class="w-full bg-paper text-ink py-20 px-4 md:px-8 border-b-4 border-ink relative"><div class="max-w-7xl mx-auto mb-16 border-b-4 border-ink pb-4"><h2 class="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter">SELECCIÓN DE <br><span class="text-frog-green">TRABAJOS</span></h2></div><div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0"><div class="md:pr-8 md:border-r-4 border-ink"><div class="flex items-center gap-4 mb-8"><h3 class="font-mono text-2xl font-bold bg-ink text-paper px-2 inline-block">DESARROLLO_WEB</h3></div><div class="space-y-12">${[
		{
			title: "Brosbusters",
			desc: "Landing page para Brosbusters podcast.",
			tags: [
				"Astro",
				"Tailwind",
				"JS"
			],
			img: "/images/brosbusters.png",
			link: "https://www.brosbusters.cl/"
		},
		{
			title: "Modo Piola Hub",
			desc: "Landing page con el fin de mostrar redes sociales.",
			tags: [
				"Astro",
				"Tailwind",
				"JS"
			],
			img: "/images/modopiola.png",
			link: "https://www.modopiola.cl/"
		},
		{
			title: "Cimasur",
			desc: "Sistema creado con el fin de registrar informacion de logística.",
			tags: [
				"DJANGO",
				"JS",
				"PYTHON",
				"POSTGRES"
			],
			img: "/images/cimasur.png"
		}
	].map((project) => renderTemplate`<article class="group relative"><div class="border-4 border-ink bg-paper relative z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 flex flex-col h-full"><div class="w-full h-48 overflow-hidden border-b-4 border-ink relative bg-ink/10"><div class="absolute inset-0 bg-frog-green mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity z-10 pointer-events-none"></div><img${addAttribute(project.img, "src")}${addAttribute(`Captura de pantalla del proyecto ${project.title}`, "alt")} width="600" height="400" loading="lazy" decoding="async" class="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"></div><div class="p-6 flex flex-col flex-1"><h4 class="font-serif text-2xl font-bold mb-2 leading-none">${project.title}</h4><p class="font-mono text-sm text-ink/70 mb-4 line-clamp-3">${project.desc}</p><div class="flex flex-wrap gap-2 mb-6 mt-auto">${project.tags.map((tag) => renderTemplate`<span class="text-xs font-mono border border-ink px-1 rounded-sm uppercase bg-paper">${tag}</span>`)}</div>${project.link && renderTemplate`<a${addAttribute(project.link, "href")} target="_blank" rel="noopener noreferrer" class="w-fit inline-block text-sm font-bold border-b-2 border-stamp-red text-stamp-red hover:bg-stamp-red hover:text-paper transition-colors">VER PROYECTO -></a>`}</div></div><div class="absolute top-0 left-0 w-full h-full bg-ink z-0 translate-x-0 translate-y-0"></div></article>`)}</div></div><div class="md:pl-8 pt-12 md:pt-0 border-t-4 md:border-t-0 border-ink"><div class="flex items-center gap-4 mb-8"><h3 class="font-mono text-2xl font-bold bg-frog-green text-paper px-2 inline-block">DATA_SCIENCE</h3></div><div class="space-y-6">${[
		{
			title: "Análisis de sismos Chile",
			desc: "Modelo de ML para predecir stock necesario basado en históricos.",
			technologies: [
				"Python",
				"Pandas",
				"Seaborn",
				"Matplotlib",
				"Scikit-learn"
			],
			link: "https://github.com/leandruko/sismos-Chile"
		},
		{
			title: "Morosidad Financiera",
			desc: "Análisis de datos para predecir si alguien será deudor.",
			technologies: [
				"Python",
				"Pandas",
				"Seaborn",
				"Matplotlib",
				"Scikit-learn",
				"Jupyter"
			],
			link: "https://github.com/leandruko/Morosidad-Sistema-Financiero"
		},
		{
			title: "Cáncer de pulmón",
			desc: "Modelo predictivo para detección de cáncer de pulmón.",
			technologies: [
				"Python",
				"Pandas",
				"Seaborn",
				"Matplotlib",
				"Scikit-learn"
			],
			link: "https://github.com/leandruko/lung-cancer"
		}
	].map((project) => renderTemplate`<article class="relative block group"><div class="border-2 border-ink p-6 transition-colors hover:bg-white relative overflow-hidden" style="background-image: linear-gradient(#18181b10 1px, transparent 1px), linear-gradient(to right, #18181b10 1px, transparent 1px); background-size: 20px 20px; background-color: #F4F1EA;"><div class="flex justify-between items-start mb-4 border-b-2 border-ink/20 pb-2 relative z-10"><h4 class="font-serif text-xl font-bold leading-tight max-w-[85%]">${project.title}</h4><span class="text-2xl text-frog-green">★</span></div><p class="font-mono text-sm mb-4 relative z-10 text-ink/80">${project.desc}</p><div class="bg-ink/5 p-3 border-l-4 border-frog-green mb-4 relative z-10"><div class="flex flex-wrap gap-2">${project.technologies.map((tag) => renderTemplate`<span class="text-[10px] md:text-xs font-mono border border-ink/50 px-1 rounded-sm uppercase bg-paper/50">${tag}</span>`)}</div></div><a${addAttribute(project.link, "href")} target="_blank" rel="noopener noreferrer" class="text-xs font-mono uppercase tracking-widest hover:underline group-hover:text-frog-green relative z-10 font-bold">[Explorar Notebook]</a></div></article>`)}<div class="mt-12 p-4 border border-dashed border-ink opacity-50 font-mono text-xs text-center hidden md:block">// ANALYTICS STATUS: READY <br>[||||||||||||||||||||] 100%</div></div></div></div></section>`;
}, "C:/Users/lea/Documents/GitHub/astro-portfolio-blog/porta-lea/src/components/Projects.astro", void 0);
//#endregion
//#region src/components/Contact.astro
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	const email = "leasotompriv@gmail.com";
	return renderTemplate`${maybeRenderHead($$result)}<section id="contact" class="w-full bg-paper text-ink border-b-4 border-ink py-20 px-4 relative overflow-hidden"><div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div><div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"><div class="space-y-8 relative z-10"><div class="inline-block bg-ink text-paper px-3 py-1 font-mono text-xs uppercase tracking-widest mb-4 rotate-[-2deg]">/// Comunicate conmigo</div><h2 class="text-5xl md:text-7xl font-serif font-black uppercase leading-[0.9]">ESTAMOS EN <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-frog-green to-ink">CONTACTO</span></h2><p class="font-mono text-lg border-l-4 border-frog-green pl-4 text-ink/80 max-w-md">Si quieres hablar de código, datos o proyectos, copia mi dirección y escríbeme.</p><div class="flex flex-col gap-4 max-w-md"><a href="https://github.com/leandruko" target="_blank" class="group flex items-center justify-between border-2 border-ink bg-white p-4 hover:bg-ink hover:text-paper transition-all shadow-[4px_4px_0px_#18181B] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"><div class="flex items-center gap-4"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg><span class="font-mono font-bold">/GITHUB</span></div><span class="text-xs font-mono opacity-50">CODE_REPO</span></a><a href="https://linkedin.com/in/leasotomdev" target="_blank" class="group flex items-center justify-between border-2 border-ink bg-white p-4 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all shadow-[4px_4px_0px_#18181B] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"><div class="flex items-center gap-4"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg><span class="font-mono font-bold">/LINKEDIN</span></div><span class="text-xs font-mono opacity-50">PRO_NET</span></a></div></div><div class="relative w-full flex justify-center md:justify-end group"><div class="absolute inset-0 bg-ink transform rotate-3 rounded-sm border-2 border-ink md:w-full md:h-full z-0"></div><div class="relative z-10 w-full bg-paper border-4 border-ink p-8 flex flex-col items-center text-center gap-6 shadow-xl transition-transform duration-300 group-hover:-translate-y-1"><div class="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#C84C34,#C84C34_10px,#F4F1EA_10px,#F4F1EA_20px,#18181B_20px,#18181B_30px,#F4F1EA_30px,#F4F1EA_40px)]"></div><div class="absolute bottom-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#18181B,#18181B_10px,#F4F1EA_10px,#F4F1EA_20px,#C84C34_20px,#C84C34_30px,#F4F1EA_30px,#F4F1EA_40px)]"></div><div class="w-16 h-16 rounded-full border-2 border-ink flex items-center justify-center bg-frog-green text-paper mb-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="square" stroke-linejoin="miter" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5"></path></svg></div><div class="space-y-2 w-full"><h3 class="font-mono text-sm uppercase text-ink/60 tracking-widest">Correo Electrónico</h3><p id="email-text" class="font-serif text-xl md:text-3xl font-bold text-ink break-all select-all">${email}</p></div><button id="copy-btn"${addAttribute(email, "data-email")} class="w-full md:w-auto px-8 py-4 bg-stamp-red text-paper font-mono font-bold border-2 border-ink hover:bg-paper hover:text-stamp-red hover:border-stamp-red transition-all uppercase shadow-[4px_4px_0px_#18181B] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] cursor-pointer">COPIAR EMAIL :)</button></div></div></div></section>${renderScript($$result, "C:/Users/lea/Documents/GitHub/astro-portfolio-blog/porta-lea/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/lea/Documents/GitHub/astro-portfolio-blog/porta-lea/src/components/Contact.astro", void 0);
//#endregion
//#region src/components/Navbar.astro
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	const navItems = [{
		name: "PROYECTOS",
		href: "#proyectos"
	}, {
		name: "CONTACTO",
		href: "#contact"
	}];
	return renderTemplate`${maybeRenderHead($$result)}<header class="sticky top-0 z-50 w-full bg-paper"><div class="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between"><a href="/" class="group flex items-center gap-2 text-ink no-underline"><span class="font-serif font-bold text-xl tracking-tighter group-hover:tracking-normal transition-all duration-300">lensodev<span class="text-frog-green">.</span></span></a><nav class="hidden md:flex gap-8">${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="relative font-mono font-bold text-sm uppercase tracking-widest text-ink hover:text-frog-green transition-colors py-2"><span class="relative z-10">[${item.name}]</span><span class="absolute bottom-0 left-0 w-full h-0 bg-ink/10 transition-all duration-300 -z-0 hover:h-full"></span></a>`)}</nav><button id="menu-btn" class="md:hidden p-2 border-2 border-ink hover:bg-ink hover:text-paper transition-colors"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="square" stroke-linejoin="miter" d="M3.75 9h16.5m-16.5 6.75h16.5"></path></svg></button></div><div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-paper border-b-4 border-ink p-4 flex-col gap-4 shadow-xl">${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block font-mono text-xl border-l-4 border-transparent hover:border-frog-green pl-4 hover:bg-ink/5 py-2">${item.name}</a>`)}</div></header>${renderScript($$result, "C:/Users/lea/Documents/GitHub/astro-portfolio-blog/porta-lea/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/lea/Documents/GitHub/astro-portfolio-blog/porta-lea/src/components/Navbar.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, {
		"default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})}${renderComponent($$result, "Hero", $$Hero, {})}${maybeRenderHead($$result)}<main class="min-h-screen bg-fixed bg-cover overflow-x-hidden">${renderComponent($$result, "Projects", $$Projects, {})}<!-- <Exp /> -->${renderComponent($$result, "Contact", $$Contact, {})}${renderComponent($$result, "Footer", $$Footer, {})}</main>`,
		"head": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result) => renderTemplate`<meta name="description" content="Leandro Soto Miranda - Desarrollador &amp; Analista/Ingeniero de datos"><link rel="icon" href="/images/favicon.ico" type="image/x-icon"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><link rel="stylesheet" href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">` })}`
	})}`;
}, "C:/Users/lea/Documents/GitHub/astro-portfolio-blog/porta-lea/src/pages/index.astro", void 0);
var $$file = "C:/Users/lea/Documents/GitHub/astro-portfolio-blog/porta-lea/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };

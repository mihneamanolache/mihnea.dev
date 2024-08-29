import { readdir } from "node:fs/promises";

const URL = "https://www.mihnea.dev/";

const files = await readdir(import.meta.dir + "/src/app");
const dirs = files.filter(f => !f.includes('.'));

const res = dirs.map(dir => ({
    url: `${URL}${dir}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
}));

Bun.write("./src/constants//sitemap-pages.tsx", `export default ${JSON.stringify(res, null, 2)}`);

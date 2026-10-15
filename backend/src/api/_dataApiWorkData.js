import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require('../../data/data.json');

export const dataApiWorkData = (app) => {
    app.get('/api/sonya', (rec, res) => {
        return res.json("привет соня")
    })
}
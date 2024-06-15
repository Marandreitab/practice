import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

import router from './src/routes/index.js';
app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

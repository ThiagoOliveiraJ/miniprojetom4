import express from "express"
import cors from "cors";
import { tipsRouter } from "./routes/social_wellness.routes.js"

const app = express();
const port = 3000;

const corsOptions = {
    origin: ['https://mente-saudavel.vercel.app', 'https://mente-saudavel.euthiago.com'],
    methods: ["GET"],
  };
  
app.use(cors(corsOptions));


app.use(express.json());

app.use(tipsRouter);

app.listen(port, () => {
    console.log(`API de Bem-Estar Social e Mental rodando em http://localhost:${port}`);
});






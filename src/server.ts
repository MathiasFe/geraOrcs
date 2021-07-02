import express from "express";
import Routes from './routes/disparaEmail';
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);
//procuro uma variavel de ambiente chamada port se não tiver uso a 3333
app.listen(process.env.PORT || 3333);

export default app;
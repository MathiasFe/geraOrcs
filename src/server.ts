import express from "express";
import Routes from './routes/disparaEmail';
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);
app.listen(3333,()=>{console.log('Server started....')});

export default app;
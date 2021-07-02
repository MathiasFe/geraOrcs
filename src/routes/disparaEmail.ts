
import express from "express";
import { RequestBody} from "../Interfaces/requestInterface";
const Email = require('../models/configEmail');
const HtmlEmailTemplate = require('../Templates/OrcEmails');


const router = express.Router();

router.post("/dispatchEmail", async (request, response) => {
  const data: RequestBody = request.body;
  let novoEmail = new Email("smtp.gmail.com", "Gmail", 465, true, "geraorcs@gmail.com", "6gIuuZBJ2dZg", false);
  await novoEmail.sendEmail("felipeferreira@primecase.com.br", data.EmailPara, data.titulo, HtmlEmailTemplate(data), data.titulo);
  return response.json("OK")
});

export default router;
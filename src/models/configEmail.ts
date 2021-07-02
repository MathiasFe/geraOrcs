const nodemailer = require('nodemailer');

class Email{
  ConfigHost: {
    host: string,
    service: string,
    port: number,
    secure: boolean,
    auth: {
      user: string,
      pass: string,
    },
    tls: {
      rejectUnauthorized: boolean,
    }
  };

  transport: any;
  
  constructor(host: string, service: string, port: number, secure: boolean, user: string, pass: string, rejectUnauthorized:boolean) {
    this.ConfigHost = {
      host,
      service,
      port,
      secure,
      auth: {
        user,
        pass
      },
      tls: {
        rejectUnauthorized
      }
    };
  }


  sendEmail(from:string,to:string,text:string,html:string,subject:string) {
    this.transport = nodemailer.createTransport(this.ConfigHost);
    this.transport.sendMail({
      from,
      to,
      text,
      html,
      subject,
    }, (error: any) => {
      if (error)
        return error;
      else
        return "Email enviado com sucesso";
     })
  }

}

module.exports = Email;
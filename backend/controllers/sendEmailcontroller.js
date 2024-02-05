const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

exports.sendEmailtotpo = async (req, res) => {
  try {
    const { email,subject,content } = req.body;
    console.log(email,subject,content);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "guptasrishti846@gmail.com",
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOption1 = {
      from: "guptasrishti846@gmail.com",
      to: "guptasrishti846@gmail.com",
      subject: `${subject}`,
      html: `<div
          style="
             max-width:700px;
             margin-bottom:1rem;
             display:flex;
             align-items:center;
             gap:10px;
             font-family:Roboto;
             font-weight:600;
             color:#3b5998">
             <span>User with the email id ${email} has send an mail</span>
              </div>
              <div  style=
                "padding:1rem 0;
                border-top:1px solid #e5e5e5;
                border-bottom:1px solid #e5e5e5;
                color:#141823;
                font-size:17px;
                font-family:Roboto">
                <span>${content}</span>
              </div>`,
    };

    const mailOption2 = {
      from: "guptasrishti846@gmail.com",
      to: `${email}`,
      html: `<div
        style="
           max-width:700px;
           margin-bottom:1rem;
           display:flex;
           align-items:center;
           gap:10px;
           font-family:Roboto;
           font-weight:600;
           color:#3b5998">
           <span>TPO BIET , Received your query</span>
            </div>
            <div  style=
              "padding:1rem 0;
              border-top:1px solid #e5e5e5;
              border-bottom:1px solid #e5e5e5;
              color:#141823;
              font-size:17px;
              font-family:Roboto">
              <span>Your query has successfully been received, Our team will review your complaint and will take action accordingly as soon as possible.
              <br/>
             </span>
            </div>`,
    };

    const mailOption3 ={
        from:"guptasrishti846@gmail.com",
        to:"codebybit50@gmail.com",
        html:`<div
        style="
           max-width:700px;
           margin-bottom:1rem;
           display:flex;
           align-items:center;
           gap:10px;
           font-family:Roboto;
           font-weight:600;
           color:#3b5998">
           <span>Query regarding ${subject}</span>
            </div>
            <div  style=
              "padding:1rem 0;
              border-top:1px solid #e5e5e5;
              border-bottom:1px solid #e5e5e5;
              color:#141823;
              font-size:17px;
              font-family:Roboto">
              <span>Someone has raised a query regarding ${subject}
              <br/>
              From User Email: ${email} <br/>
              Problem: ${content}
             </span>
            </div>`,
    };

    transporter.sendMail(mailOption1, (error, info) => {
      if (error) {
        console.log(error);
      }
      else{
        console.log("Sucessful 1");
      }
    });

    transporter.sendMail(mailOption2, (error, info) => {
      if (error) {
        console.log(error);
      }
      else{
        console.log("Sucessful 2");
      }
    });

    transporter.sendMail(mailOption3, (error, info) => {
        if (error) {
          console.log(error);
        }
        else{
          console.log("Sucessfull 3");
        }
      });

     return res.status(200).send({
        success:true,
        message:"Successful"
     });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Try again can't send mail",
      error,
    });
  }
};

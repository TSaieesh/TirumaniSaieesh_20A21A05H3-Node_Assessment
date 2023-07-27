var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'sait.9514@gmail.com',
        pass : 'okctshiyysffxhyl',
    }
});

var mailOptions={
    from : 'sait.9514@gmail.com',
    to : 'pravin.consensus@gmail.com',
    subject : '20A21A05H3',
    text : '20A21A05H3 SENDING A MAIL - TASK3'
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.error(error);
    }else{
        console.log(`Email sent to ${mailOptions.to}`+info.response);
    }
})
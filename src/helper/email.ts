import * as nodemailer from 'nodemailer';

async function main() {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        // host: 'smtp.qq.com',
        // https://nodemailer.com/smtp/well-known/
        service: 'qq',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'lfqdalian@qq.com', // generated ethereal user
            pass: 'prlxgxlwcfmnihdd', // POP3/SMTP服务授权
        },
    });

    // send mail with defined transport object
    const mailOptions = {
        from: '"afacode" <lfqdalian@qq.com>',
        to: 'lfqdalian@sina.com, lfqdalian@outlook.com',
        subject: 'Hello nodemailer',
        // text: 'Hello world?',
        html: '<b>Hello world? nodemailer</b>', // html body
    };
    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);

}

main().catch(console.error);

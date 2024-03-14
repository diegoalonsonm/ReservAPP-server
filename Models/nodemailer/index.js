import nodemailer from 'nodemailer';

const generateEmailBody = ({object}) => {
    return `
        <div>
            <h1>Thanks for using ReservApp, ${object.name}</h1>
            <p>Your reservation has been made successfully</p>
            <p>Here are the details:</p>
            <p><strong>Venue:</strong> ${object.selectedVenue}</p>
            <p><strong>Initial Date:</strong> ${object.initialDate}</p>
            <p><strong>Final Date:</strong> ${object.finalDate}</p>
            <p><strong>Amount of people:</strong> ${object.amountPeople}</p>
            <p>We hope you have a great time!</p>
        </div>
    `
}

const transporter = nodemailer.createTransport({
    pool: true,
    service: 'hotmail',
    port: 2525,
    auth: {
        user: 'reservapp225@outlook.com',
        pass: 'Danm0309'
    },
    maxConnections: 5,
})

export const sendEmail = async ({object}) => {
    const mailOptions = {
        from: 'reservapp225@outlook.com',
        to: object.email,
        subject: 'Reservation made successfully',
        html: generateEmailBody({object})
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })
}
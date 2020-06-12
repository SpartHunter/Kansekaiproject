import * as types from '../constants/contact.constant';

export const contact = (info) => {
    window.Email.send({
        Host : "smtp.elasticemail.com",
        Username : "admin@kansekai.fr",
        Password : "CE481B516BA720465441EB5E94F8FACF9947",
        To : info.emailadress,
        From : "prince@memorec.fr",
        Subject : "Notification: robot response",
        Body : "This is an automatic email in response to your sending of message to the administrative service of KANSAKAI.\n" +
            "Your email will be processed and if need be we will get back to you \n" +
            "Best regard, \n\n\n\n\n your Precedent message to administration:\n\n" + info.message
    }).then(
        message => console.log("send message success !" + message)
    );
    return {
        type: types.CONTACT,
        payload: info
    }
}
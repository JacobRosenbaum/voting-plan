import axios from "axios";

export default {
    emailMail: (userData) => {
        console.log("came over from email Mail", userData)
        return axios.post("api/email_mail/", userData);
    },
    mailFriend1: (userData) => {
        console.log("first friend mail", userData)
        return axios.post("api/mail_friend1/", userData);
    },
    mailFriend2: (userData) => {
        console.log("second friend mail", userData)
        return axios.post("api/mail_friend2/", userData);
    },
    mailFriend3: (userData) => {
        console.log("third friend mail", userData)
        return axios.post("api/mail_friend3/", userData);
    },
    emailEarly: (userData) => {
        console.log("came over from email early", userData)
        return axios.post("api/email_early/", userData);
    },
    emailElection: (userData) => {
        console.log("came over from email election")
        return axios.post("api/email_election/", userData);
    },
    saveMailUser: function (userData) {
        console.log("saved by mail user", userData)
        return axios.post("api/vote/", userData)
    },
    saveEarlyUser: function (userData) {
        console.log("saved by early user")
        return axios.post("api/early_user/", userData)
    },
    saveElectionUser: function (userData) {
        console.log("saved by election user")
        return axios.post("api/election_user/", userData)
    }
};

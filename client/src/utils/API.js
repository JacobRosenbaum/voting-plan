import axios from "axios";

export default {

    //Vote by Mail routes

    saveMailUser: function (userData) {
        console.log("saved by mail user", userData)
        return axios.post("api/mail_user/", userData)
    },
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

    // Vote in Person, Early Routes
   
    emailEarly: (userData) => {
        console.log("came over from email early", userData)
        return axios.post("api/email_early/", userData);
    },
    saveEarlyUser: function (userData) {
        console.log("saved by early user")
        return axios.post("api/early_user/", userData)
    },
    earlyFriend1: (userData) => {
        console.log("first friend mail", userData)
        return axios.post("api/early_friend1/", userData);
    },
    earlyFriend2: (userData) => {
        console.log("second friend mail", userData)
        return axios.post("api/early_friend2/", userData);
    },

    //Vote on Election Day Routes

    emailElection: (userData) => {
        console.log("came over from email election")
        return axios.post("api/email_election/", userData);
    },
    saveElectionUser: function (userData) {
        console.log("saved by election user")
        return axios.post("api/election_user/", userData)
    },
    electionFriend1: (userData) => {
        console.log("first friend mail", userData)
        return axios.post("api/election_friend1/", userData);
    },
    electionFriend2: (userData) => {
        console.log("second friend mail", userData)
        return axios.post("api/election_friend2/", userData);
    },
};

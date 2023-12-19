const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  console.log("")

  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: ") + err);
});

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+15017122661',
//      to: '+15558675310'
//    })
//   .then(message => console.log(message.sid));

router.route("/").post((req, res) => {
  
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const contact = req.body.contact;
  const fee = req.body.fee;
  const slot = req.body.slot;
  const email = req.body.email;

  const newUser = new User({
    name,
    age,
    gender,
    contact,
    fee,
    slot,
    email
  });

  newUser
    .save()
    .then((data) => res.status(200).json({
      "UserDetails":data
    }))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

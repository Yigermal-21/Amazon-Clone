/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require('express');
const cors = require('cors');
const dotenv =require('dotenv');
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);


const app =express();
// app.use(cors({origin:true}));
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"success!"
    });
});

app.post("/payment/create", async(req,res) =>{
    const total =req.query.total;
   if (total > 0){
        // console.log("payment received",total);
        // res.send(total);
        const paymentIntent = await stripe.paymentIntents.create({
          amount: total,
          currency: "usd",
        });
            console.log(paymentIntent);
        res.status(201).json({
          ClientSecret: paymentIntent.client_secret,
        });
    }else{
        res.status(403).json({message:"Total must be greater than 0"});
    }
});








// app.listen(5050,)
exports.api =onRequest(app);
// exports.api = functions.https.onRequest(app);
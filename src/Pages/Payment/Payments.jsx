import React,{useContext, useState} from "react";
import Classes from "./Payment.module.css";
import Layout from "../../Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard"
import {
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/Currencyformat.jsx/Currencyformat";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import{db} from '../../Utility/Firebase'


function Payments() {
  // const [{ basket } ]= useContext(DataContext);
  const { state, dispatch } = useContext(DataContext);
  const { user } = state;

  
  const totalItem = state.basket?.reduce((amount, item) => {
     return item.amount + amount;
   }, 0);

  // // // console.log(totalItem)
  // // console.log(state.user);

  // console.log(state.basket);

  const total = state.basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);


  const [carderror, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
 

  const stripe = useStripe();
  const elements = useElements();

  const handlechange = (e) => {
    // console.log(e);
    e?.error.message ? setCardError(e?.error.message) : setCardError("");
  };

const handlePayment = async (e) => {
  e.preventDefault();
  try {
    setProcessing(true);
    // console.log("Starting payment process...");

    const response = await axiosInstance({
      method: "POST",
      url: `/payment/create?total=${total * 100}`,
    });

    // Check if ClientSecret is present
    const clientSecret = response.data?.ClientSecret;
    if (!clientSecret) {
      throw new Error("Payment creation failed. ClientSecret is missing.");
    }

    console.log("Client Secret:", clientSecret);

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: { card: elements.getElement(CardElement) },
      }
    );

    // Check for any error from the payment confirmation process
    if (error) {
      console.log("Error confirming payment", error);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      console.log("Payment successful", paymentIntent);
      setProcessing(false);

      // Save order details in the database
      await db
        .collection("users")
        .doc(user.id)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
    } else {
      console.log("Payment failed", paymentIntent);
      setProcessing(false);
    }
  } catch (error) {
    // console.log("Error processing payment", error);
    setProcessing(false);
  }
};

  return (
    <Layout>
      {/* Header */}
      <div className={Classes.payment_header}>Checkout ({totalItem})Items</div>
      {/* payement method */}
      <section className={Classes.payment}>
        <div className={Classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123React Lane</div>
            <div>Addis Ababa , ET</div>
          </div>
        </div>
        <hr />
        <div className={Classes.flex}>
          <h3>Review Items and Delivery</h3>
          <div>
            {state.basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={Classes.flex}>
          <h3>Payment Methods</h3>
          <div className={Classes.payment_card_container}>
            <div className={Classes.payment_card_details}>
              <form onSubmit={handlePayment}>
                {carderror && (
                  <small style={{ color: "red" }}>{carderror}</small>
                )}
                <CardElement onChange={handlechange} />
                <div className={Classes.payment_price}>
                  <div>
                    <span style={{display:"flex",gap:"10px"}}>
                      <p>Total Order|</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type ="submit">
                  {
                    processing?(
                      <div className={Classes.loading}>
                        <ClipLoader color="gray" size={12}/>
                        <p>Please Wait...</p>
                      </div>

                    ):("Pay Now"
                  )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payments;








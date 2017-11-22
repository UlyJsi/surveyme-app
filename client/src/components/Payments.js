import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Surveyme (test mode)"
        description="card number 4242 4242 4242 4242"
        amount={500}
        token={token => console.log(this.props.handleToken(token))}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          Add tokens
        </button>  
      </StripeCheckout>  
    );
  }
}

export default connect(null, actions)(Payments);
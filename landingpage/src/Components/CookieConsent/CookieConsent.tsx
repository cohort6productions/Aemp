import * as React from "react";
import "./CookieConsent.scss";

import CookieBanner from "react-cookie-banner";

export default class CookieConsent extends React.Component <{},{accept:boolean}>{
constructor(props:{}){
    super(props);
    // Cookies.remove("accepts-cookies");
}
    // function resetCookies() {
    //     cookies.remove('accepts-cookies')
    //     setState({ accepted: false })
    //   }
  public render() {
    return (
      <div>
        <CookieBanner
          message="Yes, we use cookies. If you don't like it change website, we won't miss you!"
          cookie="user-has-accepted-cookies"
          styles={{
            banner: { backgroundColor: "rgba(60, 60, 60, 0.8)" },
            message: { fontWeight: 400 }
          }}
        />
        <h1>There is something here</h1>
      </div>
    );
  }
}

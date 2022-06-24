import * as jose from "jose";
import Cookie from 'cookie'
import {GoogleAuth, OAuth2Client} from 'google-auth-library'

export const OAuth2Init = async (googleConfig) => {
  addScript();

  function addScript() {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;

    script.onload = init;

    document.head.appendChild(script);
  }

  function init() {
    google.accounts.id.initialize({
      client_id: googleConfig.clientId,
      callback,
    });
    google.accounts.id.renderButton(document.getElementById("google_sign_in"), {
      theme: "filled_black",
      size: "large",
    });
  }

  function callback(response) {
    console.log(`${googleConfig.cookieName}: ${response.credential}`)
    try{Cookie.serialize(googleConfig.cookieName, response.credential)}catch(e){console.log(e)}
    console.log(document.cookie)
    // console.log(jose.decodeJwt(response.credential));
    // verifyIdToken(response.credential);
  }

  async function verifyIdToken(idToken) {
    console.log('verifying id token')
    const client = new OAuth2Client(googleConfig.clientId);
    console.log(client)

    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken,
        audience: googleConfig.clientId, 
      });
      const payload = ticket.getPayload();
      const userid = payload["sub"];

      if (userid === Cookie.parse(googleConfig.cookieName)["sub"]) {
        console.log('log in successful')
      }else{
        console.log('log in failure')
      }
    }
    verify().catch(console.error);

  }
  
};

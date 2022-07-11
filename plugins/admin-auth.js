import * as jose from "jose";
import Cookie from 'js-cookie'
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
    Cookie.set(googleConfig.cookieName, response.credential, {expires: 1/24})
    console.log(document.cookie)
      // console.log(jose.decodeJwt(response.credential));
    verifyIdToken(response.credential);
  }

  async function verifyIdToken(idToken) {
    console.log('verifying id token')
    const client = new OAuth2Client(googleConfig.clientId);

    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken,
        audience: googleConfig.clientId, 
      });
      const payload = ticket.getPayload();
      const userid = payload["sub"];

      if (userid === jose.decodeJwt(Cookie.get(googleConfig.cookieName)).sub) {
        //commit to store
        window.location.href = "/admin/success";

      }else{
        console.log('log in failure')
      }
    }
    verify().catch(console.error);

  }
  
};

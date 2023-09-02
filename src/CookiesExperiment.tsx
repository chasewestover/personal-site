import { useState } from "react";

export default function CookiesExperiment() {
  const [cookieString, setCookieString] = useState("");
  const [error, setError] = useState("");

  function setCookie() {
    try {
      document.cookie = "username=foo; SameSite=None; Secure";
      setCookieString(document.cookie);
    } catch (err) {
      setError(JSON.stringify(err));
    }
  }

  return (
    <div>
      <button onClick={() => setCookie()}>set cookie</button>
      <h2>{`set cookie: ${cookieString}`}</h2>
      <h2>{`error: ${error}`}</h2>
    </div>
  );
}

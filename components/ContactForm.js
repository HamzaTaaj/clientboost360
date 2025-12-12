import Script from "next/script";

export default function HubspotForm() {
  return (
    <>
      <Script
        src="https://js-na2.hsforms.net/forms/embed/244593050.js"
        strategy="afterInteractive"
      />
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="243ba663-12bf-4543-9f7e-e7b1e700f255"
        data-portal-id="244593050"
      />
    </>
  );
}

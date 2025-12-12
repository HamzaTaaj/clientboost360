"use client";

import { useEffect } from "react";

export default function Newsletter() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        window.hbspt &&
        document.getElementById("hubspot-form") &&
        !document.querySelector("#hubspot-form iframe")
      ) {
        window.hbspt.forms.create({
          portalId: "244593050",
          formId: "c89d357e-63e1-492e-bce6-8ab8132ec87f",
          region: "na2",
          target: "#hubspot-form",
        });
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return <div id="hubspot-form" className="min-h-[120px]" />;
}

"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function MarketingTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const marketingParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid",
      "fbclid",
      "msclkid"
    ];

    const currentMetadata = JSON.parse(sessionStorage.getItem("anvaya_marketing") || "{}");
    const newMetadata: Record<string, string> = { ...currentMetadata };
    let hasNewData = false;

    marketingParams.forEach((param) => {
      const value = searchParams.get(param);
      if (value) {
        newMetadata[param] = value;
        hasNewData = true;
      }
    });

    // Store the referrer if it's the first time landing or coming from a different site
    const referrer = document.referrer;
    if (referrer && !referrer.includes(window.location.hostname)) {
      newMetadata["referrer"] = referrer;
      hasNewData = true;
    }

    if (hasNewData) {
      sessionStorage.setItem("anvaya_marketing", JSON.stringify(newMetadata));
    }
  }, [searchParams]);

  return null; // This component doesn't render anything
}

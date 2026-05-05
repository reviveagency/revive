"use client";

import { InlineWidget } from "react-calendly";

type Props = {
  url: string;
  prefill?: {
    email?: string;
    name?: string;
    customAnswers?: Record<string, string>;
  };
};

export function CalendlyEmbed({ url, prefill }: Props) {
  return (
    <InlineWidget
      url={url}
      styles={{ height: "780px", width: "100%" }}
      prefill={prefill}
      pageSettings={{
        backgroundColor: "f5f5f5",
        primaryColor: "f26522",
        textColor: "0a0a0a",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
      }}
    />
  );
}

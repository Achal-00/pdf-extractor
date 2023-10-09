"use client";

import { useEffect, useState } from "react";

export default function Output() {
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(sessionStorage.getItem("convertedPDF"));
  }, []);

  return (
    <iframe
      className="w-[100dvw] h-[100dvh]"
      title="PdfFrame"
      src={content}
      type="application/pdf"
    ></iframe>
  );
}

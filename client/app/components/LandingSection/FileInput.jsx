"use client";

import { useRouter } from "next/navigation";
import { PDFDocument } from "pdf-lib";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  const [userFile, setUserFile] = useState();
  const [pages, setPages] = useState("");
  const [processedPdf, setProcessedPdf] = useState();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    if (!initialLoad) {
      sessionStorage.setItem("convertedPDF", processedPdf);
      router.push("/output");
    }
  }, [processedPdf]);

  const submitHandler = async () => {
    if (!userFile) {
      toast.error("File empty");
      return;
    }
    if (!pages) {
      toast.error("Pages empty");
      return;
    }

    try {
      if (userFile.length > 0) {
        const pdfArrayBuffer = await readFileAsync(userFile[0]);
        const newPdf = await editPdf(pdfArrayBuffer);
        renderPdf(newPdf);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  function renderPdf(uint8array) {
    const tempblob = new Blob([uint8array], {
      type: "application/pdf",
    });
    const docUrl = URL.createObjectURL(tempblob);
    setProcessedPdf(docUrl);
  }

  const editPdf = async (arrayBuff) => {
    const pdfDoc = await PDFDocument.load(arrayBuff);
    const pageArray = pages.split(",");
    const sortedPages = pageArray.sort((a, b) => b - a);
    try {
      sortedPages.map((item) => {
        if (item.match(/(\d+)/)) {
          pdfDoc.removePage(parseInt(item) - 1);
        } else {
          throw Error("Provide integer for page numbers!!");
        }
      });
    } catch (err) {
      throw Error(err.message);
    }
    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  };

  return (
    <div className="w-full grid gap-4">
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setUserFile(e.target.files)}
        className="user-file w-full portrait:mx-auto text-sm file:mr-4 file:rounded-md file:border-0 file:bg-purple-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-purple-400 focus:outline-none disabled:pointer-events-none disabled:opacity-60 bg-gray-100 rounded-md text-gray-400 hover:cursor-pointer"
      />
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          onChange={(e) => setPages(e.currentTarget.value)}
          className="user-page bg-gray-100 rounded-md placeholder:text-sm pl-2 outline-none"
          placeholder="Page numbers to exclude"
        />
        <button
          className="bg-purple-500 text-white rounded-md py-2.5 font-medium hover:bg-purple-400"
          onClick={submitHandler}
        >
          submit
        </button>
      </div>
    </div>
  );
}

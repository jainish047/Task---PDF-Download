"use client";
import { entries, TandC } from "@/constants/rawhtml";
import Card from "@/components/Card";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Feed() {
  const TandCRef = useRef<HTMLDivElement>(null);
  const entryRefs = useRef<Record<number, HTMLDivElement | null>>({});
  
  const downloadElementAsPDF = async (element: HTMLElement, name: string) => {
    const canvas = await html2canvas(element, {
      backgroundColor: "#0a0a0a", // match your dark theme
      scale: 2, // improve resolution
      useCORS: true, // allow remote assets
      width: element.offsetWidth,
      height: element.offsetHeight,
    });
    
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    // If content is too tall, we might need to split it across pages
    if (pdfHeight > pdf.internal.pageSize.getHeight()) {
      const pageHeight = pdf.internal.pageSize.getHeight();
      const ratio = pageHeight / pdfHeight;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pageHeight);
    } else {
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    }
    
    pdf.save(`${name}.pdf`);
  };

  const handleDownloadEntry = (id: number, title: string) => {
    const el = entryRefs.current[id];
    if (el) downloadElementAsPDF(el, title);
  };

  const handleDownloadTandC = () => {
    if (TandCRef.current)
      downloadElementAsPDF(TandCRef.current, "Terms-and-Conditions");
  };

  return (
    <div className="space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {entries.map((entry) => (
          <div key={entry.id} className="relative">
            <div
              style={{
                backgroundColor: '#0a0a0a',
                borderRadius: '0.5rem',
                padding: '1rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                width: '100%',
                height: '100%',
                minHeight: '200px',
                border: '1px solid #374151'
              }}
              ref={(el) => {
                entryRefs.current[entry.id] = el;
              }}
            >
              <Card entry={entry} />
            </div>
            <button
              onClick={() => handleDownloadEntry(entry.id, "Question-Answer")}
              className="cursor-pointer absolute bottom-2 right-2 px-2 py-1 text-xs text-white border-2 border-blue-700 rounded bg-gray-900 hover:bg-blue-700 shadow"
            >
              Download
            </button>
          </div>
        ))}
      </div>

      {/* Terms & Conditions */}
      <div className="p-4 border border-gray-600 rounded">
        <div
          ref={TandCRef}
          style={{
            backgroundColor: '#0a0a0a',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            fontFamily: 'Arial, sans-serif',
            border: '1px solid #374151'
          }}
          dangerouslySetInnerHTML={{ __html: TandC.content }}
        />
        <button
          onClick={handleDownloadTandC}
          className="p-3 text-sm text-gray-700 underline hover:text-blue-600 cursor-pointer"
        >
          Download Terms and Conditions as PDF
        </button>
      </div>
    </div>
  );
}
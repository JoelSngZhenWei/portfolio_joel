"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import "react-pdf/dist/esm/Page/TextLayer.css"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs"

export default function PdfView() {
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)
  // const [scale, setScale] = useState<number>(1.0)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => Math.min(Math.max(1, prevPageNumber + offset), numPages || 1))
  }

  function changePageInput(event: React.ChangeEvent<HTMLInputElement>) {
    const page = Number.parseInt(event.target.value)
    if (page && page > 0 && page <= (numPages || 1)) {
      setPageNumber(page)
    }
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/assets/MLA_Final_Report.pdf"
    link.download = "MLA_Final_Report.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col items-center p-2">
      <div className="bg-secondary rounded-lg shadow-lg p-6 w-full">
        <div className="mb-4 flex justify-between items-center">
          <Button onClick={() => changePage(-1)} disabled={pageNumber <= 1} variant="outline">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              value={pageNumber}
              onChange={changePageInput}
              className="w-16 text-center"
              min={1}
              max={numPages || 1}
            />
            <span>of {numPages}</span>
          </div>
          <Button onClick={() => changePage(1)} disabled={pageNumber >= (numPages || 1)} variant="outline">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="border border-primary rounded-lg overflow-hidden h-full">
          <Document
            file="/assets/MLA_Final_Report.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex justify-center"
          >
            {/* <Page pageNumber={pageNumber} scale={scale} className="max-h-screen" /> */}
            <Page pageNumber={pageNumber} scale={0.5} className="h-full" />
          </Document>
        </div>
        <div className="mt-4 flex justify-center items-center space-x-4">
          {/* <Button onClick={() => setScale((scale) => Math.max(0.5, scale - 0.1))} size="icon" variant="outline">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span>{Math.round(scale * 100)}%</span>
          <Button onClick={() => setScale((scale) => Math.min(2, scale + 0.1))} size="icon" variant="outline">
            <ZoomIn className="h-4 w-4" />
          </Button> */}
          <Button onClick={handleDownload} size="icon" variant="outline">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}


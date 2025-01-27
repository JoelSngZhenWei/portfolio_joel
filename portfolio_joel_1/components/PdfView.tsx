"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import "react-pdf/dist/esm/Page/TextLayer.css"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs"

interface PdfViewProps {
  pdfPath: string
  fileName?: string
}

export default function PdfView({ pdfPath, fileName }: PdfViewProps) {
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)

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
    link.href = pdfPath
    link.download = fileName || "document.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-secondary rounded-xl p-4 flex flex-col gap-4 h-full">
        <div className="flex justify-between items-center">
          <Button onClick={() => changePage(-1)} disabled={pageNumber <= 1} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
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
          <Button onClick={() => changePage(1)} disabled={pageNumber >= (numPages || 1)} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="border border-primary rounded-xl overflow-hidden flex-grow">
          <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess} className="flex justify-center h-full">
            <Page pageNumber={pageNumber} scale={0.5} className="h-full" />
          </Document>
        </div>
        <div className="flex justify-center">
          <Button onClick={handleDownload} variant="outline">
            Download
            <Download className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}


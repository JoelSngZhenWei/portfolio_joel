"use client"

import type React from "react"
import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, ChevronLeft, ChevronRight } from "lucide-react"

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js"

interface PdfViewerProps {
  pdfUrl: string
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.0)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => Math.min(Math.max(1, prevPageNumber + offset), numPages || 1))
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = "document.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
        <Button onClick={() => changePage(-1)} disabled={pageNumber <= 1}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <Button onClick={() => changePage(1)} disabled={pageNumber >= (numPages || 1)}>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          min="1"
          max={numPages || 1}
          className="w-16"
          value={pageNumber}
          onChange={(e) => setPageNumber(Number.parseInt(e.target.value))}
        />
        <Button onClick={() => setScale((scale) => Math.min(scale + 0.1, 2))}>Zoom In</Button>
        <Button onClick={() => setScale((scale) => Math.max(scale - 0.1, 0.5))}>Zoom Out</Button>
        <Button onClick={handleDownload}>
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </div>
      <div className="border rounded-lg p-4 max-w-full overflow-auto">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div>Loading PDF...</div>}
          error={<div>Failed to load PDF!</div>}
        >
          <Page pageNumber={pageNumber} scale={scale} renderTextLayer={true} renderAnnotationLayer={true} />
        </Document>
      </div>
    </div>
  )
}

export default PdfViewer


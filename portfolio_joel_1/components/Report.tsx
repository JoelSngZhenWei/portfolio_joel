import React from 'react'
import PdfView from './PdfView'
import { Button } from './ui/button'
import { Download } from "lucide-react"

const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/assets/MLA_Final_Report.pdf"
    link.download = "MLA_Final_Report.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}


const Report = () => {
    return (
        <div className='flex flex-col lg:flex-row '>
            <div className='border flex flex-col'>
                <h2 className="text-2xl font-semibold tracking-wide">Report</h2>
                <Button
                    onClick={handleDownload}
                    variant="outline"
                    className="gap-2 text-lg rounded-full w-48"
                >
                    <span>Download</span>
                    <Download className="h-4 w-4" />
                </Button>            </div>
            <div className='border'>
                <PdfView />
            </div>
        </div>
    )
}

export default Report

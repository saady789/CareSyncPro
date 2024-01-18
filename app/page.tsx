'use client';
import Image from 'next/image'
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import { PDFDocument } from 'pdf-lib';


export default function Home() {

  return (
   <div className='w-screen h-screen bg-slate-400'>
      <iframe className='w-full h-full ' src="https://firebasestorage.googleapis.com/v0/b/cloudmate-391ef.appspot.com/o/PAK-TimeSheet-3.pdf?alt=media&token=5d3783bf-1c9f-48bf-a78f-66f09708dd47"  ></iframe>
   </div>
  )
}

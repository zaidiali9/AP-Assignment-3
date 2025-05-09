import Link from 'next/link'
import React from 'react'

const Index = () => {
  return (
    <div>
    <h1>Help Center</h1>
    <p>Welcome to the Movie House help center. Select a topic:</p>
    <ul>
      <li><Link href="/help/faqs">FAQs</Link></li>
      <li><Link href="/help/contact">Contact Us</Link></li>
      <li><Link href="/help/privacy">Privacy Policy</Link></li>
    </ul>
  </div>
  )
}


 
export default Index
  
import { useRouter } from 'next/router';

export default function HelpPage() {
  const router = useRouter();
  const { slug } = router.query;

  const content = {
     
    'faqs': <FAQs />,
    'contact': <Contact />,
    'privacy': <Privacy />,
  };

  return (
   
      <div>
        {content[slug?.[0] ] }
      </div>
  
  );
}



function FAQs() {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
     
    </div>
  );
}

function Privacy() {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>We respect your privacy and do not share your data with third parties.</p>
    </div>
  );
}
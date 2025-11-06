import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { faqs } from "@shared/schema";

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Frequently Asked Questions"
        description="Common questions about Dawu Msendo Trading's construction and infrastructure services in Gauteng, South Africa. Learn about our processes, timelines, and expertise."
        canonical="/faq"
        jsonLd={faqSchema}
      />
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything you need to know about working with Dawu Msendo Trading
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-card-border rounded-md px-6 bg-background"
                data-testid={`accordion-faq-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12">
            <CardContent className="p-0 text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team is here to help. Get in touch and we'll respond within
                24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-contact-us">
                    Contact Us
                  </Button>
                </Link>
                <a
                  href="https://wa.me/27842822378"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" data-testid="button-whatsapp">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

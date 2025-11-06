import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      honeypot: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/send-mail", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      trackEvent("form_submission", "contact", "contact_form_submit");
      toast({
        title: "Message sent successfully!",
        description:
          "We'll get back to you within 24 hours. Check your email for confirmation.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description:
          error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    if (data.honeypot) {
      return;
    }
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Ready to start your project? Let's discuss how we can help
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading font-bold text-2xl mb-6">
                    Send Us a Message
                  </h2>

                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-md">
                      <p className="text-foreground font-semibold">
                        Thank you for contacting us!
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        We've received your message and will respond within 24
                        hours.
                      </p>
                    </div>
                  )}

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Doe"
                                  {...field}
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@example.com"
                                  {...field}
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="084 123 4567"
                                  {...field}
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Interest</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger data-testid="select-service">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="construction">
                                    Construction
                                  </SelectItem>
                                  <SelectItem value="housing">
                                    Housing Development
                                  </SelectItem>
                                  <SelectItem value="infrastructure">
                                    Infrastructure
                                  </SelectItem>
                                  <SelectItem value="roadworks">
                                    Roadworks
                                  </SelectItem>
                                  <SelectItem value="electrification">
                                    Electrification
                                  </SelectItem>
                                  <SelectItem value="property">
                                    Property Development
                                  </SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project..."
                                rows={6}
                                {...field}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="honeypot"
                        render={({ field }) => (
                          <FormItem className="hidden">
                            <FormControl>
                              <Input {...field} tabIndex={-1} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={mutation.isPending}
                        data-testid="button-submit-contact"
                      >
                        {mutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        667/389 Ramaphos Street
                        <br />
                        Slovo Park, Eldorado Park
                        <br />
                        Johannesburg, 1811
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <a
                        href="tel:0842822378"
                        className="text-sm text-muted-foreground hover:text-foreground block"
                        data-testid="link-phone-romeo"
                      >
                        084 282 2378 (Romeo)
                      </a>
                      <a
                        href="tel:0681061936"
                        className="text-sm text-muted-foreground hover:text-foreground block"
                        data-testid="link-phone-lindokuhle"
                      >
                        068 106 1936 (Lindokuhle)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:info@dawumsendo.co.za"
                        className="text-sm text-muted-foreground hover:text-foreground"
                        data-testid="link-email"
                      >
                        info@dawumsendo.co.za
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 8:00 AM - 5:00 PM
                        <br />
                        Saturday: 8:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">WhatsApp</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Get instant responses via WhatsApp
                      </p>
                      <div className="space-y-2">
                        <a
                          href="https://wa.me/27842822378"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            data-testid="button-whatsapp-romeo"
                          >
                            Chat with Romeo
                          </Button>
                        </a>
                        <a
                          href="https://wa.me/27681061936"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            data-testid="button-whatsapp-lindokuhle"
                          >
                            Chat with Lindokuhle
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-background">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.0288894739774!2d27.8931!3d-26.1873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDExJzE0LjMiUyAyN8KwNTMnMzUuMiJF!5e0!3m2!1sen!2sza!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dawu Msendo Trading and Projects location map Eldorado Park Johannesburg"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

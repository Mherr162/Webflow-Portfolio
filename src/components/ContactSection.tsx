import { Button } from "./ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Contact me</h5>
        <h2 className="section-title font-bold mb-16">GET IN TOUCH</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-md bg-background border border-neutral-800 focus:border-neutral-700 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. johndoe@email.com"
                  className="w-full px-4 py-3 rounded-md bg-background border border-neutral-800 focus:border-neutral-700 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="(123) - 456 - 789"
                  className="w-full px-4 py-3 rounded-md bg-background border border-neutral-800 focus:border-neutral-700 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write Your Message Here..."
                  className="w-full px-4 py-3 rounded-md bg-background border border-neutral-800 focus:border-neutral-700 focus:outline-none"
                />
              </div>

              <Button className="w-full py-6">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">FAQ</h2>
            <p className="text-muted-foreground mb-8">
              Frequently asked questions about my services and work process.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-neutral-800 rounded-lg px-4 py-2">
                <AccordionTrigger className="text-lg font-medium">
                  What types of services do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  I offer a range of software development services including full-stack web development,
                  database design, and website optimization. My expertise spans both frontend and backend
                  technologies, with a focus on creating responsive, performant applications.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-neutral-800 rounded-lg px-4 py-2">
                <AccordionTrigger className="text-lg font-medium">
                  What do you need from me to start a project?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  To get started, I need a clear description of your project objectives, any design
                  references you have, and your timeline. I'll then work with you to develop a
                  detailed scope of work and project plan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-neutral-800 rounded-lg px-4 py-2">
                <AccordionTrigger className="text-lg font-medium">
                  How long does it take to complete a project?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Project timelines vary depending on scope and complexity. A simple website might take
                  2-4 weeks, while complex web applications can take several months. I'll provide a detailed
                  timeline during our initial consultation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

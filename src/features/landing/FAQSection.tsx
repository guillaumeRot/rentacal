"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Component } from "react";

export default class FAQSection extends Component {
  render() {
    return (
      <section className="py-16">
        <div className="custom-screen">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mx-auto">
              <h1 className="flex md:flex-row flex-col text-5xl text-center sm:text-4xl font-poppins font-semibold px-4">
                Foire aux questions
              </h1>
              <p className="flex md:flex-row flex-col text-sm lg:text-lg font-rubik mt-6 px-4 pb-10">
                Vous avez encore un doute ? Vouis pouvez soit trouver la réponse
                dans cette FAQ <br />
                ou nous contacter via le chat en bas à droite.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              <AccordionItem key="faq1" value="faq1">
                <AccordionTrigger>
                  <span className="text-lg font-semibold">
                    Comment renseigner mon prix net vendeur ?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem key="faq1" value="faq1">
                <AccordionTrigger>
                  <span className="text-lg font-semibold">
                    Comment renseigner mon prix net vendeur ?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem key="faq1" value="faq1">
                <AccordionTrigger>
                  <span className="text-lg font-semibold">
                    Comment renseigner mon prix net vendeur ?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
}

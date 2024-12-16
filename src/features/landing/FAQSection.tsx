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
      <section id="faq" className="py-16">
        <div className="custom-screen">
          <div className="max-w-4xl mx-auto">
            <h1 className="flex flex-col text-5xl text-center sm:text-4xl font-poppins font-semibold px-4">
              Foire aux questions
            </h1>

            <Accordion
              type="single"
              defaultValue="faq1"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              <AccordionItem key="faq1" value="faq1" className="pt-16">
                <AccordionTrigger>
                  <span className="text-lg font-semibold">
                    Qu'est-ce que la rentabilité locative, et pourquoi est-elle
                    essentielle ?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  La rentabilité locative mesure le rendement de votre
                  investissement immobilier en fonction des loyers perçus. C'est
                  un indicateur clé pour savoir si votre projet est
                  financièrement viable.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem key="faq2" value="faq2">
                <AccordionTrigger>
                  <span className="text-lg font-semibold">
                    Rentacal fonctionne-t-il pour tous les types
                    d'investissements immobiliers ?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Oui, Rentacal s’adapte à tous les projets : appartements,
                  maisons, immeubles ou locaux commerciaux. Peu importe la
                  taille ou la nature de l’investissement, notre outil vous
                  accompagne.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem key="faq3" value="faq3">
                <AccordionTrigger>
                  <span className="text-lg font-semibold">
                    Comment Rentacal m’aide-t-il à comprendre mon cash-flow ?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Rentacal calcule automatiquement votre cash-flow mensuel en
                  prenant en compte vos revenus locatifs, charges, et
                  mensualités de prêt. Vous savez immédiatement si votre
                  investissement est rentable mois après mois.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
}

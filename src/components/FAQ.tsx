import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Вопрос 1",
    answer: "Ответ",
    value: "item-1",
  },
  {
    question: "Вопрос 2",
    answer:
      "Ответ",
    value: "item-2",
  },
  {
    question:
      "Вопрос 3",
    answer:
      "Ответ ",
    value: "item-3",
  },
  {
    question: "Вопрос 4",
    answer: "Ответ",
    value: "item-4",
  },
  {
    question:
      "Вопрос 5",
    answer:
      "Ответ",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Часто задаваемые вопросы{" "}
        
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Требуется что-то уточнить?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Связаться в тг
        </a>
      </h3>
    </section>
  );
};

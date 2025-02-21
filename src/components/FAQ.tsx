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
    question: "Почему это выгоднее, чем нанимать штатного сотрудника?",
    answer: ["Экономия до 40%. Никаких налогов, больничных, отпускных или оборудования.",  
    " Оплата только за рабочие часы. Не платите за перекуры или больничные.", 
    "Гибкость. Увеличивайте или уменьшайте команду в 1 клик под текущие задачи.",
].join("\n"),
    value: "item-1",
  },
  {
    question: "Как обеспечивается конфиденциальность?",
    answer:
      "Подписываем NDA перед началом сотрудничества. Специалисты работают только с вашими инструментами (Slack, Jira, ваш корпоративный email). Доступ к данным — строго по вашему регламенту.",
    value: "item-2",
  },
  {
    question:
      "Как быстро вы сможете предоставить специалиста?",
    answer: "Стандартный срок: 90% вакансий закрываем за 7–14 дней ",
    value: "item-3",
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
          href="https://t.me/white_line_It"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Связаться в тг
        </a>
      </h3>
    </section>
  );
};

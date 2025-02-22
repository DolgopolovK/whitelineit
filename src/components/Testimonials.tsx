import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import cube from "../assets/Group 3.png";



interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: cube,
    name: "WHITELINE IT",
    userName: "@white_line_group",
    comment: "Вы когда-нибудь слышали от подрядчиков \"Сделаем быстро, дешево и качественно\"? Спойлер: так не бывает.Топ-менеджеры и собственники бизнеса знают: если IT-проект горит, то чаще всего не от скорости, а от проблем. Вот три сигнала, что ваш проект превращается в пожар – и как это исправить...",
  },
  {
    image: cube,
    name: "WHITELINE IT",
    userName: "@white_line_group",
    comment:
      "Вы удивитесь, но причина не в плохих разработчиках или сложных технологиях. Мы в White Line IT видели, как отличные идеи рушились, не принеся бизнесу ничего, кроме убытков. Вот три ключевые ошибки, которые убивают корпоративные IT-решения – и способы их избежать...",
  },

  {
    image: cube,
    name: "WHITELINE IT",
    userName: "@white_line_group",
    comment:
      "Знаете, что объединяет 80% провалившихся IT-проектов? В компании думали, что они справятся сами. Без внешней экспертизы, без гибкости, без запаса ресурсов...",
  },
  {
    image: cube,
    name: "WHITELINE IT",
    userName: "@white_line_group",
    comment:
      "Как собрать IT-команду за 72 часа, если рынок молчит? (И при чём здесь ваша прибыль):«Знакомо: проект горит, а нужного Senior DevOps или Fullstack-разработчика всё нет? HR-отдел засыпает вас резюме джуниоров, а фрилансеры исчезают после предоплаты… Стоп. Есть способ лучше. White Line IT — это не просто аутстафф. Это ваш доступ к топовым IT-специалистам, которые...",
  }
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Блог
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          WHITELINE IT{" "}
        </span>
        
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Мы активно ведем социальные сети
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

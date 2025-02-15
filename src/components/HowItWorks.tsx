import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Персонализированные решения: ",
    description:
      "подбираем оптимальные условия сотрудничества с учетом ваших потребностей и приоритетов.",
  },
  {
    icon: <MapIcon />,
    title: "Оперативный и точный подбор:",
    description:
      "закрываем вакансии от 3 дней, находя лучших специалистов под ваши требования.",
  },
  {
    icon: <PlaneIcon />,
    title: "Комплексная поддержка:",
    description:
      "сопровождаем вас на каждом этапе найма, обеспечивая комфорт и эффективность процесса",
  },
  {
    icon: <GiftIcon />,
    title: "Устойчивые отношения:",
    description:
      "строим долгосрочные партнерства, ориентированные на взаимное развитие и успех",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Почему мы?{" "}
        
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Мы легко адаптируемся к изменениям и быстро осваиваем новые отрасли, что позволяет нам оперативно находить самых подходящих кандидатов, учитывая особенности вашей компании.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

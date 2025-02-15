//import { Statistics } from "./Statistics";
//import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
          //  src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
               О
                компании
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              В WHITELINE IT мы уделяем особое внимание развитию технической 
              экспертизы в сфере рекрутинга, обеспечивая профессиональный подход к каждому этапу подбора.
              </p>
              <p className="text-xl text-muted-foreground mt-4"> Мы тщательно анализируем требования к каждой вакансии, 
                глубоко погружаемся в специфику подбора и выстраиваем эффективные стратегии поиска. 
                Такой подход позволяет нам находить оптимальные решения даже для самых сложных позиций и 
                помогать компаниям формировать сильные команды.</p>
                </div>

          
              </div>
        </div>
      </div>
    </section>
  );
};

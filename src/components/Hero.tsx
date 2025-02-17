import { Button } from "./ui/button";

import { HeroCards } from "./HeroCards";


export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
          Аутстаф разработчиков, 
          укрепление вашей команды          </h1>{" "}
          
         
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Подберем сотрудника для вашей команды разработки
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-6">
          <Button onClick={() => window.open("", "_blank")}
  className="w-full md:w-1/2 py-6"
>
Связаться с менеджером
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};

import pilot from "../assets/Group 1.png";

export const HeroCards = () => { 
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[300px] h-[300px] justify-center ">
      <img 
        src={pilot} 
        alt="Описание изображения" 
        className="w-auto h-auto object-cover rounded-xl "
      />
    </div>
  );
};

import cube from "../assets/Group 1.png"

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2 justify-start">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex flex-col items-center"
          >
            <img 
        src={cube} 
        alt="Illustration" 
        className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 object-contain mb-4" // здесь можно настроить размер
      />
            WHITELINE IT
          </a>
        </div>

       

        

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">О нас</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              О компании
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Мы в социальных сетях</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/company/white-line-it/"
              className="opacity-60 hover:opacity-100"
            >
              Linkedin
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://t.me/white_line_group"
              className="opacity-60 hover:opacity-100"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 WHITLINE IT{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
          
          </a>
        </h3>
      </section>
    </footer>
  );
};

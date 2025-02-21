import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const [formDetails, setFormDetails] = useState({ email: "" });
  const [buttonText, setButtonText] = useState("Поделиться");
  const [status, setStatus] = useState<{ success: boolean; message: string }>({
    success: false,
    message: "",
  });
  const [loading, setLoading] = useState(false); // Состояние загрузки

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true); // Начинаем загрузку
    setButtonText("Доставлено");

    // Отправка данных на сервер
    let response = await fetch("https://getform.io/f/e13459b4-8e3a-4c45-a232-83785922d80c", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    setLoading(false); // Останавливаем загрузку
    let result = await response.json();

    // Обработка статуса отправки
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Что-то пошло не так, пожалуйста, попробуйте позже.",
      });
    }

    // Сброс данных формы
    setFormDetails({ email: "" });
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Оставить контакт{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            для обратной связи
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Можете оставить нам адрес почты, наш специалист свяжется с Вами.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            placeholder="pochta@gmail.com"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
            value={formDetails.email}
            onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })}
          />
          <Button type="submit" disabled={loading}>
            {loading ? (
              <div className="w-6 h-6 border-4 border-t-4 border-gray-400 border-solid rounded-full spinner"></div>
            ) : (
              buttonText
            )}
          </Button>
        </form>

        {status.message && (
          <p className={`text-center mt-4 ${status.success ? "text-green-500" : "text-red-500"}`}>
            {status.message}
          </p>
        )}
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};

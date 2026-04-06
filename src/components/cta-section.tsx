import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-red-500 mb-6 font-sans text-balance">Ваша техника ждёт ремонта?</h2>
          <p className="text-xl text-black mb-10 leading-relaxed max-w-2xl mx-auto">
            Напишите Евгению — опишите проблему и получите предварительную оценку прямо в Telegram. Или позвоните, если удобнее.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
              onClick={() => window.open("https://t.me/evgenymaer", "_blank")}
            >
              Написать в Telegram
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
              onClick={() => window.location.href = "tel:89996293193"}
            >
              +7 999 629-31-93
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
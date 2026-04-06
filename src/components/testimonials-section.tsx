import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Андрей К.",
    role: "Клиент сервиса",
    content:
      "Сдавал iPhone после воды — думал, всё, конец. Ребята из Reboot восстановили за день. Работает как новый. Цену назвали сразу, никаких сюрпризов.",
  },
  {
    name: "Марина Т.",
    role: "Постоянный клиент",
    content:
      "Уже второй раз обращаюсь по ноутбуку. Чистка, замена термопасты — всё сделали быстро и дёшево. Плюс честно сказали, что менять матрицу пока не нужно. Уважаю за честность.",
  },
  {
    name: "Сергей Д.",
    role: "Клиент сервиса",
    content:
      "Заказывал телефон через них — Samsung новый, на 30% дешевле магазина. Привезли за 55 дней, всё официально, с чеком. Буду брать ещё.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            К нам возвращаются, потому что мы делаем работу качественно и не обманываем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-red-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-500/20 text-red-400 font-bold">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
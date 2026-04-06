import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Бесплатная диагностика",
    description: "Определим причину поломки и назовём точную стоимость до начала работ. Если ремонтируете у нас — диагностика бесплатно.",
    icon: "Search",
    badge: "Бесплатно",
  },
  {
    title: "Гарантия 14 дней",
    description: "На все виды выполненных работ даём официальную гарантию. Выдаём чек и несём ответственность.",
    icon: "ShieldCheck",
    badge: "Гарантия",
  },
  {
    title: "Ремонт от 1 часа",
    description: "Срочный ремонт при наличии запчастей. Смартфоны, планшеты, ноутбуки — быстро и качественно.",
    icon: "Zap",
    badge: "Срочно",
  },
  {
    title: "Прозрачные цены",
    description: "Никаких скрытых доплат и «внезапных» платежей в процессе. Ремонт от 500 ₽ — цена фиксируется до начала работ.",
    icon: "BadgeRussianRuble",
    badge: "Честно",
  },
  {
    title: "Любая техника",
    description: "Смартфоны, ноутбуки, телевизоры, игровые приставки, бытовая техника, принтеры — принимаем всё.",
    icon: "Wrench",
    badge: "Всё",
  },
  {
    title: "3 точки в городе",
    description: "Советский и Ворошиловский районы. Ежедневно с 10:00 до 19:00 — выберите ближайший адрес.",
    icon: "MapPin",
    badge: "Удобно",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают Reboot</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Честный сервис, прозрачные цены и гарантия на все работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={feature.icon} size={32} className="text-red-500" fallback="Wrench" />
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

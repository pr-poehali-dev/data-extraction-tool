import Icon from "@/components/ui/icon"

const addresses = [
  {
    district: "Советский район",
    address: "ул. Качуевской, 21/2",
    icon: "MapPin",
  },
  {
    district: "Ворошиловский район",
    address: "ул. Рабоче-Крестьянская, 14",
    icon: "MapPin",
  },
  {
    district: "Советский район",
    address: "ул. Туркменская, 13",
    icon: "MapPin",
  },
]

export function SafetySection() {
  return (
    <section id="addresses" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Наши адреса в Волгограде</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Три точки города — везде одинаковые цены, гарантия и качество
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {addresses.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-red-500/20 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                  <Icon name={item.icon} size={24} className="text-red-500" fallback="MapPin" />
                </div>
              </div>
              <p className="text-red-400 text-sm font-semibold mb-2">{item.district}</p>
              <p className="text-foreground font-bold text-lg">{item.address}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-red-500/20 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Clock" size={28} className="text-red-500" fallback="Clock" />
            <h3 className="text-2xl font-bold text-foreground">Режим работы</h3>
          </div>
          <p className="text-3xl font-bold text-red-500 mb-2">Ежедневно 10:00 – 19:00</p>
          <p className="text-muted-foreground">Без выходных и праздников</p>
        </div>
      </div>
    </section>
  )
}

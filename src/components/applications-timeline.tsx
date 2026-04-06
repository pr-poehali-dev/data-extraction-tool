import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Ремонт техники",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Принимаем в ремонт любую цифровую и бытовую технику. Диагностика бесплатная, если ремонт делается у нас. Цены от 500 ₽.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Смартфоны и планшеты — экраны, аккумуляторы, ремонт после воды
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Ноутбуки и компьютеры — матрицы, клавиатуры, материнские платы
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Телевизоры, игровые консоли, бытовая техника, принтеры
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Продажа б/у смартфонов",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Продаём только проверенные устройства, прошедшие полную диагностику в нашем сервисе. Гарантия 14–30 дней. Честное описание состояния.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              iPhone, Samsung, Xiaomi — разные модели и цены
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Trade-in — сдайте старый телефон и доплатите до нашего
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Никаких скрытых дефектов — всё проверено и задокументировано
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Заказ новой техники",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Привозим любую новую технику под заказ напрямую от поставщиков. Скидка до 40% от розничной цены магазинов.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Ноутбуки, телефоны, телевизоры, бытовая техника, аксессуары
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Предоплата — фиксируем цену и сроки доставки
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Доставка до сервиса или к вам домой
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Выкуп техники",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Нужны деньги или хотите избавиться от старого устройства? Оцениваем честно и рассчитываемся сразу на месте.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Смартфоны (особенно Apple) — быстрая оценка и оплата
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Ноутбуки и планшеты — любое состояние
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Честная цена без занижения — работаем открыто
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Что мы делаем</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Полный спектр услуг для вашей техники — от ремонта до продажи новых устройств со скидкой до 40%
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}

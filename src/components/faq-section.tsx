import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько стоит диагностика?",
      answer:
        "Диагностика бесплатная, если ремонт делается у нас. Если вы решили не ремонтировать — стоимость диагностики обсуждается индивидуально.",
    },
    {
      question: "Как быстро починят мою технику?",
      answer:
        "Многие виды ремонта выполняем в день обращения — от 1 часа при наличии запчастей. Сроки называем до начала работ.",
    },
    {
      question: "Есть ли гарантия на ремонт?",
      answer:
        "Да, на все виды работ даём гарантию 14 дней. Выдаём официальный чек и несём полную ответственность за результат.",
    },
    {
      question: "Можно ли привезти технику в любой из ваших сервисов?",
      answer:
        "Да, у нас три точки в Волгограде — ул. Качуевской 21/2, ул. Рабоче-Крестьянская 14 и ул. Туркменская 13. Везде одинаковые цены и качество.",
    },
    {
      question: "Как заказать новую технику со скидкой?",
      answer:
        "Напишите Евгению в Telegram (@evgenymaer) или позвоните. Опишите, что хотите — мы найдём у поставщиков и привезём с экономией до 40% от цены магазина.",
    },
    {
      question: "Принимаете ли вы технику на выкуп?",
      answer:
        "Да, выкупаем смартфоны (особенно Apple), ноутбуки и планшеты. Оцениваем честно, деньги отдаём сразу на месте.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о ремонте, ценах и работе сервисного центра Reboot.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

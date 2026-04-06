import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Re<span className="text-red-500">boot</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-2 max-w-md">
              Сервисный центр в Волгограде. Ремонт, выкуп и продажа техники.
            </p>
            <p className="font-space-mono text-gray-400 text-sm mb-6">Ежедневно 10:00 – 19:00</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://t.me/evgenymaer"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors duration-200"
              >
                <Icon name="Send" size={18} fallback="Send" />
                <span className="font-space-mono">@evgenymaer</span>
              </a>
              <a
                href="tel:89996293193"
                className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors duration-200"
              >
                <Icon name="Phone" size={18} fallback="Phone" />
                <span className="font-space-mono">+7 999 629-31-93</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Ремонт техники
                </a>
              </li>
              <li>
                <a href="#applications" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Продажа б/у
                </a>
              </li>
              <li>
                <a href="#applications" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Заказ новой техники
                </a>
              </li>
              <li>
                <a href="#applications" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Выкуп устройств
                </a>
              </li>
            </ul>
          </div>

          {/* Addresses */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Адреса</h3>
            <ul className="space-y-3">
              <li className="font-space-mono text-gray-400 text-sm">
                ул. Качуевской, 21/2<br />
                <span className="text-gray-500">Советский р-н</span>
              </li>
              <li className="font-space-mono text-gray-400 text-sm">
                ул. Рабоче-Крестьянская, 14<br />
                <span className="text-gray-500">Ворошиловский р-н</span>
              </li>
              <li className="font-space-mono text-gray-400 text-sm">
                ул. Туркменская, 13<br />
                <span className="text-gray-500">Советский р-н</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 Reboot. Волгоград. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

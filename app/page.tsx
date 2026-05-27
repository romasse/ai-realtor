"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Home,
  KeyRound,
  LineChart,
  MapPin,
  Megaphone,
  MessageCircle,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const TELEGRAM = "https://t.me/romasio";
const INSTAGRAM = "https://instagram.com/roman.shabat";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const benefits = [
  {
    icon: Brain,
    title: "AI-подбор объектов",
    text: "Быстро нахожу варианты под бюджет, район, цель покупки и ликвидность.",
  },
  {
    icon: BarChart3,
    title: "Аналитика рынка",
    text: "Сравниваю цены, динамику, спрос и реальные перспективы объекта.",
  },
  {
    icon: Megaphone,
    title: "Умный маркетинг",
    text: "Упаковываю объект как продукт: фото, видео, Reels, тексты и реклама.",
  },
  {
    icon: ShieldCheck,
    title: "Безопасные сделки",
    text: "Сопровождаю процесс, помогаю избегать ошибок и лишней суеты.",
  },
];

const seller = [
  "AI-анализ цены и конкурентов",
  "Упаковка квартиры как продающего продукта",
  "Продающие тексты, Reels и презентации",
  "Таргетированная реклама и работа с лидами",
  "Стратегия переговоров до результата",
];

const buyer = [
  "Подбор объектов под вашу цель",
  "Фильтрация слабых и переоценённых вариантов",
  "Анализ района, цены и ликвидности",
  "Экономия времени на просмотрах",
  "Сопровождение до финальной сделки",
];

export default function Page() {
  return (
    <main className="noise min-h-screen overflow-hidden bg-[#05070d] text-white">
      <Hero />
      <Pain />
      <Approach />
      <SellersBuyers />
      <Assistant />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen bg-grid">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(38,217,255,.24),transparent_34%),radial-gradient(circle_at_20%_72%,rgba(217,164,65,.18),transparent_36%),linear-gradient(180deg,rgba(5,7,13,.1),#05070d_94%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#05070d] to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-7 md:px-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d9a441]/40 bg-[#d9a441]/10">
              <Bot className="text-[#d9a441]" size={24} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[.28em] text-white/45">AI Realtor</p>
              <p className="font-bold">Роман Суббота</p>
            </div>
          </div>
          <div className="hidden gap-3 md:flex">
            <a href={INSTAGRAM} className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 transition hover:border-[#d9a441] hover:text-[#d9a441]">
              Instagram
            </a>
            <a href={TELEGRAM} className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-[#d9a441]">
              Telegram
            </a>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial="hidden" animate="show" variants={fade} transition={{ duration: .7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9a441]/35 bg-[#d9a441]/10 px-4 py-2 text-sm text-[#d9a441]">
              <Sparkles size={16} /> Недвижимость нового поколения в Днепре
            </div>

            <h1 className="mobile-title max-w-4xl text-6xl font-black leading-[.92] tracking-[-.06em] md:text-8xl">
              Я — <span className="gold-text">технологичный</span> риэлтор
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74 md:text-xl">
              Сегодня я внедрил искусственный интеллект в свою работу. AI помогает мне находить объекты быстрее,
              анализировать рынок точнее и выстраивать маркетинг умнее.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/74 md:text-xl">
              Пока другие тратят часы на ручной поиск и рутину — я уже работаю над
              <span className="text-[#d9a441]"> стратегией твоей сделки</span>.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={TELEGRAM} className="group rounded-full bg-[#d9a441] px-7 py-4 text-center font-black text-black transition hover:scale-[1.02]">
                Получить AI-подбор <ChevronRight className="ml-1 inline transition group-hover:translate-x-1" size={18} />
              </a>
              <a href="#approach" className="rounded-full border border-white/15 px-7 py-4 text-center font-bold text-white/85 transition hover:border-[#d9a441] hover:text-[#d9a441]">
                Как это работает
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              <Stat value="15+" label="лет опыта" />
              <Stat value="AI" label="подбор" />
              <Stat value="24/7" label="ассистент" />
              <Stat value="Днепр" label="рынок" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .94, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .15 }} className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-[#26d9ff]/10 blur-3xl" />
            <div className="glass glow relative overflow-hidden rounded-[2rem] p-5 md:p-7">
              <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#26d9ff]/20 blur-3xl" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[.25em] text-white/45">AI Dashboard</p>
                  <div className="rounded-full border border-[#26d9ff]/30 bg-[#26d9ff]/10 px-3 py-1 text-xs text-[#26d9ff]">LIVE</div>
                </div>

                <div className="rounded-3xl border border-[#26d9ff]/20 bg-black/35 p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <Radar className="text-[#26d9ff]" />
                    <div>
                      <h3 className="font-bold text-[#d9a441]">AI-анализ недвижимости</h3>
                      <p className="text-sm text-white/45">подбор • цена • маркетинг</p>
                    </div>
                  </div>
                  <Progress title="Подбор объектов" value={92} />
                  <Progress title="Аналитика цены" value={88} />
                  <Progress title="Маркетинг объекта" value={95} />
                  <Progress title="Стратегия сделки" value={97} />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <Mini icon={Building2} title="Квартиры" />
                  <Mini icon={Home} title="Дома" />
                  <Mini icon={KeyRound} title="Аренда" />
                  <Mini icon={LineChart} title="Инвестиции" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const items = [
    ["Ручной поиск", "Много времени уходит на рутину и хаотичные подборки."],
    ["Нет аналитики", "Цена часто определяется на глаз, а не на данных рынка."],
    ["Слабая упаковка", "Объект выглядит как ещё одно объявление среди сотен."],
    ["Медленная реакция", "Пока риэлтор думает — хороший объект уже ушёл."],
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
      <div className="mb-5 text-sm uppercase tracking-[.28em] text-[#d9a441]">Проблема рынка</div>
      <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-[-.04em] md:text-6xl">
        Обычный подход уже не работает так быстро, как нужно клиенту
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {items.map(([title, text]) => (
          <div className="glass rounded-3xl p-6" key={title}>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/10 text-red-300">×</div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-3 leading-7 text-white/60">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="relative px-5 py-20 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(217,164,65,.12),transparent_34%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-5 text-sm uppercase tracking-[.28em] text-[#d9a441]">Мой подход</div>
        <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-[-.04em] md:text-6xl">
          Технологии + опыт = максимальный результат для клиента
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-[#d9a441]/40" key={item.title}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d9a441]/10">
                <item.icon className="text-[#d9a441]" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/62">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SellersBuyers() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:px-10 lg:grid-cols-2">
      <DealCard
        eyebrow="Для продавцов"
        title="Превращаю объект в продающий продукт"
        text="Не просто размещаю объявление. Создаю позиционирование, упаковку и стратегию продвижения."
        items={seller}
        cta="Оценить мой объект"
      />
      <DealCard
        eyebrow="Для покупателей"
        title="Подбираю недвижимость под вашу стратегию"
        text="Смотрю не только на метры, а на ликвидность, район, цену, состояние и потенциал."
        items={buyer}
        cta="Подобрать квартиру"
      />
    </section>
  );
}

function Assistant() {
  return (
    <section className="relative px-5 py-20 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(38,217,255,.13),transparent_35%)]" />
      <div className="glass relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-8 text-center md:p-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#26d9ff]/15 blur-3xl" />
        <div className="relative">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#d9a441]/10">
            <MessageCircle className="text-[#d9a441]" size={34} />
          </div>
          <h2 className="text-4xl font-black leading-tight tracking-[-.04em] md:text-6xl">
            Попробуйте AI-подбор прямо сейчас
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/68">
            Мой AI-ассистент задаст несколько вопросов и поможет понять, какие объекты подходят именно вам.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={TELEGRAM} className="rounded-full bg-[#d9a441] px-8 py-4 font-black text-black transition hover:scale-[1.02]">
              Перейти в Telegram
            </a>
            <a href={INSTAGRAM} className="rounded-full border border-white/15 px-8 py-4 font-bold text-white/80 transition hover:border-[#d9a441] hover:text-[#d9a441]">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-9 text-center text-sm text-white/45">
      Роман Суббота | Риэлтор | Днепр | AI-подбор недвижимости
    </footer>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <p className="text-2xl font-black text-[#d9a441]">{value}</p>
      <p className="mt-1 text-sm text-white/55">{label}</p>
    </div>
  );
}

function Progress({ title, value }: { title: string; value: number }) {
  return (
    <div className="mb-4">
      <div className="mb-2 flex justify-between text-sm text-white/68">
        <span>{title}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-[#26d9ff]" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Mini({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.04] p-4">
      <Icon className="mb-3 text-[#d9a441]" size={24} />
      <p className="font-bold">{title}</p>
    </div>
  );
}

function DealCard({
  eyebrow,
  title,
  text,
  items,
  cta,
}: {
  eyebrow: string;
  title: string;
  text: string;
  items: string[];
  cta: string;
}) {
  return (
    <div className="glass rounded-[2rem] p-7 md:p-8">
      <p className="text-sm uppercase tracking-[.24em] text-[#d9a441]">{eyebrow}</p>
      <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-.035em] md:text-4xl">{title}</h3>
      <p className="mt-4 leading-8 text-white/65">{text}</p>
      <div className="mt-7 space-y-4">
        {items.map((item) => (
          <div className="flex gap-3" key={item}>
            <CheckCircle2 className="mt-1 shrink-0 text-[#d9a441]" size={21} />
            <p className="text-white/78">{item}</p>
          </div>
        ))}
      </div>
      <a href={TELEGRAM} className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-black text-black transition hover:bg-[#d9a441]">
        {cta}
      </a>
    </div>
  );
}

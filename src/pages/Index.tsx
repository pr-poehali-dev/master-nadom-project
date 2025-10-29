import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    { name: "Сантехника", icon: "Droplet", description: "Установка, ремонт, замена" },
    { name: "Электрика", icon: "Zap", description: "Проводка, розетки, освещение" },
    { name: "Ремонт техники", icon: "Wrench", description: "Быстрый ремонт на дому" },
    { name: "Мебель", icon: "Armchair", description: "Сборка и ремонт" },
    { name: "Уборка", icon: "Sparkles", description: "Качественная уборка квартир" },
    { name: "Другие услуги", icon: "MoreHorizontal", description: "Все виды работ" },
  ];

  const masters = [
    {
      name: "Алексей Иванов",
      specialty: "Сантехник",
      rating: 4.9,
      reviews: 127,
      experience: "8 лет опыта",
      image: "/placeholder.svg",
    },
    {
      name: "Дмитрий Петров",
      specialty: "Электрик",
      rating: 5.0,
      reviews: 93,
      experience: "12 лет опыта",
      image: "/placeholder.svg",
    },
    {
      name: "Сергей Смирнов",
      specialty: "Мастер на все руки",
      rating: 4.8,
      reviews: 156,
      experience: "6 лет опыта",
      image: "/placeholder.svg",
    },
  ];

  const testimonials = [
    {
      name: "Мария К.",
      text: "Быстро нашла мастера для ремонта крана. Приехал через час, все сделал качественно!",
      rating: 5,
    },
    {
      name: "Игорь С.",
      text: "Отличный сервис! Электрик решил проблему с проводкой за один визит. Рекомендую!",
      rating: 5,
    },
    {
      name: "Анна Л.",
      text: "Собрали мебель быстро и аккуратно. Мастер был вежливым и профессиональным.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Как быстро приедет мастер?",
      answer: "В среднем мастер приезжает в течение 1-2 часов после оформления заявки. В срочных случаях возможен выезд в течение 30 минут.",
    },
    {
      question: "Какая стоимость услуг?",
      answer: "Цены зависят от вида работ и сложности. Мастер озвучивает стоимость после осмотра. Диагностика часто бесплатная.",
    },
    {
      question: "Есть ли гарантия на работы?",
      answer: "Да, на все выполненные работы предоставляется гарантия от 30 дней до 1 года в зависимости от типа услуги.",
    },
    {
      question: "Как выбрать мастера?",
      answer: "Вы можете выбрать мастера по рейтингу, отзывам и специализации. Также система автоматически подберет подходящего специалиста.",
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">МастерНаДом</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#masters" className="text-foreground hover:text-primary transition-colors">Мастера</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button size="lg" className="hidden md:flex">
            Вызвать мастера
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Мастер на дом за 30 минут
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Надежные специалисты для решения любых задач. Сантехника, электрика, ремонт — всё в одном месте
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Search" className="mr-2" size={20} />
                Найти мастера
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-primary" size={20} />
                <span>Проверенные мастера</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" className="text-primary" size={20} />
                <span>Гарантия на работы</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" className="text-primary" size={20} />
                <span>Быстрый выезд</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Выберите нужную категорию или опишите свою задачу</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Подробнее <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="masters" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Лучшие мастера</h2>
            <p className="text-lg text-muted-foreground">Опытные специалисты с высоким рейтингом</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {masters.map((master, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={master.image} alt={master.name} />
                    <AvatarFallback>{master.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{master.name}</CardTitle>
                  <CardDescription className="text-base">{master.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-center gap-1">
                    <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                    <span className="font-semibold">{master.rating}</span>
                    <span className="text-muted-foreground">({master.reviews} отзывов)</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Briefcase" size={16} />
                    <span>{master.experience}</span>
                  </div>
                  <Button className="w-full mt-4">
                    <Icon name="Phone" className="mr-2" size={16} />
                    Вызвать мастера
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-lg text-muted-foreground">Ответы на часто задаваемые вопросы</p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Готовы помочь вам 24/7. Выберите удобный способ связи
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+74951234567" className="text-primary font-semibold hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@masternadom.org" className="text-primary font-semibold hover:underline">
                    info@masternadom.org
                  </a>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">Чат</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="text-primary font-semibold">
                    Начать диалог
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" className="text-primary" size={28} />
                <span className="text-xl font-bold">МастерНаДом</span>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                Надежный сервис вызова мастеров на дом. Работаем с 2020 года.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">Сантехника</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Электрика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ремонт техники</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Все услуги</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мастерам</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнерам</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@masternadom.org</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
            © 2024 МастерНаДом. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

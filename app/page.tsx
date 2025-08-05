"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  ExternalLink,
  Linkedin,
  Twitter,
  Palette,
  Check,
  Instagram,
  Send,
  CircleHelp,
} from "lucide-react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import toast, { Toaster } from "react-hot-toast";

const themeColors = [
  { name: "Blue", value: "blue", primary: "#3b82f6", secondary: "#1e40af" },
  { name: "Purple", value: "purple", primary: "#8b5cf6", secondary: "#7c3aed" },
  // { name: "Purple", value: "purple", primary: "#c2209e", secondary: "#d93aed" },
  { name: "Green", value: "green", primary: "#10b981", secondary: "#059669" },
  { name: "Orange", value: "orange", primary: "#f59e0b", secondary: "#d97706" },
  { name: "Red", value: "red", primary: "#ef4444", secondary: "#dc2626" },
  { name: "Teal", value: "teal", primary: "#14b8a6", secondary: "#0d9488" },
];

const services = [
  {
    id: 1,
    title: "Presença Digital Profissional",
    description:
      "Páginas personalizadas para apresentar seus serviços, produtos ou especialidade de forma clara, moderna e confiável — ideal para profissionais, empresas e prestadores de serviço.",
    price: "A partir de R$2.500",
    duration: "2 a 4 semanas",
    features: [
      "Visual Responsivo",
      "Apresentação Clara",
      "Fácil Navegação",
      "Pronto para Celulares",
    ],
    rating: 4.9,
    reviews: 24,
    image: "/placeholder.svg?height=300&width=400",
    // image: "/presenca-digital.png",
  },
  {
    id: 2,
    title: "Marca e Identidade Visual",
    description:
      "Criação de logotipo, paleta de cores, materiais digitais e impressos que reforçam a sua imagem, seja você profissional da saúde, da estética, consultor ou empreendedor.",
    price: "A partir de R$1.800",
    duration: "1 a 3 semanas",
    features: ["Logo Profissional", "Cartão Digital", "Material Promocional", "Identidade Coesa"],
    rating: 4.8,
    reviews: 18,
    image: "/placeholder.svg?height=300&width=400",
    // image: "/identidade-visual.png",
  },
  {
    id: 3,
    title: "Divulgação e Captação de Clientes",
    description:
      "Estratégias digitais para atrair novos clientes, fortalecer sua presença online e facilitar o contato — com foco em redes sociais, anúncios e agendamentos.",
    price: "A partir de R$1.200/mês",
    duration: "Contínuo",
    features: [
      "Gestão de Conteúdo",
      "Redes Sociais",
      "Captação Inteligente",
      "Resultados Mensuráveis",
    ],
    rating: 4.7,
    reviews: 32,
    image: "/placeholder.svg?height=300&width=400",
    // image: "/marketing-redes.png",
  },
  {
    id: 4,
    title: "Materiais de Apresentação e Portfólio",
    description:
      "Slides, catálogos, kits digitais e folders que apresentam com clareza seus diferenciais, serviços, produtos ou treinamentos.",
    price: "A partir de R$1.200",
    duration: "1 a 2 semanas",
    features: [
      "Catálogos Visuais",
      "Kits de Apresentação",
      "Material para WhatsApp",
      "Pronto para Impressão",
    ],
    rating: 4.9,
    reviews: 15,
    image: "/placeholder.svg?height=300&width=400",
    // image: "/apresentacao.png",
  },
  {
    id: 5,
    title: "Loja Online e Vendas Digitais",
    description:
      "Soluções completas para quem quer vender produtos, cursos, pacotes ou serviços online, com estrutura simples e intuitiva.",
    price: "A partir de R$3.500",
    duration: "3 a 6 semanas",
    features: [
      "Pagamentos Integrados",
      "Catálogo Visual",
      "Painel Gerenciável",
      "Checkout Otimizado",
    ],
    rating: 4.8,
    reviews: 21,
    image: "/placeholder.svg?height=300&width=400",
    // image: "/loja-online.png",
  },
  {
    id: 6,
    title: "Consultoria e Apoio Estratégico",
    description:
      "Orientação personalizada para organizar sua presença digital, estruturar ofertas, melhorar seu posicionamento e gerar mais resultados.",
    price: "A partir de R$150/hora",
    duration: "Flexível",
    features: [
      "Diagnóstico de Imagem",
      "Planejamento Digital",
      "Melhoria de Atendimento",
      "Posicionamento de Marca",
    ],
    rating: 4.9,
    reviews: 28,
    image: "/placeholder.svg?height=300&width=400",
    // image: "/consultoria.png",
  },
];

const portfolio = [
  {
    id: 1,
    title: "Site para Espaço de Estética e Bem-Estar",
    description:
      "Página institucional com agendamento online, galeria de serviços e apresentação da equipe.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Estética", "Beleza", "Agendamento"],
    link: "#",
  },
  {
    id: 2,
    title: "Identidade Visual para Fisioterapeuta Autônoma",
    description:
      "Desenvolvimento de marca pessoal, com logo, cartão digital, posts e padrão visual para redes sociais.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Saúde", "Marca Pessoal", "Digital"],
    link: "#",
  },
  {
    id: 3,
    title: "Loja Online de Produtos Naturais",
    description:
      "E-commerce completo com integração de pagamentos, estoque, banners e painel administrativo simples.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Loja Online", "Produtos", "Vendas"],
    link: "#",
  },
  {
    id: 4,
    title: "Apresentação Comercial para Consultoria Empresarial",
    description:
      "Slide deck com identidade visual e estrutura para reuniões, propostas e treinamentos.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Consultoria", "Apresentação", "Corporativo"],
    link: "#",
  },
  {
    id: 5,
    title: "Site para Personal Trainer",
    description:
      "Landing page com serviços, resultados, planos de treino e chamada para contato no WhatsApp.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Saúde", "Atendimento Online", "Portfólio"],
    link: "#",
  },
  {
    id: 6,
    title: "Landing Page para Psicopedagoga",
    description:
      "Página de apresentação com perfil profissional, serviços, depoimentos de pais e botão direto para agendamento via WhatsApp.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Educação", "Saúde", "Atendimento Individual"],
    link: "#",
  },
];

export default function PortfolioSite() {
  const [currentTheme, setCurrentTheme] = useState(themeColors[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleThemeChange = (theme: (typeof themeColors)[0]) => {
    setCurrentTheme(theme);
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--primary-dark", theme.secondary);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = "https://formspree.io/f/mvgqwvqy";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Erro ao enviar a mensagem.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <style jsx global>{`
        :root {
          --primary: ${currentTheme.primary};
          --primary-dark: ${currentTheme.secondary};
        }
        .theme-primary {
          background-color: var(--primary);
        }
        .theme-primary-dark {
          background-color: var(--primary-dark);
        }
        .theme-text-primary {
          color: var(--primary);
        }
        .theme-border-primary {
          border-color: var(--primary);
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full px-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="theme-primary w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-xl">Portfolio</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Portfólio
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre Nós
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Palette className="w-4 h-4 mr-2" />
                  Temas
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {themeColors.map((theme) => (
                  <DropdownMenuItem
                    key={theme.value}
                    onClick={() => handleThemeChange(theme)}
                    className="flex items-center space-x-2"
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme.primary }}
                    />
                    <span>{theme.name}</span>
                    {currentTheme.value === theme.value && <Check className="w-4 h-4 ml-auto" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="py-15 md:py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-5 md:gap-12">
            <motion.div
              className="text-center lg:text-left max-w-2xl w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h1 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
                Apresente seus Serviços
                <br />
                <span className="theme-text-primary text-3xl md:text-5xl">
                  com Profissionalismo
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 mx-auto lg:mx-0">
                Um portfólio digital moderno para profissionais, empresas e prestadores de serviços
                que desejam divulgar seus produtos, atrair clientes e fortalecer sua presença
                online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#services">
                  <Button
                    size="lg"
                    className="w-full theme-primary hover:theme-primary-dark opacity-90 hover:opacity-100"
                  >
                    Conheça Meu Trabalho
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <motion.div
                  animate={{
                    rotate: [0, -2, 2, -2, 2, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-emerald-100 border-emerald-700 bg-emerald-900 opacity-90 hover:opacity-100 hover:text-emerald-100 hover:bg-emerald-900"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                    WhatsApp
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Foto flutuante*/}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <motion.div
                className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Foto de apresentação"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Feed */}
      <section id="services" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              Serviços e Soluções
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              Soluções completas, pensadas para destacar o seu trabalho e atender às necessidades do
              seu negócio
            </motion.p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.05 }}
          >
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 pt-0 h-full flex flex-col"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{service.rating}</span>
                    <span className="text-xs text-muted-foreground">({service.reviews})</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6 py-0">
                  <CardHeader className="px-0 pt-0 pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="secondary">{service.duration}</Badge>
                    </div>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                  </CardHeader>
                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-2 flex justify-between items-center">
                    <span className="text-base font-semibold theme-text-primary">
                      {service.price}
                    </span>
                    <Button size="sm" className="theme-primary hover:theme-primary-dark">
                      Saiba Mais
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              Trabalhos em Destaque
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              Uma vitrine de projetos recentes e parcerias de sucesso que demonstram experiência e
              resultados
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.05 }}
          >
            {portfolio.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 pt-0"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver mais
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/50 overflow-x-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.05 }}
              style={{ willChange: "transform" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Experiência</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Com mais de uma década de atuação em soluções digitais, somos especializados em
                criar experiências inovadoras que impulsionam o crescimento de negócios. Nossa
                abordagem multidisciplinar une expertise técnica com visão criativa.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold theme-text-primary mb-2">150+</h3>
                  <p className="text-muted-foreground">Projetos Concluídos</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold theme-text-primary mb-2">98%</h3>
                  <p className="text-muted-foreground">Satisfação dos Clientes</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold theme-text-primary mb-2">5+</h3>
                  <p className="text-muted-foreground">Anos de Experiência</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold theme-text-primary mb-2">24/7</h3>
                  <p className="text-muted-foreground">Suporte Disponível</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm">
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" className="mr-1" />
                  WhatsApp
                </Button>
                <Button variant="outline" size="sm">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.05 }}
              style={{ willChange: "transform" }}
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Sobre nós"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 overflow-x-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              Entre em Contato
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              Pronto para iniciar seu próximo projeto? Vamos conversar sobre como podemos
              transformar sua ideia em realidade.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-0">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.05 }}
            >
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="theme-primary w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">annavitoriasm.cxm@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="theme-primary w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-muted-foreground">+55 (99) 99142-4779</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="theme-primary w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Local</h4>
                    <p className="text-muted-foreground">Teresina, PI</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.05 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Envie uma Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e retornaremos o contato em até 24 horas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label className="mb-2" htmlFor="name">
                        Nome
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label className="mb-2" htmlFor="email">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label className="mb-2" htmlFor="message">
                        Mensagem
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full theme-primary hover:theme-primary-dark">
                      Enviar <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 flex flex-col items-center justify-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <CircleHelp className="w-8 h-8 text-primary" />
              Perguntas Frequentes
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              Tire suas dúvidas rapidamente sobre nossos serviços e processos.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem className="px-4" value="item-1">
                <AccordionTrigger className="md:text-lg">
                  Quanto tempo leva para entregar um projeto?
                </AccordionTrigger>
                <AccordionContent>
                  O prazo depende do tipo de serviço contratado. Sites institucionais normalmente
                  ficam prontos entre 2 a 4 semanas, enquanto lojas virtuais podem levar até 6
                  semanas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="px-4" value="item-2">
                <AccordionTrigger className="md:text-lg" value="item-2">
                  Vocês oferecem suporte após a entrega?
                </AccordionTrigger>
                <AccordionContent>
                  Sim. Garantimos suporte para ajustes e dúvidas por um período determinado no
                  contrato, e também oferecemos planos de manutenção contínua.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="px-4" value="item-3">
                <AccordionTrigger className="md:text-lg" value="item-3">
                  É possível parcelar o pagamento?
                </AccordionTrigger>
                <AccordionContent>
                  Sim. Oferecemos condições de pagamento flexíveis que se adaptam à sua necessidade,
                  incluindo parcelamento via Pix Parcelado ou cartão de crédito.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="px-4" value="item-4">
                <AccordionTrigger className="md:text-lg" value="item-4">
                  Posso solicitar alterações no design?
                </AccordionTrigger>
                <AccordionContent>
                  Claro! Trabalhamos com etapas de aprovação para garantir que o resultado final
                  esteja de acordo com a sua visão e identidade.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="theme-primary w-8 h-8 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="font-bold text-xl">Portfólio</span>
              </div>
              <p className="text-muted-foreground">
                Soluções digitais modernas para destacar o seu trabalho, atrair clientes e
                fortalecer sua presença online.
              </p>
            </div>

            {/* Serviços */}
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-muted-foreground">
                {services.slice(0, 4).map((service) => (
                  <li key={service.id} className="line-clamp-1">
                    <Link href="#services" className="hover:text-primary transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfólio */}
            <div>
              <h4 className="font-semibold mb-4">Portfólio</h4>
              <ul className="space-y-2 text-muted-foreground">
                {portfolio.slice(0, 4).map((item) => (
                  <li key={item.id} className="line-clamp-1">
                    <Link href="#portfolio" className="hover:text-primary transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>annavitoriasm.cxm@gmail.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+55 (99) 99142-4779</span>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Teresina, PI</span>
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white">
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white">
                  <Mail className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Portfólio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

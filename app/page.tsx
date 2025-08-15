"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Instagram,
  Send,
  CircleHelp,
  Menu,
  Store,
  Rocket,
  Users,
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
import toast from "react-hot-toast";
import BackToTopButton from "@/components/back-to-top-button";
import { AnimatedTypingText } from "@/components/typing-text";

import services from "@/constains/services";
import portfolio from "@/constains/portfolio";
import ServiceItem from "@/components/service-item";

export default function PortfolioSite() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/mvgqwvqy", {
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
      {/* Header */}
      <header className="sticky top-0 z-50 w-full px-8 md:px-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 relative flex items-center justify-center">
              <Image src="/logo.svg" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-semibold text-lg md:text-xl">Anatech Soluções</span>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Segmentos
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Serviços
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

          {/* Menu Mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="p-0">
              <Button variant="ghost" size="icon" className="md:hidden p-0">
                <Menu className="w-6 h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[calc(100%+1rem)] w-fit mr-3.5">
              <DropdownMenuItem asChild>
                <Link href="#services" className="flex items-center space-x-2 w-full">
                  <Store className="w-4 h-4 text-primary" />
                  <span>Segmentos</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#portfolio" className="flex items-center space-x-2 w-full">
                  <Rocket className="w-4 h-4 text-primary" />
                  <span>Serviços</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#about" className="flex items-center space-x-2 w-full">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Sobre Nós</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#contact" className="flex items-center space-x-2 w-full">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>Contato</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        id="home"
        className="py-15 md:py-20 px-4 relative bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/home-bg.svg')" }}
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
              <h1 className="text-xl md:text-4xl font-bold mb-6 leading-tight whitespace-nowrap">
                Gestão Completa para seu Negócio
                <br />
                <span className="text-primary text-3xl md:text-5xl">com Anatech Soluções</span>
              </h1>

              <p className="text-sm md:text-xl text-muted-foreground mb-8 mx-auto lg:mx-0">
                Centralize suas vendas, financeiro, estoque e operações em um só sistema! Soluções
                sob medida, implantação ágil e suporte dedicado.
                <br />
                <AnimatedTypingText />
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#services">
                  <Button
                    size="lg"
                    className="w-full theme-primary hover:theme-primary-dark opacity-90 hover:opacity-100"
                  >
                    Conheça nosso Trabalho
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>

                <motion.div
                  animate={{ rotate: [0, -2, 2, -2, 2, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                >
                  <Link
                    href="https://wa.me/5599992013779?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Anatech."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full text-emerald-100 border-emerald-700 bg-emerald-900 opacity-90 hover:opacity-100 hover:text-emerald-100 hover:bg-emerald-900"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                      &nbsp;WhatsApp
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Ilustração flutuante */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <motion.div
                className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/ilustracao.png"
                  alt="Ilustração Anatech Soluções"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services */}
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
              Segmentos que Atendemos
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              Nossas soluções de gestão atendem diferentes setores do mercado, adaptando-se às
              necessidades de cada negócio. Confira abaixo os segmentos que atendemos.
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
              <ServiceItem key={service.id} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
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
              Nossos Serviços
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              Confira nossos serviços principais, projetados para otimizar a gestão do seu negócio e
              impulsionar seu crescimento.
            </motion.p>
          </div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.05 }}
          >
            {portfolio.map((project) => {
              const Icon = project.icon;
              return (
                <Card key={project.id} className="h-full flex flex-col justify-center items-center">
                  <CardHeader className="w-full items-center text-center space-y-2">
                    <div className="flex items-center self-center justify-center w-14 h-14 rounded-full bg-primary/10">
                      {Icon ? (
                        <Icon className="w-7 h-7 text-primary" aria-hidden />
                      ) : (
                        <CircleHelp className="w-7 h-7 text-primary" aria-hidden />
                      )}
                    </div>
                    <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About */}
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
                  <h3 className="text-2xl font-bold text-primary mb-2">250+</h3>
                  <p className="text-muted-foreground">Clientes na Casa</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
                  <p className="text-muted-foreground">Versatilidade nas Soluções</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
                  <p className="text-muted-foreground">Anos de Experiência</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
                  <p className="text-muted-foreground">Suporte Disponível</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://wa.me/5599992013779?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Anatech."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="border-primary hover:text-primary">
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                    WhatsApp
                  </Button>
                </Link>
                <Button variant="outline" size="sm" className="border-primary hover:text-primary">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="border-primary hover:text-primary">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
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

      {/* Contact */}
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
                  <div className="text-primary w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">anatechsolucoes2@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-primary w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-muted-foreground">+55 (99) 99201-3779</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-primary w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Local</h4>
                    <p className="text-muted-foreground">Caxias, MA</p>
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
                    Preencha o formulário abaixo e retornaremos o contato em até 2 horas.
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

      {/* FAQ */}
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
                  Vocês realizam orçamentos?
                </AccordionTrigger>
                <AccordionContent>
                  Sim. Realizamos orçamentos personalizados de acordo com as necessidades do seu
                  negócio.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="px-4" value="item-2">
                <AccordionTrigger className="md:text-lg">
                  Posso testar o sistema antes de contratar?
                </AccordionTrigger>
                <AccordionContent>
                  Sim. Oferecemos teste grátis para os sistemas disponibilizados pela nossa empresa,
                  para que você conheça as funcionalidades antes de fechar o contrato.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="px-4" value="item-3">
                <AccordionTrigger className="md:text-lg">
                  Vocês fazem migração de sistema?
                </AccordionTrigger>
                <AccordionContent>
                  Sim. Realizamos migração do seu sistema atual para nossas soluções, com importação
                  de dados (quando tecnicamente viável) e acompanhamento durante a transição.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="px-4" value="item-4">
                <AccordionTrigger className="md:text-lg">
                  Quais são os horários de suporte?
                </AccordionTrigger>
                <AccordionContent>
                  Nosso suporte funciona de segunda a sábado, das 08:00 às 20:00, via WhatsApp e,
                  para a região, com atendimento presencial.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="px-4" value="item-5">
                <AccordionTrigger className="md:text-lg">
                  Como funciona o atendimento emergencial?
                </AccordionTrigger>
                <AccordionContent>
                  Oferecemos atendimento emergencial para situações críticas, inclusive aos domingos
                  e feriados, para manter seu negócio operando sem interrupções.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="px-4" value="item-6">
                <AccordionTrigger className="md:text-lg">
                  Vocês oferecem suporte após a entrega?
                </AccordionTrigger>
                <AccordionContent>
                  Sim. Garantimos suporte para ajustes e dúvidas por um período definido em contrato
                  e também oferecemos planos de manutenção contínua.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="px-4" value="item-7">
                <AccordionTrigger className="md:text-lg">
                  Quais formas de pagamento vocês aceitam?
                </AccordionTrigger>
                <AccordionContent>
                  Aceitamos <strong>boleto</strong>, <strong>cartão</strong> (crédito/débito),
                  <strong> Pix</strong> e <strong>dinheiro</strong>. Consulte condições para
                  parcelamento.
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
                <div className="w-7 h-7 relative flex items-center justify-center">
                  <Image src="/logo.svg" alt="Logo" fill className="object-cover" />
                </div>
                <span className="font-bold text-xl">Anatech Soluções</span>
              </div>
              <p className="text-muted-foreground">
                Soluções digitais modernas para destacar o seu trabalho, atrair clientes e
                fortalecer sua presença online.
              </p>
            </div>

            {/* Serviços */}
            <div>
              <h4 className="font-semibold mb-4">Segmentos</h4>
              <ul className="space-y-2 text-muted-foreground">
                {services.slice(0, 6).map((service) => (
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
              <h4 className="font-semibold mb-4">Serviços</h4>
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
                  <span>anatechsolucoes2@gmail.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+55 (99) 99201-3779</span>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Caxias, MA</span>
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <Button size="sm">
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" className="p-0" />
                </Button>
                <Button size="sm">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} T H L Silva - CNPJ 25.434.867/0001-86.{" "}
              <br className="md:hidden lg:hidden" /> Todos os direitos reservados. <br />
              <span className="text-xs">
                Desenvolvido por{" "}
                <a
                  href="https://wa.me/5599991424779?text=Ol%C3%A1!%20Encontrei%20seu%20contato%20como%20desenvolvedora%20de%20sistemas%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Podemos%20falar%3F"
                  className="underline hover:text-primary"
                >
                  AnvyLab Desenvolvimentos
                </a>
              </span>
            </p>
          </div>
        </div>
        <BackToTopButton />
      </footer>
    </div>
  );
}

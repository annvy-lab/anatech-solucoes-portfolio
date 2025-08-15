import {
  Store,
  Wrench,
  Headphones,
  Monitor,
  FileText,
  BadgeDollarSign,
} from "lucide-react";

const portfolio = [
  {
    id: 1,
    title: "Diversas soluções para o seu negócio",
    description:
      "Oferecemos sistemas completos para gestão de vendas, estoque e financeiro, adaptados para diferentes tipos de empresas. Seja você dono de um mercado, loja de roupas, pet shop ou restaurante, temos uma solução sob medida para facilitar seu dia a dia.",
    icon: Store,
    tags: ["Gestão", "Vendas", "Estoque", "Financeiro"],
  },
  {
    id: 2,
    title: "Implantação e treinamento",
    description:
      "Cuidamos de todo o processo de instalação e configuração do sistema, fazemos o cadastro inicial e treinamos sua equipe para que todos possam usar o sistema com segurança e agilidade.",
    icon: Wrench,
    tags: ["Implantação", "Treinamento", "Suporte Presencial"],
  },
  {
    id: 3,
    title: "Suporte sempre que você precisar",
    description:
      "Nosso suporte é dedicado: atendemos presencialmente clientes da região e de forma remota para demais localidades, garantindo que seu negócio nunca pare por falta de assistência.",
    icon: Headphones,
    tags: ["Suporte", "Atendimento Presencial", "Manutenção"],
  },
  {
    id: 4,
    title: "Equipamentos para sua operação",
    description:
      "Vendemos computadores, leitores de código de barras, impressoras térmicas, bobinas e outros equipamentos para que seu sistema funcione de forma completa e sem complicações.",
    icon: Monitor,
    tags: ["Equipamentos", "Hardware", "Acessórios"],
  },
  {
    id: 5,
    title: "Emissão de notas fiscais e certificados",
    description:
      "Com nossos sistemas, você pode emitir notas fiscais com praticidade e segurança. Também oferecemos a venda de certificados digitais para deixar sua operação 100% regularizada.",
    icon: FileText,
    tags: ["Notas Fiscais", "Certificados Digitais", "Regularização"],
  },
  {
    id: 6,
    title: "Planos e condições que cabem no seu bolso",
    description:
      "Trabalhamos com planos mensais, anuais e até licenciamento definitivo, para que você escolha a melhor forma de investir na tecnologia do seu negócio.",
    icon: BadgeDollarSign,
    tags: ["Preços", "Planos", "Licenciamento"],
  },
];

export default portfolio;

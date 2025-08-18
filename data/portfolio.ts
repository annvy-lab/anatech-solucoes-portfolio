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
      "Sistemas completos de gestão para vendas, estoque e financeiro em diferentes segmentos.",
    icon: Store,
    tags: ["Gestão", "Vendas", "Estoque", "Financeiro"],
  },
  {
    id: 2,
    title: "Implantação e treinamento",
    description:
      "Instalamos, configuramos e treinamos sua equipe para usar o sistema com agilidade.",
    icon: Wrench,
    tags: ["Implantação", "Treinamento", "Suporte Presencial"],
  },
  {
    id: 3,
    title: "Suporte sempre que você precisar",
    description:
      "Atendimento presencial na região e remoto para todo o Brasil, sempre que precisar.",
    icon: Headphones,
    tags: ["Suporte", "Atendimento Presencial", "Manutenção"],
  },
  {
    id: 4,
    title: "Equipamentos para sua operação",
    description: "Fornecemos computadores, leitores, impressoras e acessórios para seu negócio.",
    icon: Monitor,
    tags: ["Equipamentos", "Hardware", "Acessórios"],
  },
  {
    id: 5,
    title: "Emissão de notas fiscais e certificados",
    description: "Emita notas fiscais e adquira certificados digitais com praticidade e segurança.",
    icon: FileText,
    tags: ["Notas Fiscais", "Certificados Digitais", "Regularização"],
  },
  {
    id: 6,
    title: "Planos e condições que cabem no seu bolso",
    description: "Oferecemos planos mensais, anuais e licenciamento definitivo para seu negócio.",
    icon: BadgeDollarSign,
    tags: ["Preços", "Planos", "Licenciamento"],
  },
];


export default portfolio;

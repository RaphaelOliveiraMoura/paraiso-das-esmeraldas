export const contacts = {
  email: "condomínioparaisodasesmeraldas@gmail.com",
  phone: "(31) 9 9747-4933",

  complementaryContacts: {
    value: "financeiroparaisodasesmeraldas@gmail.com",
    description: "Email para solicitação de segunda via de boletos",
  },
};

export const address = {
  address: "Paraíso das Esmeradas - Condomínio Rural, MG-060 - Esmeraldas, MG",
  iframe: (
    <iframe
      title="Localização do Condomínio Paraíso das Esmeraldas"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.2622557526297!2d-44.4512147!3d-19.7014557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa71cee9fd5777d%3A0xc5a2060dd10f9133!2sPara%C3%ADso%20das%20Esmeradas%20-%20Condom%C3%ADnio%20Rural!5e0!3m2!1spt-BR!2sbr!4v1759712691434!5m2!1spt-BR!2sbr"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  ),
};

export const financial = {
  taxes: [
    { value: "R$ 50,00", description: "Taxa do condomínio" },
    {
      value: "R$ 30,00 até 10 mil litros, + R$ 3 a cada mil litros excedente",
      description: "Taxa de água",
      complementary:
        "Informe importante: é obrigatório ter reservatório de no mínimo 2 mil litros para cada 4 pessoas na residência. Caixa com bóia",
    },
  ],
};

export const busLines: BusLine[] = [
  {
    label: "Linha 6981 - CACHOEIRINHA / METRÔ",
    values: {
      "Segunda a Sexta": [
        { time: "05:30", arrival: "07:40" },
        { time: "10:30", arrival: "12:40" },
        { time: "15:10", arrival: "17:20" },
      ],
      Sábado: [
        { time: "07:00", arrival: "09:10" },
        { time: "16:30", arrival: "18:40" },
      ],
      Domingo: [
        { time: "08:00", arrival: "10:10" },
        { time: "18:00", arrival: "20:10" },
      ],
    },
  },
  {
    label: "ELIZEU SÃO JOSÉ / ESMERALDAS",
    values: {
      "Segunda a Sábado": [
        { time: "06:50", arrival: "11:00" },
        { time: "12:30", arrival: "17:00" },
      ],
    },
  },
];

type BusLine = {
  label: string;
  values: {
    [key: string]: { time: string; arrival: string }[];
  };
};

/**
 * Formata um número de telefone para URL do WhatsApp
 * @param phone - Número de telefone no formato "(31) 9 9747-4933"
 * @returns URL do WhatsApp formatada
 */
export const formatPhoneToWhatsApp = (phone: string): string => {
  // Remove todos os caracteres que não são números
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Se o número não começar com 55 (código do Brasil), adiciona
  const formattedPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
  
  return `https://wa.me/${formattedPhone}`;
};

/**
 * Formata um número de telefone para link tel: (mantém para compatibilidade)
 * @param phone - Número de telefone no formato "(31) 9 9747-4933"
 * @returns URL tel: formatada
 */
export const formatPhoneToTel = (phone: string): string => {
  return `tel:${phone.replace(/\D/g, '')}`;
};

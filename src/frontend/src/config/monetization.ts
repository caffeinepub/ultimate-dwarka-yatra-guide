// Centralized monetization configuration
export const WHATSAPP_NUMBER = '919876543210'; // Replace with actual WhatsApp number

export function getWhatsAppUrl(message?: string): string {
  const encodedMessage = message ? encodeURIComponent(message) : '';
  return `https://wa.me/${WHATSAPP_NUMBER}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}

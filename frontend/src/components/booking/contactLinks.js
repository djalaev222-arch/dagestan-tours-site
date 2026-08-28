// Единая точка с контактами для форм и футера.
// При запуске проекта поменяйте на реальные номер, ник и почту.
export const CONTACTS = {
  phoneDigits: '79280000000',
  phoneText: '+7 928 000-00-00',
  telegram: 'tropydagestana',
  email: 'info@tropy-dagestana.ru',
  address: 'Махачкала, ул. Даниялова, 12'
}

export function buildContactLinks({ subject, body }) {
  const text = encodeURIComponent(body)
  return {
    whatsapp: `https://wa.me/${CONTACTS.phoneDigits}?text=${text}`,
    telegram: `https://t.me/${CONTACTS.telegram}`,
    mailto: `mailto:${CONTACTS.email}?subject=${encodeURIComponent(subject)}&body=${text}`
  }
}

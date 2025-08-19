'use client';

import { ReactNode } from 'react';
import { ContactPopupProvider } from '@/contexts/ContactPopupContext';
import ContactPopup from '@/components/ui/ContactPopup';
import { useContactPopup } from '@/contexts/ContactPopupContext';

function ContactPopupWrapper() {
  const { isOpen, closePopup } = useContactPopup();
  return <ContactPopup isOpen={isOpen} onClose={closePopup} />;
}

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <ContactPopupProvider>
      {children}
      <ContactPopupWrapper />
    </ContactPopupProvider>
  );
}
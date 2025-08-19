'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ContactPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const ContactPopupContext = createContext<ContactPopupContextType | undefined>(undefined);

interface ContactPopupProviderProps {
  children: ReactNode;
}

export function ContactPopupProvider({ children }: ContactPopupProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <ContactPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </ContactPopupContext.Provider>
  );
}

export function useContactPopup() {
  const context = useContext(ContactPopupContext);
  if (context === undefined) {
    throw new Error('useContactPopup must be used within a ContactPopupProvider');
  }
  return context;
}
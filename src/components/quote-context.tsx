"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type QuoteDraft = {
  service: string;
  city: string;
  zip: string;
  details: string;
  name: string;
  phone: string;
  email: string;
  contactMethod: string;
  estimatorSummary: string;
};

const emptyDraft: QuoteDraft = {
  service: "",
  city: "",
  zip: "",
  details: "",
  name: "",
  phone: "",
  email: "",
  contactMethod: "",
  estimatorSummary: "",
};

type QuoteContextValue = {
  draft: QuoteDraft;
  setField: (field: keyof QuoteDraft, value: string) => void;
  setDraft: (partial: Partial<QuoteDraft>) => void;
  resetDraft: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [draft, setDraftState] = useState<QuoteDraft>(emptyDraft);

  function setField(field: keyof QuoteDraft, value: string) {
    setDraftState((d) => ({ ...d, [field]: value }));
  }

  function setDraft(partial: Partial<QuoteDraft>) {
    setDraftState((d) => ({ ...d, ...partial }));
  }

  function resetDraft() {
    setDraftState(emptyDraft);
  }

  return (
    <QuoteContext.Provider value={{ draft, setField, setDraft, resetDraft }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}

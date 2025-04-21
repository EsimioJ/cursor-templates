# Template Autenticazione Clerk

Questo template fornisce una configurazione completa di Clerk per l'autenticazione in un'applicazione Next.js App Router.

## Contenuti

- `middleware.ts`: Configurazione middleware per proteggere le rotte
- `auth.ts`: Utilità per l'autenticazione e verifica dello stato utente
- `UserButton.tsx`: Componente per il pulsante utente e gestione sessione
- `SignInButton.tsx`: Componente per il pulsante di accesso

## Come utilizzare

1. Copia tutti i file in questo template nel tuo progetto
2. Installa le dipendenze necessarie:
   ```bash
   npm install @clerk/nextjs
   ```
3. Aggiungi le variabili d'ambiente a `.env.local`:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   ```
4. Importa e utilizza i componenti nelle tue pagine

## Personalizzazione

Puoi personalizzare l'aspetto e il comportamento dei componenti in base alle esigenze del tuo progetto.

Per ulteriori informazioni, consulta la [documentazione ufficiale di Clerk](https://clerk.com/docs).

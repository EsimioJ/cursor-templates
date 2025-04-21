# Template API con tRPC

Questo template fornisce una configurazione completa di tRPC per la creazione di API type-safe in un'applicazione Next.js App Router.

## Contenuti

- `server.ts`: Configurazione server tRPC
- `client.ts`: Client tRPC per React
- `routers/`: Directory con router predefiniti
- `procedures.ts`: Helpers per definire procedure type-safe
- `trpc-provider.tsx`: Provider React per tRPC

## Come utilizzare

1. Copia tutti i file in questo template nel tuo progetto (tipicamente in `app/api/trpc/`)
2. Installa le dipendenze necessarie:
   ```bash
   npm install @trpc/server @trpc/client @trpc/react-query @tanstack/react-query zod
   ```
3. Importa il provider nel layout.tsx principale:

   ```tsx
   import { TRPCProvider } from "@/app/api/trpc/trpc-provider";

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           <TRPCProvider>{children}</TRPCProvider>
         </body>
       </html>
     );
   }
   ```

4. Implementa la route handler in `app/api/trpc/[trpc]/route.ts`

## Definire API type-safe

Questo template include router predefiniti per:

- Utenti (`routers/user.ts`)
- Post (`routers/post.ts`)

### Aggiungere un nuovo router

1. Crea un nuovo file in `routers/`, ad esempio `routers/product.ts`
2. Definisci nuove procedure usando i builder in `procedures.ts`
3. Importa il nuovo router in `routers/_app.ts` e aggiungilo al router principale

## Utilizzo nel frontend

```tsx
"use client";

import { trpc } from "@/app/api/trpc/client";

export default function MyComponent() {
  const { data, isLoading } = trpc.post.getAll.useQuery();

  if (isLoading) return <div>Caricamento...</div>;

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

## Documentazione

Per ulteriori informazioni, consulta la [documentazione ufficiale di tRPC](https://trpc.io/docs).

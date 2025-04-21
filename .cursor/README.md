# Configurazione Cursor per Next.js, Clerk, tRPC e altre librerie

Questa directory contiene configurazioni personalizzate per Cursor che migliorano la generazione di codice e forniscono template riutilizzabili per progetti Next.js moderni.

## Struttura

- `.cursor/rules/`: Regole per guidare l'AI nella generazione di codice
- `.cursor/templates/`: Template pronti all'uso per implementare funzionalità comuni

## Regole per Cursor

Le regole personalizzano il comportamento dell'AI per evitare errori comuni e seguire le best practice.

### Regole disponibili

- **nextjs.json**: Forza l'uso dell'App Router in Next.js
- **clerk.json**: Implementazione corretta del middleware di Clerk
- **shadcn.json**: Uso corretto di shadcn senza il suffisso -ui
- **latest-versions.json**: Assicura l'uso delle versioni più recenti delle librerie

### Come funzionano le regole

Le regole possono essere:

- `Always`: Applicate a tutte le conversazioni
- `Auto`: Applicate solo quando si lavora con file specifici
- `Ask`: L'AI chiede se applicare la regola

## Template riutilizzabili

I template forniscono implementazioni pronte all'uso per funzionalità comuni.

### Template disponibili

- **auth-clerk**: Autenticazione completa con Clerk
- **db-prisma**: Configurazione database con Prisma ORM
- **api-trpc**: API type-safe con tRPC
- **storage-uploadthing**: Gestione upload file con UploadThing
- **ui-shadcn**: Componenti UI con shadcn
- **state-zustand**: Gestione dello stato con Zustand
- **3d-r3f**: Visualizzazione 3D con React Three Fiber

### Come utilizzare i template

Puoi utilizzare i template in due modi:

#### 1. Copiare manualmente i file

Ogni template contiene un file README.md con istruzioni specifiche. Copia i file nel tuo progetto e segui le istruzioni.

#### 2. Utilizzare l'Agent di Cursor

Chiedi all'Agent di Cursor di implementare funzionalità basate su questi template:

- "Implementa l'autenticazione con Clerk seguendo il template auth-clerk"
- "Aggiungi un componente di caricamento file usando UploadThing"
- "Configura un database Prisma con i modelli User e Post"

### Combinazioni suggerite

I template sono progettati per funzionare bene insieme:

- **App Full-stack basic**: `auth-clerk` + `db-prisma` + `ui-shadcn`
- **Backend API**: `db-prisma` + `api-trpc` + `auth-clerk`
- **Media management**: `storage-uploadthing` + `db-prisma` + `auth-clerk`

## Riutilizzo in altri progetti

Per utilizzare queste configurazioni in un nuovo progetto:

1. Copia l'intera cartella `.cursor` nel progetto di destinazione
2. Personalizza le regole in base alle specifiche del progetto
3. Usa l'Agent di Cursor per implementare funzionalità dai template

## Aggiornamento e manutenzione

Per aggiornare le regole o i template:

1. Modifica i file JSON nella cartella `.cursor/rules`
2. Aggiorna i file nei template esistenti
3. Aggiungi nuovi template quando necessario

## Note per il controllo versione

Se preferisci non includere queste configurazioni nel repository Git:

1. Aggiungi `.cursor/` a `.gitignore`
2. Per condividere con il team, considera di creare un repository separato per le configurazioni Cursor

## Documentazione

Per ulteriori informazioni sui template, consulta i file README.md all'interno di ciascuna directory dei template.

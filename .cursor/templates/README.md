# Template Backend e Frontend per Cursor

Questa directory contiene una serie di template pronti all'uso per implementare rapidamente funzionalità comuni nelle tue applicazioni Next.js.

## Template disponibili

- **auth-clerk**: Autenticazione completa con Clerk
- **db-prisma**: Configurazione database con Prisma ORM
- **api-trpc**: API type-safe con tRPC
- **storage-uploadthing**: Gestione upload file con UploadThing
- **ui-shadcn**: Componenti UI con shadcn
- **state-zustand**: Gestione dello stato con Zustand
- **3d-r3f**: Visualizzazione 3D con React Three Fiber

## Come utilizzare i template

Puoi utilizzare i template in due modi:

### 1. Copiare manualmente i file

Ogni template contiene un file README.md con istruzioni specifiche. Puoi copiare manualmente i file nel tuo progetto e seguire le istruzioni.

### 2. Utilizzare l'Agent di Cursor

Puoi chiedere all'Agent di Cursor di implementare funzionalità basate su questi template. Esempi:

- "Implementa l'autenticazione con Clerk seguendo il template auth-clerk"
- "Aggiungi un componente di caricamento file usando UploadThing"
- "Configura un database Prisma con i modelli User e Post"

## Integrazione delle tecnologie

I template sono progettati per funzionare bene insieme. Ecco alcune combinazioni comuni:

### Applicazione Full-stack di base:

- `auth-clerk` + `db-prisma` + `ui-shadcn`

### API Backend completa:

- `db-prisma` + `api-trpc` + `auth-clerk`

### Gestione contenuti multimediali:

- `storage-uploadthing` + `db-prisma` + `auth-clerk`

## Personalizzazione

Ogni template può essere personalizzato in base alle tue esigenze. Consulta i README individuali per istruzioni specifiche.

## Contribuire

Se vuoi migliorare questi template o aggiungerne di nuovi:

1. Crea una nuova directory nel formato `[categoria]-[tecnologia]`
2. Aggiungi un README.md dettagliato
3. Includi tutti i file necessari per l'implementazione
4. Aggiorna questo README principale

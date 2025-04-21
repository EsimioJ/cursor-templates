# Template Database con Prisma ORM

Questo template fornisce una configurazione completa di Prisma ORM per la gestione del database in un'applicazione Next.js.

## Contenuti

- `schema.prisma`: Schema del database con modelli base (User, Profile, Post)
- `client.ts`: Client Prisma configurato con singleton pattern per Next.js
- `seed.ts`: Script per il seeding del database con dati iniziali
- `migrations/`: Directory per le migrazioni del database

## Come utilizzare

1. Copia tutti i file in questo template nel tuo progetto
2. Installa le dipendenze necessarie:
   ```bash
   npm install prisma @prisma/client
   npm install -D ts-node
   ```
3. Configura la connessione al database in `.env`:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
   ```
4. Inizializza il database:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Opzionalmente, esegui il seeding:
   ```bash
   npx prisma db seed
   ```

## Personalizzazione

Modifica lo schema.prisma per adattarlo alle necessità del tuo progetto.

### Estendere lo schema

1. Aggiungi nuovi modelli nello `schema.prisma`
2. Esegui `npx prisma generate` per aggiornare il client
3. Esegui `npx prisma migrate dev --name nome-migrazione` per applicare le modifiche al database

### Query comuni

Nel file client.ts sono incluse alcune funzioni di utilità per query comuni.

## Documentazione

Per ulteriori informazioni, consulta la [documentazione ufficiale di Prisma](https://www.prisma.io/docs).

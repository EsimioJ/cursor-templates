# Template UI con shadcn

Questo template fornisce una configurazione di base e componenti comuni di shadcn per un'applicazione Next.js.

## Contenuti

- `components/ui/`: Componenti UI di base di shadcn
- `components/common/`: Componenti personalizzati basati su shadcn
- `lib/utils.ts`: Utility functions per shadcn
- `styles/`: Configurazione dei temi e stili globali
- `tailwind.config.js`: Configurazione di Tailwind CSS

## Come utilizzare

1. Copia tutti i file in questo template nel tuo progetto
2. Installa le dipendenze necessarie:
   ```bash
   npm install tailwindcss postcss autoprefixer class-variance-authority clsx tailwind-merge lucide-react
   ```
3. Configura Tailwind CSS se non è già configurato:
   ```bash
   npx tailwindcss init -p
   ```
4. Importa e utilizza i componenti nelle tue pagine

## Componenti inclusi

Questo template include i seguenti componenti shadcn:

### Componenti UI di base

- Button
- Input
- Card
- Dialog
- Dropdown Menu
- Sheet
- Tabs
- Toast
- Toggle

### Componenti personalizzati

- DataTable: tabella con ordinamento, filtri e paginazione
- EmptyState: stato vuoto con illustrazione
- PageHeader: intestazione pagina con titolo e azioni
- Sidebar: barra laterale responsive

## Personalizzazione dei temi

Puoi personalizzare i temi modificando i file in `styles/`:

- `globals.css`: Stili globali e variabili CSS
- Modifica i colori nel file `tailwind.config.js`

### Temi predefiniti

Questo template include configurazioni per tema chiaro e scuro.

## Aggiunta di nuovi componenti

Per aggiungere nuovi componenti shadcn al progetto:

```bash
npx shadcn add [nome-componente]
```

## Documentazione

Per ulteriori informazioni, consulta la [documentazione ufficiale di shadcn/ui](https://ui.shadcn.com/docs)

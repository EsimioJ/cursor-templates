# Template Storage con UploadThing

Questo template fornisce una configurazione completa di UploadThing per il caricamento di file in un'applicazione Next.js App Router.

## Contenuti

- `uploadthing.ts`: Configurazione e definizione dei router di UploadThing
- `api/uploadthing/core.ts`: Logica centrale di UploadThing
- `api/uploadthing/route.ts`: Routes API per UploadThing
- `components/UploadButton.tsx`: Componente per caricare file
- `components/UploadDropzone.tsx`: Componente dropzone per caricamento drag-and-drop

## Come utilizzare

1. Copia tutti i file in questo template nel tuo progetto
2. Installa le dipendenze necessarie:
   ```bash
   npm install uploadthing @uploadthing/react react-dropzone
   ```
3. Aggiungi le variabili d'ambiente a `.env.local`:
   ```
   UPLOADTHING_SECRET=sk_live_...
   UPLOADTHING_APP_ID=...
   ```
4. Importa e utilizza i componenti nelle tue pagine:

   ```tsx
   import { UploadButton } from "@/components/UploadButton";

   export default function MyPage() {
     return (
       <div>
         <UploadButton
           endpoint="imageUploader"
           onClientUploadComplete={(res) => {
             console.log("Files:", res);
             alert("Upload completato!");
           }}
           onUploadError={(error) => {
             alert(`ERRORE! ${error.message}`);
           }}
         />
       </div>
     );
   }
   ```

## Personalizzazione

Puoi personalizzare i router di UploadThing in `api/uploadthing/core.ts` per:

- Limitare i tipi di file
- Impostare limiti di dimensione
- Aggiungere autenticazione
- Implementare callback post-upload

### Router predefiniti

Questo template include alcuni router predefiniti:

- `imageUploader`: Per caricare immagini (jpg, png, webp)
- `documentUploader`: Per caricare documenti (pdf, docx)
- `mediaUploader`: Per caricare media (video, audio)

## Documentazione

Per ulteriori informazioni, consulta la [documentazione ufficiale di UploadThing](https://docs.uploadthing.com/)

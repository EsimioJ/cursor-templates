# Cursor Templates and Rules

<p align="center">
  <svg width="200" fill="currentColor" viewBox="0 0 69 13" xmlns="http://www.w3.org/2000/svg"><path d="M.61621 6.43836c0-3.50869 2.23066-5.4743 5.49005-5.4743h3.91414v2.09026H6.23091c-1.99579 0-3.35255 1.13895-3.35255 3.38404 0 2.2451 1.35676 3.38404 3.35255 3.38404h3.78949v2.0903H6.10626c-3.25939 0-5.49005-1.99582-5.49005-5.47434ZM12.0472 8.41982V.96549h2.1834v7.00164c0 1.35676.702 1.83964 1.8554 1.83964h1.3095c1.139 0 1.8554-.48288 1.8554-1.83964V.96549h2.1677v7.47008c0 2.35533-1.5588 3.47723-3.6648 3.47723h-2.0273c-2.1205 0-3.6806-1.1232-3.6806-3.49298h.0013ZM23.7734.96549h6.4716c2.2149 0 3.3223 1.18487 3.3223 3.08749 0 1.21636-.5773 2.19917-1.4971 2.46422.9513.10891 1.404.79517 1.404 1.62182v3.77378H31.275V8.65338c0-.57734-.1719-.9828-.9513-.9828h-4.3511v4.24222h-2.1992V.96548Zm6.1763 4.66338c.9986 0 1.404-.53011 1.404-1.30952 0-.84241-.4054-1.29379-1.4341-1.29379h-3.9457v2.60463h3.9772l-.0014-.00132ZM35.5162 9.83815h6.0359c.7334 0 1.2006-.40545 1.2006-1.13895 0-.76367-.4829-1.06022-1.2479-1.1232l-3.0416-.23356c-1.9183-.1404-3.2278-1.10746-3.2278-3.16623 0-2.04302 1.4499-3.21214 3.3525-3.21214h5.9729v2.07451h-5.8482c-.8424 0-1.2794.40545-1.2794 1.1232 0 .74793.4684 1.06022 1.2951 1.13895l3.0875.21781c1.8869.14041 3.1347 1.13895 3.1347 3.15048 0 1.93408-1.3252 3.24368-3.2436 3.24368h-6.1921V9.83815h.0014ZM46.0576 6.42277c0-3.32237 2.4013-5.64488 5.6147-5.64488h.0315c3.2122 0 5.6305 2.32382 5.6305 5.64488 0 3.3368-2.417 5.67633-5.6305 5.67633h-.0315c-3.2121 0-5.6147-2.33953-5.6147-5.67633Zm5.6305 3.55593c1.98 0 3.4312-1.404 3.4312-3.54018 0-2.12044-1.4499-3.54019-3.4312-3.54019-1.9656 0-3.4156 1.41975-3.4156 3.54019 0 2.13618 1.45 3.54018 3.4156 3.54018ZM59.0635.96549h6.4715c2.2149 0 3.3224 1.18487 3.3224 3.08749 0 1.21636-.5774 2.19917-1.4972 2.46422.9513.10891 1.404.79517 1.404 1.62182v3.77378h-2.1991V8.65338c0-.57734-.1719-.9828-.9514-.9828h-4.3511v4.24222h-2.1991V.96548Zm6.1763 4.66338c.9985 0 1.404-.53011 1.404-1.30952 0-.84241-.4055-1.29379-1.4342-1.29379H61.264v2.60463h3.9771l-.0013-.00132Z"></path></svg>
</p>

> **Compatible with Cursor v0.49.x (April 15, 2025)**

[🇮🇹 Italian Version](#cursor-templates-e-regole)

A collection of reusable templates and rules for [Cursor](https://cursor.com/), helping developers implement common patterns in modern web applications.

## 🚀 Getting Started

1. Clone this repository or download it
2. Copy the `.cursor` folder to your project
3. Start using the templates and rules with Cursor AI

```bash
# Copy to your project
cp -r cursor-templates/.cursor /path/to/your/project/
```

## 📁 What's Inside

This repository contains:

- **Rules**: AI guidance for generating code following best practices
- **Templates**: Reusable code patterns for common functionalities

## ⚙️ Rules

Rules help Cursor AI generate better code by following best practices:

| Rule                     | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| **nextjs.json**          | Ensures the use of App Router in Next.js projects        |
| **clerk.json**           | Proper implementation of Clerk authentication middleware |
| **shadcn.json**          | Correct usage of shadcn components without -ui suffix    |
| **latest-versions.json** | Ensures using the latest library versions                |

## 📦 Templates

Ready-to-use implementations for common functionalities:

| Template                | Description                                 |
| ----------------------- | ------------------------------------------- |
| **auth-clerk**          | Complete Clerk authentication setup         |
| **db-prisma**           | Prisma ORM configuration with common models |
| **api-trpc**            | Type-safe API with tRPC                     |
| **storage-uploadthing** | File uploads with UploadThing               |
| **ui-shadcn**           | UI components with shadcn                   |
| **state-zustand**       | State management with Zustand               |
| **3d-r3f**              | 3D visualization with React Three Fiber     |

## 🔄 How to Use

### Using Templates

Ask Cursor AI to implement functionality based on templates:

```
"Implement Clerk authentication following the auth-clerk template"
"Set up a Prisma database with User and Post models"
"Add file upload functionality with UploadThing"
```

### Using Rules

Rules are automatically applied when:

- **Always** rules: Applied to all conversations
- **Auto** rules: Applied when working with specific file patterns
- **Ask** rules: Cursor will ask if you want to apply the rule

## 🆕 Leveraging New Cursor Features (v0.49.x)

This project takes advantage of the latest Cursor features released on April 15, 2025:

### Automated Rules Generation

You can now create additional rules directly from a conversation using the `/Generate Cursor Rules` command. This captures the context of a successful interaction for future reuse.

### Auto-Attached Rules with Path Patterns

The Agent automatically applies the right rules when reading or writing files that match patterns defined in your rules.

### Persistent Always-Attached Rules

Rules marked as "Always" now persist across longer conversations, helping maintain consistency.

### Rules Editing by Agent

Cursor Agent can now edit rules files directly, making it easier to refine your rules over time.

### Global Ignore Files

You can define global ignore patterns to keep sensitive files out of prompts without requiring per-project configuration.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

# Cursor Templates e Regole

<p align="center">
  <svg width="200" fill="currentColor" viewBox="0 0 69 13" xmlns="http://www.w3.org/2000/svg"><path d="M.61621 6.43836c0-3.50869 2.23066-5.4743 5.49005-5.4743h3.91414v2.09026H6.23091c-1.99579 0-3.35255 1.13895-3.35255 3.38404 0 2.2451 1.35676 3.38404 3.35255 3.38404h3.78949v2.0903H6.10626c-3.25939 0-5.49005-1.99582-5.49005-5.47434ZM12.0472 8.41982V.96549h2.1834v7.00164c0 1.35676.702 1.83964 1.8554 1.83964h1.3095c1.139 0 1.8554-.48288 1.8554-1.83964V.96549h2.1677v7.47008c0 2.35533-1.5588 3.47723-3.6648 3.47723h-2.0273c-2.1205 0-3.6806-1.1232-3.6806-3.49298h.0013ZM23.7734.96549h6.4716c2.2149 0 3.3223 1.18487 3.3223 3.08749 0 1.21636-.5773 2.19917-1.4971 2.46422.9513.10891 1.404.79517 1.404 1.62182v3.77378H31.275V8.65338c0-.57734-.1719-.9828-.9513-.9828h-4.3511v4.24222h-2.1992V.96548Zm6.1763 4.66338c.9986 0 1.404-.53011 1.404-1.30952 0-.84241-.4054-1.29379-1.4341-1.29379h-3.9457v2.60463h3.9772l-.0014-.00132ZM35.5162 9.83815h6.0359c.7334 0 1.2006-.40545 1.2006-1.13895 0-.76367-.4829-1.06022-1.2479-1.1232l-3.0416-.23356c-1.9183-.1404-3.2278-1.10746-3.2278-3.16623 0-2.04302 1.4499-3.21214 3.3525-3.21214h5.9729v2.07451h-5.8482c-.8424 0-1.2794.40545-1.2794 1.1232 0 .74793.4684 1.06022 1.2951 1.13895l3.0875.21781c1.8869.14041 3.1347 1.13895 3.1347 3.15048 0 1.93408-1.3252 3.24368-3.2436 3.24368h-6.1921V9.83815h.0014ZM46.0576 6.42277c0-3.32237 2.4013-5.64488 5.6147-5.64488h.0315c3.2122 0 5.6305 2.32382 5.6305 5.64488 0 3.3368-2.417 5.67633-5.6305 5.67633h-.0315c-3.2121 0-5.6147-2.33953-5.6147-5.67633Zm5.6305 3.55593c1.98 0 3.4312-1.404 3.4312-3.54018 0-2.12044-1.4499-3.54019-3.4312-3.54019-1.9656 0-3.4156 1.41975-3.4156 3.54019 0 2.13618 1.45 3.54018 3.4156 3.54018ZM59.0635.96549h6.4715c2.2149 0 3.3224 1.18487 3.3224 3.08749 0 1.21636-.5774 2.19917-1.4972 2.46422.9513.10891 1.404.79517 1.404 1.62182v3.77378h-2.1991V8.65338c0-.57734-.1719-.9828-.9514-.9828h-4.3511v4.24222h-2.1991V.96548Zm6.1763 4.66338c.9985 0 1.404-.53011 1.404-1.30952 0-.84241-.4055-1.29379-1.4342-1.29379H61.264v2.60463h3.9771l-.0013-.00132Z"></path></svg>
</p>

> **Compatibile con Cursor v0.49.x (15 aprile 2025)**

Una collezione di template e regole riutilizzabili per [Cursor](https://cursor.com/), che aiutano gli sviluppatori a implementare pattern comuni nelle applicazioni web moderne.

## 🚀 Per Iniziare

1. Clona questo repository o scaricalo
2. Copia la cartella `.cursor` nel tuo progetto
3. Inizia a utilizzare i template e le regole con Cursor AI

```bash
# Copia nel tuo progetto
cp -r cursor-templates/.cursor /percorso/del/tuo/progetto/
```

## 📁 Cosa Contiene

Questo repository contiene:

- **Regole**: Indicazioni per l'AI per generare codice seguendo le best practice
- **Template**: Pattern di codice riutilizzabili per funzionalità comuni

## ⚙️ Regole

Le regole aiutano Cursor AI a generare codice migliore seguendo le best practice:

| Regola                   | Descrizione                                                     |
| ------------------------ | --------------------------------------------------------------- |
| **nextjs.json**          | Assicura l'utilizzo dell'App Router nei progetti Next.js        |
| **clerk.json**           | Implementazione corretta del middleware di autenticazione Clerk |
| **shadcn.json**          | Utilizzo corretto dei componenti shadcn senza il suffisso -ui   |
| **latest-versions.json** | Assicura l'utilizzo delle versioni più recenti delle librerie   |

## 📦 Template

Implementazioni pronte all'uso per funzionalità comuni:

| Template                | Descrizione                                       |
| ----------------------- | ------------------------------------------------- |
| **auth-clerk**          | Configurazione completa dell'autenticazione Clerk |
| **db-prisma**           | Configurazione di Prisma ORM con modelli comuni   |
| **api-trpc**            | API type-safe con tRPC                            |
| **storage-uploadthing** | Caricamento file con UploadThing                  |
| **ui-shadcn**           | Componenti UI con shadcn                          |
| **state-zustand**       | Gestione dello stato con Zustand                  |
| **3d-r3f**              | Visualizzazione 3D con React Three Fiber          |

## 🔄 Come Utilizzare

### Utilizzo dei Template

Chiedi a Cursor AI di implementare funzionalità basate sui template:

```
"Implementa l'autenticazione Clerk seguendo il template auth-clerk"
"Configura un database Prisma con modelli User e Post"
"Aggiungi funzionalità di caricamento file con UploadThing"
```

### Utilizzo delle Regole

Le regole vengono applicate automaticamente quando:

- Regole **Always**: Applicate a tutte le conversazioni
- Regole **Auto**: Applicate quando si lavora con pattern di file specifici
- Regole **Ask**: Cursor chiederà se vuoi applicare la regola

## 🆕 Sfruttare le Nuove Funzionalità di Cursor (v0.49.x)

Questo progetto sfrutta le ultime funzionalità di Cursor rilasciate il 15 aprile 2025:

### Generazione Automatica di Regole

Puoi creare regole aggiuntive direttamente da una conversazione usando il comando `/Generate Cursor Rules`. Questo cattura il contesto di un'interazione riuscita per riutilizzarlo in futuro.

### Regole Auto-Attached con Pattern di Percorso

L'Agent applica automaticamente le regole corrette quando legge o scrive file che corrispondono ai pattern definiti nelle tue regole.

### Regole Always-Attached Persistenti

Le regole contrassegnate come "Always" ora persistono attraverso conversazioni più lunghe, aiutando a mantenere la coerenza.

### Modifica delle Regole da parte dell'Agent

Cursor Agent può ora modificare direttamente i file delle regole, rendendo più facile affinare le tue regole nel tempo.

### File di Ignore Globali

Puoi definire pattern di ignore globali per mantenere i file sensibili fuori dai prompt senza richiedere configurazioni per progetto.

## 🤝 Contribuire

I contributi sono benvenuti! Sentiti libero di inviare una Pull Request.

1. Crea un fork del repository
2. Crea il tuo branch per la feature (`git checkout -b feature/funzionalita-incredibile`)
3. Commit delle tue modifiche (`git commit -m 'Aggiungi una funzionalità incredibile'`)
4. Push al branch (`git push origin feature/funzionalita-incredibile`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è rilasciato sotto la Licenza MIT - vedi il file LICENSE per i dettagli.

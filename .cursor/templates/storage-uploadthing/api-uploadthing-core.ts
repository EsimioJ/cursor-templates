import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma/client";

const f = createUploadthing();

// Helpers per l'autenticazione
const handleAuth = () => {
    const { userId } = auth();
    if (!userId) throw new Error("Non autorizzato");
    return { userId };
}

// Definizione del FileRouter con vari uploader per differenti usi
export const uploadthingFileRouter = {
    // Uploader di immagini: accetta JPG, PNG, WEBP
    imageUploader: f({ image: { maxFileSize: "4MB" } })
        .middleware(() => handleAuth())
        .onUploadComplete(async ({ metadata, file }) => {
            // Salva l'upload nel database
            await prisma.upload.create({
                data: {
                    userId: metadata.userId,
                    url: file.url,
                    key: file.key,
                    name: file.name,
                    size: file.size,
                    type: "IMAGE",
                },
            });

            return { fileUrl: file.url };
        }),

    // Uploader di documenti: accetta PDF, DOCX
    documentUploader: f({
        "application/pdf": { maxFileSize: "16MB" },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { maxFileSize: "8MB" },
    })
        .middleware(() => handleAuth())
        .onUploadComplete(async ({ metadata, file }) => {
            // Salva l'upload nel database
            await prisma.upload.create({
                data: {
                    userId: metadata.userId,
                    url: file.url,
                    key: file.key,
                    name: file.name,
                    size: file.size,
                    type: "DOCUMENT",
                },
            });

            return { fileUrl: file.url };
        }),

    // Uploader di media: accetta video e audio
    mediaUploader: f({
        video: { maxFileSize: "64MB" },
        audio: { maxFileSize: "16MB" },
    })
        .middleware(() => handleAuth())
        .onUploadComplete(async ({ metadata, file }) => {
            // Salva l'upload nel database
            await prisma.upload.create({
                data: {
                    userId: metadata.userId,
                    url: file.url,
                    key: file.key,
                    name: file.name,
                    size: file.size,
                    type: "MEDIA",
                },
            });

            return { fileUrl: file.url };
        }),

    // Uploader libero per qualsiasi file (con auth)
    anyFileUploader: f(["*"])
        .middleware(() => handleAuth())
        .onUploadComplete(async ({ metadata, file }) => {
            await prisma.upload.create({
                data: {
                    userId: metadata.userId,
                    url: file.url,
                    key: file.key,
                    name: file.name,
                    size: file.size,
                    type: "OTHER",
                },
            });

            return { fileUrl: file.url };
        }),

    // Uploader per immagini profilo (pubblico)
    profileImageUploader: f({ image: { maxFileSize: "2MB" } })
        .middleware(() => handleAuth())
        .onUploadComplete(async ({ metadata, file }) => {
            // Aggiorna l'immagine profilo dell'utente
            await prisma.user.update({
                where: { id: metadata.userId },
                data: { image: file.url },
            });

            return { fileUrl: file.url };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadthingFileRouter; 
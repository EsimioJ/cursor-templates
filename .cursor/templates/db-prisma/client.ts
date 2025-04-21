import { PrismaClient } from '@prisma/client';

// Dichiarazione per il pattern singleton in Next.js
declare global {
    var prisma: PrismaClient | undefined;
}

// Previene istanze multiple di Prisma Client in development (hot reloading)
export const prisma = global.prisma || new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// In development, salva l'istanza globalmente per evitare creazioni multiple
if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}

/**
 * Funzioni di utilità per query comuni
 */

// Utenti
export async function getUserById(id: string) {
    return prisma.user.findUnique({
        where: { id },
        include: { profile: true }
    });
}

export async function getUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: { email },
        include: { profile: true }
    });
}

export async function getUserByClerkId(clerkId: string) {
    return prisma.user.findUnique({
        where: { clerkId },
        include: { profile: true }
    });
}

// Post
export async function getPublishedPosts(limit = 10, cursor?: string) {
    const posts = await prisma.post.findMany({
        take: limit,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        where: { published: true },
        include: {
            author: {
                select: {
                    name: true,
                    image: true,
                    id: true
                }
            },
            _count: {
                select: { comments: true }
            }
        },
        orderBy: { createdAt: 'desc' }
    });

    return {
        posts,
        nextCursor: posts.length === limit ? posts[posts.length - 1].id : null
    };
}

export async function getPostsByAuthor(authorId: string) {
    return prisma.post.findMany({
        where: { authorId },
        include: {
            author: {
                select: {
                    name: true,
                    image: true
                }
            },
            _count: {
                select: { comments: true }
            }
        },
        orderBy: { createdAt: 'desc' }
    });
}

export async function getPostById(id: string) {
    return prisma.post.findUnique({
        where: { id },
        include: {
            author: {
                select: {
                    name: true,
                    image: true,
                    id: true
                }
            },
            comments: {
                include: {
                    author: {
                        select: {
                            name: true,
                            image: true,
                            id: true
                        }
                    }
                },
                orderBy: { createdAt: 'desc' }
            },
            categories: {
                include: {
                    category: true
                }
            }
        }
    });
} 
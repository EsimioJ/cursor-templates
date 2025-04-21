import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import { ZodError } from 'zod';
import { prisma } from '@/lib/prisma/client';
import { auth } from '@clerk/nextjs';

/**
 * 1. CONTEXT
 *
 * Questo oggetto contesto viene condiviso da tutti i resolver della tua app.
 * In questo esempio, usiamo Clerk per l'autenticazione e prisma come ORM.
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
    const { userId } = auth();

    return {
        prisma,
        userId,
        headers: opts.headers,
    };
};

/**
 * 2. INITIALIZATION
 *
 * Inizializzazione di tRPC
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError:
                    error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        };
    },
});

/**
 * 3. ROUTER & PROCEDURE
 */
export const router = t.router;
export const publicProcedure = t.procedure;

/**
 * Procedure con middleware per verificare che l'utente sia autenticato
 */
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
    if (!ctx.userId) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return next({
        ctx: {
            userId: ctx.userId,
        },
    });
}); 
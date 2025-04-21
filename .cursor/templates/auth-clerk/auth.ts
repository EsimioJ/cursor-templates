import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import type { User } from '@clerk/nextjs/server';

/**
 * Ottiene l'utente corrente dalla sessione
 * @returns L'oggetto utente o null se non autenticato
 */
export function getCurrentUser(): User | null {
    const { userId } = auth();

    if (!userId) {
        return null;
    }

    return auth().user;
}

/**
 * Hook per proteggere API routes
 * @returns Un oggetto con userId e user o una risposta di errore
 */
export async function protectedRoute() {
    const { userId, user } = auth();

    if (!userId) {
        return NextResponse.json(
            { error: 'Non autorizzato', code: 'unauthorized' },
            { status: 401 }
        );
    }

    return { userId, user };
}

/**
 * Verifica se l'utente ha un ruolo specifico
 * @param role Il ruolo da verificare
 * @returns true se l'utente ha il ruolo, false altrimenti
 */
export function hasRole(role: string): boolean {
    const user = getCurrentUser();

    if (!user) {
        return false;
    }

    // Assumiamo che i ruoli siano memorizzati nei metadati pubblici
    // Personalizza in base alla tua configurazione su Clerk
    const userRoles = user.publicMetadata.roles as string[] || [];
    return userRoles.includes(role);
}

/**
 * Ottiene l'ID utente corrente o reindirizza
 * Utile nei Server Components
 */
export function getAuthenticatedUserId(): string {
    const { userId } = auth();

    if (!userId) {
        throw new Error('Utente non autenticato');
    }

    return userId;
} 
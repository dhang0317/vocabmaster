import { getServerSession } from 'next-auth';
import { authOptions } from './auth';

// Returns the signed-in user's DB id, or null if not authenticated.
// Use in API route handlers to scope/verify ownership of resources.
export async function getCurrentUserId(): Promise<string | null> {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as { id?: string } | undefined)?.id;
  return userId ?? null;
}

import { redirect } from 'next/navigation';

// Login is temporarily disabled while the site runs in guest mode.
export default function LoginPage() {
  redirect('/');
}

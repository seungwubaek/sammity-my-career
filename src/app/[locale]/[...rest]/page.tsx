import { useLocale } from 'next-intl';
import { redirect } from '@/intl-navigation';

export default function CatchAllRestPage() {
  const locale = useLocale();
  return redirect(`/me`);
}

import { redirect } from 'next/navigation';

export default function CatchAllRestPage() {
  return redirect(`/ko/me`);
}

import { fetchTelecomPlans, DEFAULT_TELECOM_SEQ } from "./data";
import TelecomPageClient from "./TelecomPageClient";

export default async function TelecomPage() {
  const initialPlans = await fetchTelecomPlans(DEFAULT_TELECOM_SEQ);

  return (
    <TelecomPageClient
      initialPlans={initialPlans}
      initialSeq={DEFAULT_TELECOM_SEQ}
    />
  );
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "./Auth";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const queryClient = new QueryClient();
const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});
const persister = { persister: localStoragePersister };

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PersistQueryClientProvider persistOptions={persister} client={queryClient}>
      <SessionProvider>{children}</SessionProvider>
    </PersistQueryClientProvider>
  );
}

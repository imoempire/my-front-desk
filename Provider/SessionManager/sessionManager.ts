// sessionManager.ts
let session: string | null = null;

export const getSession = async (): Promise<string | null> => {
  return session;
};

export const setSession = (newSession: string | null) => {
  session = newSession;
};

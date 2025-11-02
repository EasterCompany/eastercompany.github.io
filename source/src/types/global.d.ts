interface enetInstance {
  session: {
    user?: { id: string; name: string };
    clientType?: string,
    deviceId?: string,
    chatHistory?: Array,
    userNotes?: string,
  },
}

declare global {
  interface Window {
    enetInstance?: enetInstance;
  }
}

export { };

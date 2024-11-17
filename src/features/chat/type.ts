export type Message = {
  content: string;
  userId: string;
  userName: string;
  timestamp: string;
};

export type FetchTimestamp = {
  timestamp: string;
};

export type UserMessage = {
  userName: string;
  count: number;
};

export type MessageCount = {
  fetchDate: FetchTimestamp;
  fetchCount: number;
  messagesOnCooldown: number;
};

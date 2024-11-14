import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";
export const messagesTable = pgTable("messages", {
  id: serial().primaryKey().notNull(),
  content: text().notNull(),
  user_id: text().notNull(),
  user_name: varchar({ length: 255 }).notNull(),
  timestamp: timestamp().notNull().defaultNow(),
});

export const messageFetchTimestampsTable = pgTable("message_fetch_timestamps", {
  id: serial().primaryKey().notNull(),
  user_id: text().notNull(),
  timestamp: timestamp().notNull(),
});

import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core"

export const messageFetchTimestamps = pgTable("message_fetch_timestamps", {
	id: serial().primaryKey().notNull(),
	userId: text("user_id").notNull(),
	timestamp: timestamp({ mode: 'string' }).notNull(),
});

export const messages = pgTable("messages", {
	id: serial().primaryKey().notNull(),
	content: text().notNull(),
	userId: text("user_id").notNull(),
	userName: varchar("user_name", { length: 255 }).notNull(),
	timestamp: timestamp({ mode: 'string' }).defaultNow().notNull(),
});

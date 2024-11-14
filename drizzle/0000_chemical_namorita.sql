CREATE TABLE IF NOT EXISTS "message_fetch_timestamps" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"timestamp" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"user_id" text NOT NULL,
	"user_name" varchar(255) NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL
);

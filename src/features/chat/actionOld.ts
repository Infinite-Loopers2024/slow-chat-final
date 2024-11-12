"use server";
import { MessageType } from "@/src/ui/chat/chat";
import db from "../../fixtures/messages.json";
import { revalidatePath } from "next/cache";

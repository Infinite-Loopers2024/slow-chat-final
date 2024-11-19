
import { db } from "@/src";
import { createService } from "./service";

export const chatService = createService(db);

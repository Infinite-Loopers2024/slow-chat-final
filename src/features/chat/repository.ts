import db from "../../fixtures/messages.json";
import { MessageType } from "./type";
import tokens from "../../fixtures/fetch-tokens.json";

export function createRepository() {
  const data = db;
  const tokenData = tokens;

  return {
    async getAllMessages() {
      return data;
    },
    async sendMessage(message: MessageType) {
      return data.push(message);
    },
    async getAllUserTokens(userId: string) {
      const currentUser = tokenData.find(
        (tokenObject) => userId === tokenObject.userId
      );
      const totalTokens = currentUser!.dailyToken + currentUser!.weeklyToken;
      return totalTokens;
    },
    async reduceUserTokens(userId: string) {
      const currentUser = tokenData.find(
        (tokenObject) => userId === tokenObject.userId
      );
      if (currentUser?.dailyToken) {
        currentUser.dailyToken = 0;
      } else if (currentUser?.weeklyToken) {
        currentUser.weeklyToken -= 1;
      }
    },
    async updateFetchTime(userId: string) {
      const currentUser = tokenData.find(
        (tokenObject) => userId === tokenObject.userId
      );
      currentUser!.latestFetchTime = new Date().toISOString();
    },
    async getFetchedDate(userId: string) {
      const currentUser = tokenData.find(
        (tokenObject) => userId === tokenObject.userId
      );
      return currentUser!.latestFetchTime;
    },
    async refillDailyToken(userId: string) {
      const currentUser = tokenData.find(
        (tokenObject) => userId === tokenObject.userId
      );
      const fetchedDate = currentUser!.latestFetchTime;
      const fetchedDay = fetchedDate
      const todaysDate = new Date().toISOString()

      if (fetchedDay.slice(0, 10) < todaysDate.slice(0, 10)) {
        currentUser!.dailyToken = 1;
      }
    },
    async refillWeeklyToken(userId: string){
      const currentUser = tokenData.find(
        (tokenObject) => userId === tokenObject.userId
      );
      currentUser!.weeklyToken = 2
    }
  };
}

export type Repository = ReturnType<typeof createRepository>;

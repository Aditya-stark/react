import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  //CREATE ACCOUNT (SIGNUP)
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Failed to create user");
    }
  }
  //LOGIN ACCOUNT (SIGNIN)
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Failed to log in");
    }
  }

  //CURRENT USER DATA (GET USER)
  async currentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Failed to get current user");
    }
  }

  //LOGOUT
  async logout() {
    try {
      return await this.account.deleteSession();
    } catch (error) {
      console.log("Failed to logout");
    }
  }
}

const authService = new AuthService();

export default authService;

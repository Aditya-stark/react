import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  storage;
  databases;

  //DATABASE
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.storage = new Storage(this.client);
    this.databases = new Databases(this.client);
  }

  //CREATE DOCUMENT (CREATE POST)
  async createPsot({ slug, title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("Failed to create image");
    }
  }

  //UPDATE DOCUMENT
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("Failed to update the post");
    }
  }

  //DELETE POST
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
    } catch (error) {
      console.loga("Failed to delete post");
    }
  }

  //GET POST
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
    } catch (error) {
      console.log("Failed to list the post");
    }
  }

  //LIST ALL POSTS
  async listPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.collectionId,
        queries
      );
    } catch (error) {
      console.log("Failed to load all post");
    }
  }

  //FILE SERVICES
  //UPLOAD FILE (IMAGE)
  async uploadFile(file) {
    try {
      return await this.storage.createFile(conf.bucketId, ID.unique(), file);
    } catch (error) {
      console.log("Failed to upload the file");
    }
  }

  //DELETE FILE (IMAGE)
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.bucketId, fileId);
      return true;
    } catch (error) {
      console.log("Failed to delete the file");
      return false;
    }
  }

  //FILE PREVIEW (SEE IMAGE)
  previewFile(fileId) {
    try {
      return this.storage.getFilePreview(conf.bucketId, fileId);
    } catch (error) {
      console.log("Failed to preview the file");
    }
  }
}

const service = new Service();

export default service;

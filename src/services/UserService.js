import {
  users
} from "../database/models";
import Queries from "./Queries";

class UserService {
  /**
   * Create user
   * @returns {string} message
   */
  static async create(req) {
    const { 
        body
    } = req;
     return await Queries.create(users, body);
  }
   /**
   * Update user
   * @returns {string} message
   */
  static async update(req) {
    const {
        body,
        params: {
          userId
        }
      } = req;
      const updateObj = [
        body,
        { where: { id: userId }, returning: true, plain: true },
      ];

      const affectedRow = await Queries.update(users, updateObj);
      return affectedRow[1];
  }

   /**
   * View  users
   * @returns {string} message
   */
  static async get(req) {
     return await Queries.findAll(users);
  }

   /**
   * Delete user
   * @returns {string} message
   */
  static async delete(req) {
      const { params: { userId }} = req;
    return await Queries.destroy(users, { where: { id: userId }});
 }
}
export default UserService;

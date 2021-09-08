import { v4 as uuid } from "uuid";
import Response from "../utils/httpResponse";
import httpStatus from "http-status";
import UserService from "../services/UserService";

class UserController{
  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} function to create new user
   */
  static async create(req, res) {
    const newUser = await UserService.create(req);
    Response.successMessage(
      res,
      "User Added successfully!",
      newUser.dataValues,
      httpStatus.CREATED
    );
  }

  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} function to update user
   */
  static async update(req, res) {
    const editedUser = await UserService.update(req);

    Response.successMessage(
      res,
      "User updated successfully!",
      editedUser.dataValues,
      httpStatus.CREATED
    );
  }

  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} function to view all available users
   */
  static async get(req, res) {
    const users = await UserService.get(req);

    Response.successMessage(
      res,
      "All users retrieved successfully",
      users,
      httpStatus.OK
    );
  }

  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} function to delete user
   */
  static async delete(req, res) {
    await UserService.delete(req);
    Response.successMessage(
      res,
      "User deleted successfuly",
      httpStatus.OK
    );
  }
}
export default UserController;

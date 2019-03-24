import db from '../models';

const { Post } = db;

export default class PostController {
  /**
   * @description Deletes a post
   * @param  {object} req - The request object
   * @param  {object} res - The response object
   * @returns {array} an empty array
   */
  static async deletePost(req, res) {
    const { id } = req.params;
    const findPost = await Post.findOne({
      where: { id },
    });
    if (!findPost) return res.status(404).json({ status: 404, error: 'Post not found' });

    await Post.destroy({
      where: { id },
    });

    return res.status(200).json({ status: 200, message: 'Post deleted successfully.', data: [] });
  }

  /**
   * @description Creates a post
   * @param  {object} req - The request object
   * @param  {object} res - The response object
   * @returns {array} an empty array
   */

  static async createPost(req, res) {
    const { title, body } = req.body;
    const post = await Post.create({
      title,
      body,
    });
    return res.status(201).json({ status: 201, message: 'Post created successfully', data: post });
  }
}

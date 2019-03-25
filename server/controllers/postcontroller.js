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
   * @description Deletes a post
   * @param  {object} req - The request object
   * @param  {object} res - The response object
   * @returns {array} an empty array
   */
  static async getAllPost(req, res) {
    const allPost = await Post.findAll({
      attributes: ['id', 'title', 'body'],
    });
    // if (!findPost) return res.status(400).json({ status: 404, error: 'No post available' });

    return res.status(200).json({ status: 200, message: 'Successfully retrieved posts.', data: allPost });
  }
}

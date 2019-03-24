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
   * @description Edits a post
   * @param {object} req
   * @param {object} res
   * @returns {object} edited post
   */
  static async editPost(req, res) {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (post === null) return res.status(404).json({ status: 404, error: 'Post not found' });

    const updatedPost = await post.update(req.body, {
      fields: Object.keys(req.body),
    });

    return res.status(200).json({ status: 200, message: 'Post edited successfully.', data: updatedPost });
  }
}

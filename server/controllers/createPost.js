import db from '../models';
import catchBlock from '../helpers';

const { Post } = db;

class createPost {
  static async createPost(req, res) {
    const { title, body } = req.body;
    try {
      const post = await Post.create({
        title,
        body,
      });
      return res.status(201).send({
        message: 'Post created successfully',
        data: post,
      });
    } catch (error) {
      return res.status(500).send({
        error: error.message,
      });
    }
  }
}

export default createPost;

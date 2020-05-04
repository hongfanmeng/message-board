const db = require("./db");
module.exports = {
  async delPost(req, res) {
    try {
      await db();
      await db.Posts.delPost(req.params.postid);
      res.send();
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async queryPost(req, res) {
    try {
      await db();
      let posts = await db.Posts.queryPost();
      await posts.forEach((item, index) => {
        item["date"] = item._id.getTimestamp();
      });
      res.send(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async addPost(req, res) {
    try {
      post = {
        username: req.body.username,
        article: req.body.article,
      };
      await db();
      user = await db.Users.queryUser(post.username);
      if (!user)
        (request = await db.Users.addUser(post.username)),
          (user = request.ops[0]);
      post["userid"] = user._id;
      await db.Posts.addPost(post);
      post["date"] = post._id.getTimestamp();
      res.send(post);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

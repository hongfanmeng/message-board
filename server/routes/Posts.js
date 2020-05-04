const db = require("./db");

module.exports = {
  async delPost(req, res) {
    await db();
    await db.Posts.delPost(req.params.postid);
    res.send();
  },
  async queryPost(req, res) {
    await db();
    posts = await db.Posts.queryPost();
    await posts.forEach((item, index) => {
      item["date"] = item._id.getTimestamp();
    });
    res.send(posts);
  },
  async addPost(req, res) {
    await db();
    post = req.body;
    //check post illegal or not
    user = await db.Users.queryUser(post.username);
    if (!user)
      (request = await db.Users.addUser(post.username)),
        (user = request.ops[0]);
    post["userid"] = user._id;
    await db.Posts.addPost(post);

    post["date"] = post._id.getTimestamp();

    res.send(post);
  },
};

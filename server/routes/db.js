const { MongoClient, ObjectID } = require("mongodb");
let db;
module.exports = async () => {
  client = await MongoClient.connect("mongodb://localhost:27017/myposts");
  db = client;
};

module.exports.Posts = {
  queryPost() {
    return db.collection("posts").find().toArray();
  },
  delPost(postid) {
    if (typeof postid !== "object") postid = ObjectID(postid);
    return db.collection("posts").deleteOne({ _id: postid });
  },
  addPost(post) {
    return db.collection("posts").insertOne(post);
  },
};

module.exports.Users = {
  addUser(username) {
    return db.collection("users").insertOne({ username: username });
  },
  queryUser(username) {
    return db.collection("users").findOne({ username: username });
  },
};

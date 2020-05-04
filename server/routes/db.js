const { MongoClient, ObjectID } = require("mongodb");
let db;
const uri =
  "mongodb://user:user@cluster0-shard-00-00-zzkjj.mongodb.net:27017,cluster0-shard-00-01-zzkjj.mongodb.net:27017,cluster0-shard-00-02-zzkjj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
module.exports = async () => {
  let client = await MongoClient.connect(uri);
  db = client.db("myposts");
};

module.exports.Posts = {
  async queryPost() {
    posts = await db.collection("posts").find().toArray();
    return posts;
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

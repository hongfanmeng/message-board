const { MongoClient, ObjectID } = require("mongodb");
let db;
const uri =
  "mongodb://user:user@cluster0-shard-00-00-oan8j.azure.mongodb.net:27017,cluster0-shard-00-01-oan8j.azure.mongodb.net:27017,cluster0-shard-00-02-oan8j.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
module.exports = async () => {
  await MongoClient.connect(uri, function (err, client) {
    db = client.db("myposts");
  });
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

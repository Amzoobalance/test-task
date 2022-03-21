const { mongoDbUrl } = require("../../config");
const { MongoClient } = require("mongodb");

const startDb = async () => {
  try {
    const mongodbClient = new MongoClient(mongoDbUrl);
    await mongodbClient.connect();
    const tasks = await mongodbClient.db("mongo").createCollection("tasks");
    const users = await mongodbClient.db("mongo").createCollection("users");
    await users.insertMany([
      {
        name: "Orlov Andrey",
        email: "krotocat@gmail.com",
      },
      {
        name: "Andrey Aleksandrovich",
        email: "mr.boomkin@yandex.ru",
      },
    ]);
    await tasks.insertMany([
      {
        title: "Make a cookies",
        description: "tomorrow you have to make a thousand cookies",
        activated: true,
      },

      {
        title: "Bring me a coffe",
        description:
          "Tomorrow morning I want to see coffee on my table before I come. Latte without caffeine and cow's milk.",
        activated: false,
      },
      {
        title: "Make a Presentation",
        description: "Need 40pages presentation on next monday",
        activated: false,
      },
      {
        title: "Check the microphone",
        description: "Check the microphone before your intrveiw.",
        activated: true,
      },
      {
        title: "Boost my account",
        description:
          "I cant play on my rank becouse my teammates has a lowskill, please, boost my account",
        activated: true,
      },
    ]);
    mongodbClient.close();
  } catch (e) {
    console.log(e);
  }
};
startDb();

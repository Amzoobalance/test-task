const redis = require("redis");
const axios = require("axios").default;
const { emailApi } = require("../../config");

const client = redis.createClient();

client.connect().then(() =>
  client.subscribe("send", (message) => {
    const data = JSON.parse(message);

    let htmlContent = "";

    for (const task of data.tasks) {
      htmlContent += `<div><h1>${task.title}</h1><p>${task.description}</p></div>`;
    }

    axios
      .post(
        "https://api.sendinblue.com/v3/smtp/email",
        {
          sender: {
            name: "Andrey Orlov",
            email: "krotocat@gmail.com",
          },
          to: data.users.map((user) => ({
            email: user.email,
            name: user.name,
          })),
          subject: "Active tasks",
          htmlContent,
        },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            "api-key": emailApi,
          },
        }
      )
      .catch(console.log);
  })
);

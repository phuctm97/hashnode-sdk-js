import findUser from "../find-user";

findUser("phuctm97")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

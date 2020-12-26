const run = <T>(prom: Promise<T>) =>
  prom
    .then((data) => console.log(data))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

export default run;

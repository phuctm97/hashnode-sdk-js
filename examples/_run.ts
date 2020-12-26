/**
 * Utility to run an example in async mode.
 *
 * @param fn An example's function.
 */
const run = <T>(fn: () => Promise<T>) =>
  fn()
    .then((data) => console.log(data))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

export default run;

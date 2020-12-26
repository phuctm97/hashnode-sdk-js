import createPublicationArticle from "../create-publication-article";

createPublicationArticle("5fa565080163314ab6d7deab", {
  title: "This is a test article",
  slug: "this-is-a-test-article",
  contentMarkdown: "# This is a test article",
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

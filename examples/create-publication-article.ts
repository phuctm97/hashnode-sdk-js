import run from "./_run";
import findUser from "../find-user";
import createPublicationArticle from "../create-publication-article";

run(async () => {
  const user = await findUser("phuctm97");
  const article = await createPublicationArticle(user.publication.id, {
    title: "Article created using hashnode-sdk-js",
    slug: "article-created-using-hashnode-sdk-js",
    contentMarkdown:
      "# [Test] Hashnode SDK JavaScript/TypeScript\n\nThis is a test article, created using hashnode-sdk-js.",
  });
  return article;
});

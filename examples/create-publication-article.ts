import run from "./_run";
import createPublicationArticle from "../create-publication-article";

run(
  createPublicationArticle("5fa565080163314ab6d7deab", {
    title: "Article created using hashnode-sdk-js",
    slug: "article-created-using-hashnode-sdk-js",
    contentMarkdown:
      "# [Test] Hashnode SDK JavaScript/TypeScript\n\nThis is a test article, created using hashnode-sdk-js.",
  })
);

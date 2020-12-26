import run from "./_run";
import updatePublicationArticle from "../update-publication-article";

run(
  updatePublicationArticle("5fa565080163314ab6d7deab", {
    id: "5fe708f36a146422083cd175",
    title: "Article created using hashnode-sdk-js",
    slug: "article-created-using-hashnode-sdk-js-1",
    contentMarkdown:
      "# [Test] Hashnode SDK JavaScript/TypeScript\n" +
      "\n" +
      "(Updated) This is a test article, created using hashnode-sdk-js.",
  })
);

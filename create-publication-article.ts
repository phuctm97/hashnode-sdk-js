import { APIError, query } from "./base";
import { Article } from "./types";

type InputArticle = Omit<Article, "id" | "url">;

const createPublicationArticle = (
  publicationId: string,
  article: InputArticle
): Promise<Article> =>
  query(
    `mutation createPublicationStory($input: CreateStoryInput!, $publicationId: String!) {
       createPublicationStory(input: $input, publicationId: $publicationId) {
         success,
         message,
         post {
           _id,
           title,
           slug,
           isRepublished,
           publication {
             domain
           }
         },
       }
     }`,
    {
      input: {
        title: article.title,
        slug: article.slug,
        tags: [], // Hashnode API doesn't support tags yet.
        contentMarkdown: article.contentMarkdown,
        isRepublished: article.canonicalURL
          ? {
              originalArticleURL: article.canonicalURL,
            }
          : null,
      },
      publicationId,
    }
  ).then(({ data: { createPublicationStory } }) => {
    if (!createPublicationStory.success)
      throw new APIError([createPublicationStory.message]);

    const { post } = createPublicationStory;
    return {
      id: post._id,
      title: post.title,
      slug: post.slug,
      url: `https://${post.publication.domain}/${post.slug}`,
      canonicalURL: post.isRepublished ? article.canonicalURL : undefined,
      contentMarkdown: article.contentMarkdown,
    };
  });

export default createPublicationArticle;

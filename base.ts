import fetch from "node-fetch";

const apiURL = "https://api.hashnode.com";

export class APIError extends Error {
  readonly errors: any[];

  constructor(errors: any[]) {
    super(`Hashnode API error: ${JSON.stringify(errors, null, 2)}.`);
    this.errors = errors;
  }
}

/**
 * Generic utility to make a Hashnode API's call.
 *
 * @param gql GraphQL query.
 * @param variables Variables expression.
 */
export const query = (gql: string, variables: any) =>
  fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: gql,
      variables,
    }),
  })
    .then(async (res) => ({ ok: res.ok, json: await res.json() }))
    .then((res) => {
      if (!res.ok) throw new APIError(res.json.errors);
      return res.json.data;
    });

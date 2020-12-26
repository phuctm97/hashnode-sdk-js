# 📦 hashnode-sdk-js

[![npm version](https://img.shields.io/npm/v/hashnode-sdk-js)](https://www.npmjs.com/package/hashnode-sdk-js)
[![GitHub license](https://img.shields.io/github/license/phuctm97/hashnode-sdk-js)](/LICENSE)

Hashnode SDK for JavaScript/TypeScript (unofficial).

## What is this?

This is a library for working with [Hashnode] programmatically in
JavaScript/TypeScript, it's built around [Hashnode API].

### Key concepts

- Opinionated, has its own interfaces focusing on common blogging features, e.g.
  CRUD articles, comments, etc (_what you usually do on Hashnode_).

- Abstracts away Hashnode API, which is currently in alpha and subject to
  breaking changes. Whereas, this SDK's API is **considerably stable**, its API
  won't change without a major release. As soon as Hashnode API changes, it will
  be updated to keep its API remain unchanged and function correctly.

- **Not** flexible by design, you can't query less or more fields, these use
  cases are covered by Hashnode GraphQL API.

### How & why?

I ([@phuctm97]) is actively using this SDK in [my website] to implement an
[auto-crosspost workflow], which runs daily. Hence, as soon as something breaks,
I'll recognize and fix as soon as possible. Check out [this workflow run] to see
how it is used in practice.

## Usage

### Install

```bash
yarn add hashnode-sdk-js
```

### API

#### Configure API key

Go to Hashnode account settings, create an API key and set it as environment
variable `HASHNODE_API_KEY` at where you run your application, the SDK will
automatically use it.

#### Find a user by username

```js
import hashnode from "hashnode-sdk-js";

hashnode.findUser("phuctm97").then((data) => console.log(data));
```

```
{
  id: '5fa3f68b47631a19e811f076',
  username: 'phuctm97',
  name: 'Minh-Phuc Tran',
  tagline: 'Engineer 👨🏻‍💻. Building open-source tools and tutorials ➡️ twitter.com/phuctm97',
  publication: {
    id: '5fa565080163314ab6d7deab',
    name: "Minh-Phuc Tran's Blog",
    domain: 'blog.phuctm97.com'
  }
}
```

#### Other examples

See [examples](/examples).

#### Types

```ts
export type Publication = {
  id: string;
  name: string;
  domain: string;
};

export type User = {
  id: string;
  username: string;
  name: string;
  tagline: string;
  publication: Publication;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  url: string;
  canonicalURL?: string;
  contentMarkdown: string;
};
```

## Features

- [x] Find user.

- [x] Get a user's publication.

- [x] Create an article in a publication.

- [x] Update an article in a publication.

- [ ] Delete an article.

- [ ] Get feed.

- ... (contributions are welcome)

---

Made by [@phuctm97].

<!-- Links -->

[@phuctm97]: https://twitter.com/phuctm97
[my website]: https://github.com/phuctm97/phuctm97.com
[auto-crosspost workflow]:
  https://github.com/phuctm97/phuctm97.com/actions/runs/445469015
[this workflow run]:
  https://github.com/phuctm97/phuctm97.com/runs/1611074422?check_suite_focus=true#step:7:9
[hashnode api]: https://api.hashnode.com
[hashnode]: https://hashnode.com

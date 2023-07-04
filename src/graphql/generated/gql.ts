/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getAlbums($first: Int!, $after: String) {\n    albums(first: $first, after: $after) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      nodes {\n        id\n        title\n        slug\n        acf {\n          artist\n        }\n        featuredImage {\n          node {\n            sourceUrl\n          }\n        }\n      }\n    }\n  }\n": types.GetAlbumsDocument,
    "\n  query getAlbumBySlug($id: ID!) {\n    album(id: $id, idType: URI) {\n      title\n      content\n      acf {\n        amazon\n        artist\n        deezer\n        download\n        tracklist {\n          title\n          duration\n        }\n        wikipedia\n      }\n      featuredImage {\n        node {\n          sourceUrl\n        }\n      }\n      slug\n      id\n    }\n  }\n": types.GetAlbumBySlugDocument,
    "\n  query getAutocompleteBySearch($search: String) {\n    albums(where: { search: $search }, first: 2) {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    genres(where: { search: $search }, first: 2) {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    countries(where: { search: $search }, first: 2) {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    releases(where: { search: $search }, first: 2) {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n  }\n": types.GetAutocompleteBySearchDocument,
    "\n  query getMenuCategories {\n    albums {\n      nodes {\n        id\n        title\n        acf {\n          artist\n        }\n        slug\n        featuredImage {\n          node {\n            sourceUrl\n          }\n        }\n      }\n    }\n    genres {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    countries {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    releases {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n  }\n": types.GetMenuCategoriesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAlbums($first: Int!, $after: String) {\n    albums(first: $first, after: $after) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      nodes {\n        id\n        title\n        slug\n        acf {\n          artist\n        }\n        featuredImage {\n          node {\n            sourceUrl\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAlbums($first: Int!, $after: String) {\n    albums(first: $first, after: $after) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      nodes {\n        id\n        title\n        slug\n        acf {\n          artist\n        }\n        featuredImage {\n          node {\n            sourceUrl\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAlbumBySlug($id: ID!) {\n    album(id: $id, idType: URI) {\n      title\n      content\n      acf {\n        amazon\n        artist\n        deezer\n        download\n        tracklist {\n          title\n          duration\n        }\n        wikipedia\n      }\n      featuredImage {\n        node {\n          sourceUrl\n        }\n      }\n      slug\n      id\n    }\n  }\n"): (typeof documents)["\n  query getAlbumBySlug($id: ID!) {\n    album(id: $id, idType: URI) {\n      title\n      content\n      acf {\n        amazon\n        artist\n        deezer\n        download\n        tracklist {\n          title\n          duration\n        }\n        wikipedia\n      }\n      featuredImage {\n        node {\n          sourceUrl\n        }\n      }\n      slug\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAutocompleteBySearch($search: String) {\n    albums(where: { search: $search }, first: 2) {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    genres(where: { search: $search }, first: 2) {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    countries(where: { search: $search }, first: 2) {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    releases(where: { search: $search }, first: 2) {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAutocompleteBySearch($search: String) {\n    albums(where: { search: $search }, first: 2) {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    genres(where: { search: $search }, first: 2) {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    countries(where: { search: $search }, first: 2) {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    releases(where: { search: $search }, first: 2) {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMenuCategories {\n    albums {\n      nodes {\n        id\n        title\n        acf {\n          artist\n        }\n        slug\n        featuredImage {\n          node {\n            sourceUrl\n          }\n        }\n      }\n    }\n    genres {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    countries {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    releases {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMenuCategories {\n    albums {\n      nodes {\n        id\n        title\n        acf {\n          artist\n        }\n        slug\n        featuredImage {\n          node {\n            sourceUrl\n          }\n        }\n      }\n    }\n    genres {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    countries {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    releases {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
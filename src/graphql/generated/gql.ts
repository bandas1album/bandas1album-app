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
    "\n  query getAlbums {\n    albums {\n      id\n      title\n      slug\n      artist\n      cover {\n        url\n      }\n    }\n  }\n": types.GetAlbumsDocument,
    "\n  query getAlbumBySlug($slug: String) {\n    album(where: { slug: $slug }) {\n      artist\n      content\n      genres {\n        slug\n        title\n      }\n      country {\n        title\n        slug\n      }\n      cover {\n        url\n      }\n      slug\n      social\n      stage\n      title\n      tracklist\n      released {\n        title\n      }\n      label\n      id\n    }\n  }\n": types.GetAlbumBySlugDocument,
    "\n  query getAutocompleteBySearch($search: String) {\n    albums(where: { title_starts_with: $search }, first: 2) {\n      id\n      title\n      slug\n    }\n    genres(where: { title_starts_with: $search }, first: 2) {\n      id\n      title\n      slug\n    }\n    countries(where: { title_starts_with: $search }, first: 2) {\n      id\n      title\n      slug\n    }\n    releases(where: { title_starts_with: $search }, first: 2) {\n      id\n      title\n    }\n  }\n": types.GetAutocompleteBySearchDocument,
    "\n  query getMenuCategories {\n    albums {\n      id\n      title\n      artist\n      slug\n      cover {\n        url\n      }\n    }\n    genres {\n      id\n      title\n      slug\n    }\n    countries {\n      id\n      title\n      slug\n    }\n    releases {\n      id\n      title\n    }\n  }\n": types.GetMenuCategoriesDocument,
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
export function graphql(source: "\n  query getAlbums {\n    albums {\n      id\n      title\n      slug\n      artist\n      cover {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAlbums {\n    albums {\n      id\n      title\n      slug\n      artist\n      cover {\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAlbumBySlug($slug: String) {\n    album(where: { slug: $slug }) {\n      artist\n      content\n      genres {\n        slug\n        title\n      }\n      country {\n        title\n        slug\n      }\n      cover {\n        url\n      }\n      slug\n      social\n      stage\n      title\n      tracklist\n      released {\n        title\n      }\n      label\n      id\n    }\n  }\n"): (typeof documents)["\n  query getAlbumBySlug($slug: String) {\n    album(where: { slug: $slug }) {\n      artist\n      content\n      genres {\n        slug\n        title\n      }\n      country {\n        title\n        slug\n      }\n      cover {\n        url\n      }\n      slug\n      social\n      stage\n      title\n      tracklist\n      released {\n        title\n      }\n      label\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAutocompleteBySearch($search: String) {\n    albums(where: { title_starts_with: $search }, first: 2) {\n      id\n      title\n      slug\n    }\n    genres(where: { title_starts_with: $search }, first: 2) {\n      id\n      title\n      slug\n    }\n    countries(where: { title_starts_with: $search }, first: 2) {\n      id\n      title\n      slug\n    }\n    releases(where: { title_starts_with: $search }, first: 2) {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  query getAutocompleteBySearch($search: String) {\n    albums(where: { title_starts_with: $search }, first: 2) {\n      id\n      title\n      slug\n    }\n    genres(where: { title_starts_with: $search }, first: 2) {\n      id\n      title\n      slug\n    }\n    countries(where: { title_starts_with: $search }, first: 2) {\n      id\n      title\n      slug\n    }\n    releases(where: { title_starts_with: $search }, first: 2) {\n      id\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMenuCategories {\n    albums {\n      id\n      title\n      artist\n      slug\n      cover {\n        url\n      }\n    }\n    genres {\n      id\n      title\n      slug\n    }\n    countries {\n      id\n      title\n      slug\n    }\n    releases {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  query getMenuCategories {\n    albums {\n      id\n      title\n      artist\n      slug\n      cover {\n        url\n      }\n    }\n    genres {\n      id\n      title\n      slug\n    }\n    countries {\n      id\n      title\n      slug\n    }\n    releases {\n      id\n      title\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
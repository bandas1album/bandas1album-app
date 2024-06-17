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
    "\n  query getAlbums($first: Int!, $after: Int) {\n    albums(pagination: { pageSize: $first, start: $after }) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          title\n          slug\n          artist\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetAlbumsDocument,
    "\n  query getAlbumById($id: ID) {\n    album(id: $id) {\n      data {\n        id\n        attributes {\n          slug\n          title\n          content\n          artist\n          social\n          tracklist\n          genres {\n            data {\n              id\n              attributes {\n                slug\n                title\n              }\n            }\n          }\n          country {\n            data {\n              id\n              attributes {\n                slug\n                title\n              }\n            }\n          }\n          released\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetAlbumByIdDocument,
    "\n  query getAutocompleteBySearch($search: StringFilterInput) {\n    albums(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n    genres(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n    countries(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n": types.GetAutocompleteBySearchDocument,
    "\n  query getMenuCategories {\n    albums {\n      data {\n        id\n        attributes {\n          title\n          artist\n          slug\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n    genres {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n    countries {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n": types.GetMenuCategoriesDocument,
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
export function graphql(source: "\n  query getAlbums($first: Int!, $after: Int) {\n    albums(pagination: { pageSize: $first, start: $after }) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          title\n          slug\n          artist\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAlbums($first: Int!, $after: Int) {\n    albums(pagination: { pageSize: $first, start: $after }) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          title\n          slug\n          artist\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAlbumById($id: ID) {\n    album(id: $id) {\n      data {\n        id\n        attributes {\n          slug\n          title\n          content\n          artist\n          social\n          tracklist\n          genres {\n            data {\n              id\n              attributes {\n                slug\n                title\n              }\n            }\n          }\n          country {\n            data {\n              id\n              attributes {\n                slug\n                title\n              }\n            }\n          }\n          released\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAlbumById($id: ID) {\n    album(id: $id) {\n      data {\n        id\n        attributes {\n          slug\n          title\n          content\n          artist\n          social\n          tracklist\n          genres {\n            data {\n              id\n              attributes {\n                slug\n                title\n              }\n            }\n          }\n          country {\n            data {\n              id\n              attributes {\n                slug\n                title\n              }\n            }\n          }\n          released\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAutocompleteBySearch($search: StringFilterInput) {\n    albums(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n    genres(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n    countries(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAutocompleteBySearch($search: StringFilterInput) {\n    albums(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n    genres(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n    countries(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMenuCategories {\n    albums {\n      data {\n        id\n        attributes {\n          title\n          artist\n          slug\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n    genres {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n    countries {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMenuCategories {\n    albums {\n      data {\n        id\n        attributes {\n          title\n          artist\n          slug\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n    genres {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n    countries {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
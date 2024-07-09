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
    "\n  query getAllPages {\n    genres(pagination: { limit: 10000 }) {\n      data {\n        attributes {\n          slug\n          updatedAt\n        }\n      }\n    }\n\n    countries(pagination: { limit: 10000 }) {\n      data {\n        attributes {\n          slug\n          updatedAt\n        }\n      }\n    }\n\n    albums(pagination: { limit: 10000 }) {\n      data {\n        attributes {\n          slug\n          updatedAt\n        }\n      }\n    }\n  }\n": types.GetAllPagesDocument,
    "\n  query getPageInfo($slug: StringFilterInput) {\n    genres(filters: { slug: $slug }) {\n      data {\n        id\n        attributes {\n          title\n        }\n      }\n    }\n\n    countries(filters: { slug: $slug }) {\n      data {\n        id\n        attributes {\n          title\n        }\n      }\n    }\n  }\n": types.GetPageInfoDocument,
    "\n  query getAlbums($perPage: Int!, $page: Int, $sort: [String]) {\n    albums(pagination: { pageSize: $perPage, page: $page }, sort: $sort) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          slug\n          title\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetAlbumsDocument,
    "\n  query getAlbumBySlug($first: Int!, $after: Int, $slug: StringFilterInput) {\n    albums(\n      pagination: { pageSize: $first, start: $after }\n      filters: { slug: $slug }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          slug\n          title\n          content\n          artist\n          social\n          tracklist\n          genres {\n            data {\n              id\n              attributes {\n                slug\n                title\n              }\n            }\n          }\n          country {\n            data {\n              id\n              attributes {\n                slug\n                title\n              }\n            }\n          }\n          released\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetAlbumBySlugDocument,
    "\n  query getAlbumsByCategory(\n    $perPage: Int!\n    $page: Int\n    $genre: StringFilterInput\n    $country: StringFilterInput\n  ) {\n    albums(\n      pagination: { pageSize: $perPage, page: $page }\n      filters: { genres: { slug: $genre }, country: { slug: $country } }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          slug\n          title\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetAlbumsByCategoryDocument,
    "\n  query getAlbumsByYear($perPage: Int!, $page: Int, $year: Date) {\n    albums(\n      pagination: { pageSize: $perPage, page: $page }\n      filters: { released: { contains: $year } }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          slug\n          title\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetAlbumsByYearDocument,
    "\n  query getAutocompleteBySearch($search: StringFilterInput) {\n    albums(\n      filters: { title: $search, artist: $search }\n      pagination: { pageSize: 2 }\n    ) {\n      data {\n        id\n        attributes {\n          title\n          artist\n          slug\n        }\n      }\n    }\n    genres(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n    countries(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n": types.GetAutocompleteBySearchDocument,
    "\n  query getMenuAlbums($page: Int, $perPage: Int) {\n    albums(pagination: { pageSize: $perPage, page: $page }) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          title\n          artist\n          slug\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetMenuAlbumsDocument,
    "\n  query getMenuGenres($page: Int, $perPage: Int) {\n    genres(pagination: { pageSize: $perPage, page: $page }) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n": types.GetMenuGenresDocument,
    "\n  query getMenuCountries($page: Int, $perPage: Int) {\n    countries(pagination: { pageSize: $perPage, page: $page }) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n": types.GetMenuCountriesDocument,
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
export function graphql(source: "\n  query getAllPages {\n    genres(pagination: { limit: 10000 }) {\n      data {\n        attributes {\n          slug\n          updatedAt\n        }\n      }\n    }\n\n    countries(pagination: { limit: 10000 }) {\n      data {\n        attributes {\n          slug\n          updatedAt\n        }\n      }\n    }\n\n    albums(pagination: { limit: 10000 }) {\n      data {\n        attributes {\n          slug\n          updatedAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllPages {\n    genres(pagination: { limit: 10000 }) {\n      data {\n        attributes {\n          slug\n          updatedAt\n        }\n      }\n    }\n\n    countries(pagination: { limit: 10000 }) {\n      data {\n        attributes {\n          slug\n          updatedAt\n        }\n      }\n    }\n\n    albums(pagination: { limit: 10000 }) {\n      data {\n        attributes {\n          slug\n          updatedAt\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPageInfo($slug: StringFilterInput) {\n    genres(filters: { slug: $slug }) {\n      data {\n        id\n        attributes {\n          title\n        }\n      }\n    }\n\n    countries(filters: { slug: $slug }) {\n      data {\n        id\n        attributes {\n          title\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPageInfo($slug: StringFilterInput) {\n    genres(filters: { slug: $slug }) {\n      data {\n        id\n        attributes {\n          title\n        }\n      }\n    }\n\n    countries(filters: { slug: $slug }) {\n      data {\n        id\n        attributes {\n          title\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAlbums($perPage: Int!, $page: Int, $sort: [String]) {\n    albums(pagination: { pageSize: $perPage, page: $page }, sort: $sort) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          slug\n          title\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAlbums($perPage: Int!, $page: Int, $sort: [String]) {\n    albums(pagination: { pageSize: $perPage, page: $page }, sort: $sort) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          slug\n          title\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAlbumBySlug($first: Int!, $after: Int, $slug: StringFilterInput) {\n    albums(\n      pagination: { pageSize: $first, start: $after }\n      filters: { slug: $slug }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          slug\n          title\n          content\n          artist\n          social\n          tracklist\n          genres {\n            data {\n              id\n              attributes {\n                slug\n                title\n              }\n            }\n          }\n          country {\n            data {\n              id\n              attributes {\n                slug\n                title\n              }\n            }\n          }\n          released\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAlbumBySlug($first: Int!, $after: Int, $slug: StringFilterInput) {\n    albums(\n      pagination: { pageSize: $first, start: $after }\n      filters: { slug: $slug }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          slug\n          title\n          content\n          artist\n          social\n          tracklist\n          genres {\n            data {\n              id\n              attributes {\n                slug\n                title\n              }\n            }\n          }\n          country {\n            data {\n              id\n              attributes {\n                slug\n                title\n              }\n            }\n          }\n          released\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAlbumsByCategory(\n    $perPage: Int!\n    $page: Int\n    $genre: StringFilterInput\n    $country: StringFilterInput\n  ) {\n    albums(\n      pagination: { pageSize: $perPage, page: $page }\n      filters: { genres: { slug: $genre }, country: { slug: $country } }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          slug\n          title\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAlbumsByCategory(\n    $perPage: Int!\n    $page: Int\n    $genre: StringFilterInput\n    $country: StringFilterInput\n  ) {\n    albums(\n      pagination: { pageSize: $perPage, page: $page }\n      filters: { genres: { slug: $genre }, country: { slug: $country } }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          slug\n          title\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAlbumsByYear($perPage: Int!, $page: Int, $year: Date) {\n    albums(\n      pagination: { pageSize: $perPage, page: $page }\n      filters: { released: { contains: $year } }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          slug\n          title\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAlbumsByYear($perPage: Int!, $page: Int, $year: Date) {\n    albums(\n      pagination: { pageSize: $perPage, page: $page }\n      filters: { released: { contains: $year } }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          slug\n          title\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAutocompleteBySearch($search: StringFilterInput) {\n    albums(\n      filters: { title: $search, artist: $search }\n      pagination: { pageSize: 2 }\n    ) {\n      data {\n        id\n        attributes {\n          title\n          artist\n          slug\n        }\n      }\n    }\n    genres(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n    countries(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAutocompleteBySearch($search: StringFilterInput) {\n    albums(\n      filters: { title: $search, artist: $search }\n      pagination: { pageSize: 2 }\n    ) {\n      data {\n        id\n        attributes {\n          title\n          artist\n          slug\n        }\n      }\n    }\n    genres(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n    countries(filters: { title: $search }, pagination: { pageSize: 2 }) {\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMenuAlbums($page: Int, $perPage: Int) {\n    albums(pagination: { pageSize: $perPage, page: $page }) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          title\n          artist\n          slug\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMenuAlbums($page: Int, $perPage: Int) {\n    albums(pagination: { pageSize: $perPage, page: $page }) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          title\n          artist\n          slug\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMenuGenres($page: Int, $perPage: Int) {\n    genres(pagination: { pageSize: $perPage, page: $page }) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMenuGenres($page: Int, $perPage: Int) {\n    genres(pagination: { pageSize: $perPage, page: $page }) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMenuCountries($page: Int, $perPage: Int) {\n    countries(pagination: { pageSize: $perPage, page: $page }) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMenuCountries($page: Int, $perPage: Int) {\n    countries(pagination: { pageSize: $perPage, page: $page }) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          title\n          slug\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;

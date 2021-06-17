/**
 * @description
 * This is the Get model, and the get function of todoService (derived from base service)
 * must accept this data model (as per the api contract).
 */
export interface GenresItem {
  id: number;
  name: string;
  slug: string;
}

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import urljoin from 'url-join';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

/*
  This should be placed in some miscellaneous folder.
*/
export function constructApiQueryParams(
  inputParams: any | undefined
): HttpParams {
  let params = new HttpParams();

  if (inputParams && Object.keys(inputParams).length > 0) {
    const inputAttributes = Object.keys(inputParams);

    inputAttributes.map((key) => {
      params = params.append(key, inputParams[key]);
    });
  }

  return params;
}

/*
  This should be placed in some folder contatining interface definitions.
*/
export interface HttpOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: any;
  params?: any;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

/*
  This should be placed in some file containing all the application constants.
*/
export class Constants {
  public static apiRoot = environment.urlApi; // If there is some prefix for all the APIs, then define that in constants.
}

/**
 * @description
 * Generic Service.
 */
export abstract class BaseService<TRead, TCreate, TUpdate> {
  private readonly endpointUrl: string;
  merchant = '';
  unit = '';

  protected constructor(
    private readonly http: HttpClient,
    private readonly path: string
  ) {
    this.endpointUrl = urljoin(Constants.apiRoot, this.path);
  }

  protected formatErrors(error: any): Observable<never> {
    return throwError(error);
  }

  /**
   * @description
   * Get list.
   * @param options Extra data
   */
  get(options: HttpOptions = {}): Observable<TRead[]> {
    options.params = constructApiQueryParams(options.params);
    return this.http
      .get<TRead[]>(this.endpointUrl, options)
      .pipe(catchError(this.formatErrors));
  }

  /**
   * @description
   * Get by ID.
   *
   * @param id      Required ID
   * @param options Extra data
   */
  getById(id: string, options: HttpOptions = {}): Observable<TRead> {
    options.params = constructApiQueryParams(options.params);
    const url = urljoin(this.endpointUrl, id);
    return this.http
      .get<TRead>(url, options)
      .pipe(catchError(this.formatErrors));
  }

  /**
   * @description
   * Generic create.
   * @param creationBody  Required information
   * @param options       Extra data
   */
  create(creationBody: TCreate, options: HttpOptions = {}): Observable<TRead> {
    options.params = constructApiQueryParams(options.params);
    return this.http
      .post<TRead>(this.endpointUrl, creationBody, options)
      .pipe(catchError(this.formatErrors));
  }

  /**
   * @description
   * Update by ID.
   *
   * @param id          Required ID
   * @param updateBody  Required information
   * @param options     Extra data
   */
  update(
    id: string,
    updateBody: TUpdate,
    options: HttpOptions = {}
  ): Observable<any> {
    options.params = constructApiQueryParams(options.params);
    const url = urljoin(this.endpointUrl, id);
    return this.http
      .put(url, updateBody, options)
      .pipe(catchError(this.formatErrors));
  }

  /**
   * @description
   * Delete by ID.
   *
   * @param id      Required ID
   * @param options Extra data
   */
  delete(id: string, options: HttpOptions = {}): Observable<any> {
    options.params = constructApiQueryParams(options.params);
    const url = urljoin(this.endpointUrl, id);
    return this.http.delete(url, options).pipe(catchError(this.formatErrors));
  }
}

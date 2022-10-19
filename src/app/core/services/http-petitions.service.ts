import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class HttpPetitions {
  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  async get<Type>(
    url: string,
    params?: { name: string; value: string }[]
  ): Promise<Type | undefined> {
    let sendParams: undefined | HttpParams = undefined;
    if (params) {
      sendParams = new HttpParams();
      params.map((param) => {
        sendParams = sendParams!.set(param.name, param.value);
      });
    }
    return new Promise<Type | undefined>((resolve, reject) => {
      this.http
        .get<Type>(url, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')!,
          },
          params: sendParams,
        })
        .subscribe({
          next: (value) => resolve(value),
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  async getBlob(
    url: string,
    params?: { name: string; value: string }[]
  ): Promise<Blob | undefined> {
    return new Promise<Blob | undefined>((resolve, reject) => {
      let sendParams: undefined | HttpParams = undefined;
      if (params) {
        sendParams = new HttpParams();
        params.map((param) => {
          sendParams = sendParams!.set(param.name, param.value);
        });
      }
      this.http
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')!,
          },
          params: sendParams,
          responseType: 'blob',
        })
        .subscribe({
          next: (value) => {
            resolve(value);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  async getFileUrl(
    url: string,
    params?: { name: string; value: string }[]
  ): Promise<SafeResourceUrl | undefined> {
    return new Promise<SafeResourceUrl | undefined>((resolve, reject) => {
      let sendParams: undefined | HttpParams = undefined;
      if (params) {
        sendParams = new HttpParams();
        params.map((param) => {
          sendParams = sendParams!.set(param.name, param.value);
        });
      }
      this.http
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')!,
          },
          params: sendParams,
          responseType: 'blob',
        })
        .subscribe({
          next: (value) => {
            const fileURL = URL.createObjectURL(value);
            const sanitizedURL =
              this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
            resolve(sanitizedURL);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  async post<Type>(
    url: string,
    body: any,
    params?: { name: string; value: string }[]
  ): Promise<Type | undefined> {
    let sendParams: undefined | HttpParams = undefined;
    if (params) {
      sendParams = new HttpParams();
      params.map((param) => {
        sendParams = sendParams!.set(param.name, param.value);
      });
    }
    return new Promise<Type | undefined>((resolve, reject) => {
      this.http
        .post<Type>(url, body, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')!,
          },
          params: sendParams,
        })
        .subscribe({
          next: (value) => resolve(value),
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  async put<Type>(
    url: string,
    body: any,
    params?: { name: string; value: string }[]
  ): Promise<Type | undefined> {
    let sendParams: undefined | HttpParams = undefined;
    if (params) {
      sendParams = new HttpParams();
      params.map((param) => {
        sendParams = sendParams!.set(param.name, param.value);
      });
    }
    return new Promise<Type | undefined>((resolve, reject) => {
      this.http
        .put<Type>(url, body, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')!,
          },
          params: sendParams,
        })
        .subscribe({
          next: (value) => resolve(value),
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  async delete<Type>(
    url: string,
    params?: { name: string; value: string }[]
  ): Promise<Type | undefined> {
    let sendParams: undefined | HttpParams = undefined;
    if (params) {
      sendParams = new HttpParams();
      params.map((param) => {
        sendParams = sendParams!.set(param.name, param.value);
      });
    }
    return new Promise<Type | undefined>((resolve, reject) => {
      this.http
        .delete<Type>(url, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')!,
          },
          params: sendParams,
        })
        .subscribe({
          next: (value) => resolve(value),
          error: (err) => {
            reject(err);
          },
        });
    });
  }
}

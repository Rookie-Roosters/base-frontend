import { Injectable } from "@angular/core";
import { API_ENDPOINTS } from "@core/constants";
import { HttpPetitions } from "@core/services/http-petitions.service";
import { environment } from "src/environments/environment";
import { AuthenticationParamsInterface } from "../interfaces/authentication-params.interface";
import { AuthenticationResponseInterface } from "../interfaces/authentication-response.interface";

@Injectable()
export class BankingService {
    constructor(
        private http: HttpPetitions,
    ) {}

    // async add(authenticationCredentials: AuthenticationParamsInterface): Promise<AuthenticationResponseInterface> {
    //     return null;
    //     // return await this.http.post<AuthenticationResponseInterface>(environment.apiUrl + API_ENDPOINTS.SESSION.SIGN_UP(authenticationCredentials.))
    // }
}
import { AxiosError } from "axios";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";

export class AuthRepositoryImpl implements AuthRepository {
    async login(email: string, password: string): Promise<ResponseApiDelivery> {
        try {
            
            const response = await ApiDelivery.post<ResponseApiDelivery>('/users/login', {
                email: email,
                password: password                
            });
            
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }
}
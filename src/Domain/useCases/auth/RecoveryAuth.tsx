import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";


const { recovery } = new AuthRepositoryImpl();

export const recoveryAuthUseCase = async (email: string) => {
    return await recovery(email);
}
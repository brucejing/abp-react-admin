import httpService from '../httpService';
import { AuthenticationModel } from './dto/authenticationModel';
import { AuthenticationResultModel } from './dto/authenticationResultModel';

class TokenAuthService {
  public async authenticate(authenticationInput: AuthenticationModel): Promise<AuthenticationResultModel> {
    const result = await httpService.post('api/TokenAuth/Authenticate', authenticationInput);
    return result.data.result;
  }
}

export default new TokenAuthService();

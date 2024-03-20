import httpService from './httpService';

class AbpUserConfigurationService {
  public async getAll() {
    const result = await httpService.get('/AbpUserConfiguration/GetAll');
    return result;
  }
}

export default new AbpUserConfigurationService();

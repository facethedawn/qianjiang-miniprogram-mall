import { domain } from "../domain";
import xhrFactory from "../xhrFactor";

const warrantyLogin = '/web/ml/mlogin/getWarrantyLogin.json'; // 担保login


const getWarrantyLogin = data => {
  return xhrFactory({
    url: domain + warrantyLogin,
    data,
    header: {
      cookie: 'saas-token-mini=EA98F12E3D813EFD8C19240CD9A37894',
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  })
}

export default getWarrantyLogin;

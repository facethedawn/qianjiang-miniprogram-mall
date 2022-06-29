import {app} from "../../main";

const warrantyLogin = '/web/ml/mlogin/warrantyLogin.json'; // 担保login


const getWarrantyLogin = data => {
  return app.$http.get(warrantyLogin, data)
}

export default getWarrantyLogin;

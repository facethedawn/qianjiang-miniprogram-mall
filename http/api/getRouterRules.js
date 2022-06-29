import {app} from "../../main";

const getTopPerMenuListFPc = "/web/mi/mindex/getTopPerMenuListFPc.json";

const getRouterRules = () => {
  return app.$http.get(getTopPerMenuListFPc)
}

export default getRouterRules;

import { domain } from "../domain";
import xhrFactory from "../xhrFactor";
export const addShoppingGoodsBySpec = "/web/oc/shopping/addShoppingGoodsBySpec.json"; // 再次购买

const getGoodsBySize = (data) => {
	return xhrFactory({
	  url: domain + addShoppingGoodsBySpec,
	  data,
	})
}

export default getGoodsBySize;

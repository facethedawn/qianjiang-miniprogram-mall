import { domain } from "../domain";
import xhrFactory from "../xhrFactor";
const getResourceGoodsInfoBySkuCode = "/web/rs/resourceGoods/getResourceGoodsInfoBySkuCode.json"; // 获取商品详情信息 SkuCode

const getGoodsDetail = (data) => {
  return xhrFactory({
    url: domain + getResourceGoodsInfoBySkuCode,
    data,
  })
}

export default getGoodsDetail;
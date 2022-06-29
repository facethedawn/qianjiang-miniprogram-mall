import {app} from "../../main";

const getResourceGoodsInfoBySkuCode = "/web/rs/resourceGoods/getResourceGoodsInfoBySkuCode.json"; // 获取商品详情信息 SkuCode

const getGoodsDetail = (data) => {
  return app.$http.get(getResourceGoodsInfoBySkuCode, data);
}

export default getGoodsDetail;

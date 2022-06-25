import { domain } from "../domain";
import xhrFactory from "../xhrFactor";
const evaluate = "/web/res/evaluate/queryEvaluateGoodsPagetrue.json"; // 查看评论

const getCommentList = (data) => {
  return xhrFactory({
    url: domain+evaluate,
    data,
  })
}

export default getCommentList;
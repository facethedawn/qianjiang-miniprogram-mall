import {app} from "../../main";

const evaluate = "/web/res/evaluate/queryEvaluateGoodsPagetrue.json"; // 查看评论

const getCommentList = (data) => {
  return app.$http.get(evaluate, data)
}

export default getCommentList;

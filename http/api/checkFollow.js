import {app} from "../../main"

const checkCollectExit = "/web/um/collect/checkCollectExit.json"; // 检查是否关注

const checkFollow = (data) => {
  return app.$http.get(checkCollectExit,data)
}

export default checkFollow;

import {domain} from "../domain";
import xhrFactory from "../xhrFactor";

const checkCollectExit = "/web/um/collect/checkCollectExit.json"; // 检查是否关注

const checkFollow = (data) => {
  return xhrFactory({
    url: domain + checkCollectExit,
    data,
  })
}

export default checkFollow;

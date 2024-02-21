import { List, Map } from 'immutable';

function mergeDeeplyElements(page1, page2) {
  const mergedMap = Map(page1).mergeDeep(page2);
  return List(mergedMap.values());
}

export default mergeDeeplyElements;

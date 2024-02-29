import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mappedIt = fromJS(object);

  return mappedIt.getIn(array, undefined);
}

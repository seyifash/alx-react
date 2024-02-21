import { Map } from 'immutable';

export default function  accessImmutableObject(object, array) {
  const mappedIt = Map(object);
  return mappedIt.getIn(array);
}

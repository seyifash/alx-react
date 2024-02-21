import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  function letterToUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const filtered = seq.filter((student) => student.score > 70)
    .map((student) => ({
      ...student,
      firstName: letterToUpper(student.firstName),
      lastName: letterToUpper(student.lastName),
    }));

  const JSObject = filtered.toJS();

  console.log(JSObject);
}

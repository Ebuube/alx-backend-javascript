/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(val) {
    if (typeof val === 'string') {
      this._name = val;
    } else {
      throw TypeError('name must be a string');
    }
  }

  set length(val) {
    if (typeof val === 'number') {
      this._length = val;
    } else {
      throw TypeError('length must be a number');
    }
  }

  set students(val) {
    if (Array.isArray(val)) {
      this._students = [];

      for (const student of val) {
        if (typeof student === 'string') {
          this._students.push(student);
        } else {
          throw TypeError('students must be an array of strings');
        }
      }
    } else {
      throw TypeError('students must be an array of strings');
    }
  }
}

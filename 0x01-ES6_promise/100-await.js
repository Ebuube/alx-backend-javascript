import { uploadPhoto, createUser } from './utils';

export default async function () {
  let result;

  try {
    result = { photo: await uploadPhoto() };
  } catch (err) {
    result = { photo: null };
  }

  try {
    result = { ...result, user: await createUser() };
  } catch (err) {
    result = { ...result, user: null };
  }

  return result;
}

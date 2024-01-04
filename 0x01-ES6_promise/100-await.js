import { uploadPhoto, createUser } from './utils';

export default async function () {
  let result;
  const empty = { photo: null, user: null };

  try {
    result = { photo: await uploadPhoto() };
  } catch (err) {
    return empty;
  }

  try {
    result = { ...result, user: await createUser() };
  } catch (err) {
    return empty;
  }

  return result;
}

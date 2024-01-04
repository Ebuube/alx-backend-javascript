import handleProfileSignup from './6-final-user';

handleProfileSignup('Ebube', 'Onwuta', 'profile.jpg')
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

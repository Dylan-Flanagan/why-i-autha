/*Imports*/
import '../auth/user.js';
import { signOutUser } from '../fetch-utils.js';

/*DOM Elements*/
const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);

/*State*/

/*Events*/

/*Display Functions*/

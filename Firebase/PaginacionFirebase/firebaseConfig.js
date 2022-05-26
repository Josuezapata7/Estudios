const firebaseConfig = {
	apiKey: "AIzaSyBnHnC13DUfEkhrp_1a1GlwipBSWtpK6Pg",
    authDomain: "tdo-pruebas-paginacion.firebaseapp.com",
    projectId: "tdo-pruebas-paginacion",
    storageBucket: "tdo-pruebas-paginacion.appspot.com",
    messagingSenderId: "923161722507",
    appId: "1:923161722507:web:3947b610cb026908c1de8e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
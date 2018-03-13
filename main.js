// Initialize Firebase
var config = {
    apiKey: "AIzaSyDvhbFDNM3rLmyAEslEDSdL-F8PMgFyd5I",
    authDomain: "contact-form-3e7c0.firebaseapp.com",
    databaseURL: "https://contact-form-3e7c0.firebaseio.com",
    projectId: "contact-form-3e7c0",
    storageBucket: "contact-form-3e7c0.appspot.com",
    messagingSenderId: "1096982001539"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');


document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    saveMessage(name, company, email, phone, message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contactForm').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}
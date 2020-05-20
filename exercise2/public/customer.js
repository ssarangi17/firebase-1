var logoutLink = document.getElementById("logout-link");

logoutLink.addEventListener("click", function(event) {
  if (confirm("Do you really want to logout?")) return;
    event.preventDefault();
});

let user;

firebase.auth().onAuthStateChanged(getCustData);

document.getElementById('saveProfile').addEventListener('click', saveCustData);

function getCustData(newUser) {
  user = newUser

  if (user) {
    const db = firebase.firestore();
    db.collection("customers").doc(user.email).onSnapshot(function(doc) {
      const cust = doc.data();
      if (cust) {
        document.getElementById('customerName').setAttribute('value', cust.name);
        document.getElementById('customerPhone').setAttribute('value', cust.phone);
      }
      document.getElementById('customerEmail').innerText = user.email;
    });
  }
}

function saveCustData(ev) {
  const db = firebase.firestore();
  var docRef = db.collection('customers').doc(user.email);
  docRef.set({
    name: document.getElementById('customerName').value,
    email: user.email,
    phone: document.getElementById('customerPhone').value,
  })
}
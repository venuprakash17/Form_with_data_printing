var saveform = document.querySelector("#saveform"); //submit button

var Vendor_name = document.querySelector("#vendor-name");
var Email_id = document.querySelector("#email-id");
var Mobile_number = document.querySelector("#mobile-number");
var NetBanking = document.querySelector("#NetBanking");
var UPI = document.querySelector("#UPI");
var Card = document.querySelector("#Card");
var Last_date = document.querySelector('#last-date');
var Due_date = document.querySelector('#due-date');
var Due_Charges = document.querySelector('#due-charges');
var Suspention_date = document.querySelector('#suspention-date');
var Paid = document.querySelector('#paid')
var Any_last_Due = document.querySelector('#AnyLastDue');
var UnPaid = document.querySelector('#unpaid')


var userlist = [];
var userTableBody = document.querySelector("#userTableBody");

saveform.addEventListener("click", function (event) {
    event.preventDefault();

    var _Vendor_name = Vendor_name.value;
    var _Email_id = Email_id.value;
    var _Mobile_number = Mobile_number.value;
    var _NetBanking = NetBanking.checked;
    var _UPI = UPI.checked;
    var _Card = Card.checked;
    var _Last_date = Last_date.value;
    var _Due_date = Due_date.value;
    var _Due_Charges = Due_Charges.value;
    var _Suspention_date = Suspention_date.value;
    var _Paid = Paid.checked;
    var _UnPaid = UnPaid.checked;
    var _Any_last_Due = Any_last_Due.value;
    // var _terms = checkbox.value;

    // checking for empty vendor name
    if (_Vendor_name == "") {
        alert("Please Enter your Full Name");
        return false;
    }
    // checking for empty email
    if (_Email_id == "") {
        alert("Please Enter your email");
        return false;
    }
    // checking for empty number
    if (_Mobile_number == "") {
        alert("Please Enter your Mobile number");
        return false;
    }
    // checking for empty last date
    if (_Last_date == "") {
        alert("Please Enter your last date");
        return false;
    }

    // checking for empty _Due_date

    if (_Due_date == "") {
        alert("Please Enter your due date");
        return false;
    }

    // checking for empty _Suspention_date

    if (_Suspention_date == "") {
        alert("Please Enter your suspention date");
        return false;
    }


    if (_NetBanking == false && _UPI == false && _Card == false) {
        alert("Select payment Payment Type");
        return false;
    }
    if (_Paid == false && _UnPaid == false) {
        alert("Select Current status");
        return false;
    }

    if (_Due_Charges == "") {
        alert("Enter your Due charges");
        return false;
    }


    var Payment_selected = "";
    if (_NetBanking) {
        Payment_selected = "NetBanking";
    }
    else if (_UPI) {
        Payment_selected = "UPI";
    }
    else if (_Card) {
        Payment_selected = "Card"
    } else {
        Payment_selected = "NA"
    }

    var Current_status_selected = "";
    if (_Paid) {
        Current_status_selected = "Paid";
    }
    else if (_UnPaid) {
        Current_status_selected = "UnPaid";
    } else {
        Payment_selected = "NA"
    }

    //. need to add new user 


    var newuser = {
        Vendor_name: _Vendor_name,
        Email_id: _Email_id,
        Mobile_number: _Mobile_number,
        // NetBanking : _NetBanking,
        Payment_selected: Payment_selected,
        Last_date: _Last_date,
        Due_date: _Due_date,
        Due_Charges: _Due_Charges,
        Suspention_date: _Suspention_date,
        Any_last_Due: _Any_last_Due,
        Current_status_selected: Current_status_selected
    };


    userlist.push(newuser);
    printTable();
    console.log(userlist);
    _Vendor_name = "";
    _Email_id = "";
    _Mobile_number = "";
    _NetBanking = false;
    _UPI = false;
    _Card = false;
    _Last_date = "";
    _Due_date = "";
    _Suspention_date = "";
    _Paid = false;
    _UnPaid = false;
});

function printTable() {
    var _rows = userlist.map(function (value, index) {
        return ` <tr>
      <td>${index + 1}</td>
      <td>${value.Vendor_name}</td>
      <td>${value.Email_id}</td>
      <td>${value.Mobile_number}</td>
      <td>${value.Payment_selected}</td>
      <td>${value.Last_date}</td>
      <td>${value.Due_date}</td>
      <td>${value.Due_Charges}</td>
      <td>${value.Suspention_date}</td>
      <td>${value.Current_status_selected}</td>
      <td>${value.Any_last_Due}</td>
      
      <td>
        <button class="trash-icon" data-id="${index}">
        <span class="fa fa-trash"></span>
        </button>
      </td>
  </tr>`;
    });
    userTableBody.innerHTML = _rows.join("");
    remove_data();
}

function remove_data() {
    trash_data = document.querySelectorAll(".trash-icon");
    trash_data.forEach(function (button) {
        button.addEventListener("click", function (event) {
            // console.log("clicked");
            var data = button.dataset;
            userlist.splice(data.id, 1);
            printTable();
            alert("Data deleted successfully");
        });
    });
}
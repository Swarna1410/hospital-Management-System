// ---------------------------------------------
// ALERT FUNCTION
// ---------------------------------------------
function showMessage(text) {
    alert(text);
}

// ---------------------------------------------
// PATIENT MODULE
// ---------------------------------------------
function addPatient() {
    let name = document.getElementById("pname").value;
    let age = document.getElementById("page").value;
    let disease = document.getElementById("pdisease").value;

    if (name === "" || age === "" || disease === "") {
        showMessage("Please fill all patient details!");
        return;
    }

    let patient = { name, age, disease };

    let patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.push(patient);
    localStorage.setItem("patients", JSON.stringify(patients));

    showMessage("Patient added successfully!");
    displayPatients();
}

function displayPatients() {
    let patients = JSON.parse(localStorage.getItem("patients")) || [];
    let table = document.getElementById("patientTable");

    if (!table) return;

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Disease</th>
            <th>Action</th>
        </tr>
    `;

    patients.forEach((p, index) => {
        table.innerHTML += `
            <tr>
                <td>${p.name}</td>
                <td>${p.age}</td>
                <td>${p.disease}</td>
                <td><button onclick="deletePatient(${index})">Delete</button></td>
            </tr>
        `;
    });
}

function deletePatient(index) {
    let patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.splice(index, 1);
    localStorage.setItem("patients", JSON.stringify(patients));
    displayPatients();
}

// ---------------------------------------------
// DOCTOR MODULE
// ---------------------------------------------
function addDoctor() {
    let name = document.getElementById("dname").value;
    let speciality = document.getElementById("dspec").value;

    if (name === "" || speciality === "") {
        showMessage("Please enter doctor name and speciality!");
        return;
    }

    showMessage("Doctor added successfully!");
}

// ---------------------------------------------
// APPOINTMENT MODULE
// ---------------------------------------------
function bookAppointment() {
    let pname = document.getElementById("appPatient").value;
    let doctor = document.getElementById("appDoctor").value;
    let date = document.getElementById("appDate").value;

    if (pname === "" || doctor === "" || date === "") {
        showMessage("Please fill all appointment details!");
        return;
    }

    showMessage("Appointment booked successfully!");
}

// ---------------------------------------------
// BILLING MODULE
// ---------------------------------------------
function generateBill() {
    let name = document.getElementById("bpatient").value;
    let amount = document.getElementById("bamount").value;

    if (name === "" || amount === "") {
        showMessage("Enter both patient name and amount!");
        return;
    }

    document.getElementById("billOutput").innerHTML =
        "Bill generated for " + name + ": ₹" + amount;
}

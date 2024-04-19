class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
class People {
    constructor() {
        this.people = [];
    }
    addPerson(person) {
        this.people.push(person);
    }
    deletePerson(index) {
        if (index >= 0 && index < this.people.length) {
            this.people.splice(index, 1);
        }
    }
    displayAllPeople() {
        this.people.forEach((person, index) => {
            console.log(`Person ${index + 1}: Name - ${person.name}, Age - ${person.age}`);
        });
    }
    displaySinglePerson(index) {
        if (index >= 0 && index < this.people.length) {
            const person = this.people[index];
            console.log(`Name - ${person.name}, Age - ${person.age}`);
        }
    }
}
const peopleList = new People();
const peopleUl = document.getElementById("people-list");
function addPerson() {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const addressInput = document.getElementById("address");
    const name = nameInput.value;
    const age = parseInt(ageInput.value);
    const address = addressInput.value;
    if (validateForm(name, age, address)) {
        peopleList.addPerson(new Person(name, age, address));
        displayAllPeople();
        nameInput.value = "";
        ageInput.value = "";
        addressInput.value = "";
    }
    else {
        alert("Form data is invalid. Please check and try again.");
    }
}
function deletePerson() {
    const index = prompt("Enter index of person to delete:");
    peopleList.deletePerson(parseInt(index) - 1);
    displayAllPeople();
}
function displayAllPeople() {
    peopleUl.innerHTML = "";
    peopleList.people.forEach((person, index) => {
        const li = document.createElement("ol");
        li.textContent = `${index + 1}. Name: ${person.name}, Age: ${person.age} Address: ${person.address}`;
        peopleUl.appendChild(li);
    });
}
function displaySinglePerson() {
    const index = prompt("Enter index of person to display:");
    if (index !== null) {
        peopleUl.innerHTML = "";
        const person = peopleList.people[parseInt(index) - 1];
        if (person) {
            const li = document.createElement("ol");
            li.textContent = `Name: ${person.name}, Age: ${person.age} Address: ${person.address}`;
            peopleUl.appendChild(li);
        }
        else {
            alert("Invalid index!");
        }
    }
}
function validateForm(name, age, address) {
    if (name.trim() === "" || isNaN(age) || age <= 0 || address.trim() === "") {
        return false;
    }
    return true;
}

import Store from "./Store.js";

// UI Class: Handle UI tasks
export default class UI {
	static displayContacts() {
		const contacts = Store.getContacts();
		contacts.forEach(contact => {
			UI.addContactToList(contact);
		});
	}

	static replaceContacts() {
		const contacts = Store.getContacts();
		
		const list = document.querySelector("#contact-list");
		while (list.firstChild) {
			list.firstChild.remove();
		}

		contacts.forEach(contact => {
			UI.addContactToList(contact);
		});
	}


	static addContactToList(contact) {
		const list = document.querySelector("#contact-list");

		const row = document.createElement("tr");

		row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.telephone}</td>
            <td>${contact.email}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

		list.appendChild(row);
	}

	static deleteContact(el) {
		if (el.classList.contains("delete")) {
			el.parentElement.parentElement.remove();
		}
	}

	static showAlert(message, className) {
		const div = document.createElement("div");
		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector(".container");
		const form = document.querySelector("#contact-form");
		container.insertBefore(div, form);
		setTimeout(() => {
			document.querySelector(".alert").remove();
		}, 2000);
	}

	static clearFields() {
		document.querySelector("#name").value = "";
		document.querySelector("#telephone").value = "";
		document.querySelector("#email").value = "";
	}
}

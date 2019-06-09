// Store Class: Handle storage
export default class Store {
	static getContacts() {
		let contacts;
		if (localStorage.getItem("contacts") === null) {
			contacts = [];
		} else {
			contacts = JSON.parse(localStorage.getItem("contacts"));
		}
		return contacts;
	}

	static addContact(contact) {
		const contacts = Store.getContacts();
		contacts.push(contact);
		contacts.sort(function(a, b) {
			var nameA = a.name.toUpperCase(); // ignore upper and lowercase
			var nameB = b.name.toUpperCase(); // ignore upper and lowercase
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			// names must be equal
			return 0;
		});
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}

	static removeContact(email) {
		const contacts = Store.getContacts();
		contacts.forEach((contact, index) => {
			if (contact.email === email) {
				contacts.splice(index, 1);
			}
		});
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}
}

import Contact from "./Classes/Contact.js";
import UI from "./Classes/UI.js";
import Store from "./Classes/Store.js";

// Display Contacts
document.addEventListener("DOMContentLoaded", UI.displayContacts);

// Add a Contact
document.querySelector("#contact-form").addEventListener("submit", e => {
	// Prevent actual submit
	e.preventDefault();

	// Get form values
	const name = document.querySelector("#name").value;
	const telephone = document.querySelector("#telephone").value;
	const email = document.querySelector("#email").value;

	// Validate
	if (name === "" || telephone === "" || email === "") {
		UI.showAlert("Please fill in all fields", "danger");
	} else {
		// Instatiate Contact
		const contact = new Contact(name, telephone, email);

		// Add contact to store
		Store.addContact(contact);

		// Replace contacts list with new list
		UI.replaceContacts();

		// Show success message
		UI.showAlert("Contact added", "success");

		// Clear Fields
		UI.clearFields();
	}
});

// Remove a contact
document.querySelector("#contact-list").addEventListener("click", e => {
	e.preventDefault();

	// Remove contact from UI
	UI.deleteContact(e.target);

	// Remove contact from store
	Store.removeContact(e.target.parentElement.previousElementSibling.textContent);

	// Show success message
	UI.showAlert("Contact removed", "warning");
});

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			host: "https://playground.4geeks.com/contact",
			hostContact: `https://playground.4geeks.com/contact/agendas/${slug}/contacts`,
			contacts: [],
			
		},
		actions: {
//GET AGENDAS
//GET AGENDA
//POST AGENDA
//DEL AGENDA

//GET CONTACTS
//POST CONTACT
postContact: async () => {
					const uri = `${hostContact}`
					const options = {
						method: 'POST'
					}
					const response = await fetch(uri, options)
					if (!response.ok) {
						console.log('Error: ', response.status, response.statusText)
						return
					}
					const data = await response.json()
					console.log('Data is = ', data);
					postContact(data.results)
				}

//EDIT AGENDA CONTACT
//DEL AGENCONTACT
//POST CONTACT



		}
	};
};

export default getState;

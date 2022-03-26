const getData = async () => {
	const res = await fetch('https://countries.trevorblades.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `
				query getCountries {
					countries {
						name
						code
						emoji
						capital
						currency
						continent {
							name
						}
						languages {
							name
						}
					}
				}
			`,
		}),
	});
	if( ! res.ok) {
		const msg = `Error: ${res.status}`;
		throw new Error(msg);
	}
	const countries = await res.json();
	if(countries.data.countries.length > 0) {
		return countries.data.countries;
	}
	else {
		return [];
	}
};

export default getData;

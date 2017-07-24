import React from 'react'

import {
	PageTemplate,
	Header,
	Footer,
	Heading
} from 'components'

const DevView = () => {

	// componentDidMount() {
	// 	// Decode entities in the URL
	// 	// Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
	// 	window.location.hash = window.decodeURIComponent(window.location.hash);
	// 	const scrollToAnchor = () => {
	// 		const hashParts = window.location.hash.split('#');
	// 		if (hashParts.length > 2) {
	// 			const hash = hashParts.slice(-1)[0];
	// 			document.querySelector(`#${hash}`).scrollIntoView();
	// 		}
	// 	};
	// 	scrollToAnchor();
	// 	window.onhashchange = scrollToAnchor;
	// }

	return (
		<PageTemplate
			header={<Header />}
			footer={<Footer />}
			title='Development'
			>
		</PageTemplate>
	)
}

export default DevView

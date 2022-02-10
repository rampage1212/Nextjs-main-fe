import remark from "remark";
import html from "remark-html";
import prism from "remark-prism";

export default async function markdownToHtml(markdown) {
	const result = await remark()
		.use(html)
		.use(prism)
		.process(
			`\`\`\`javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello remark-codesandbox!</h1>,
  document.getElementById('root')
);
\`\`\`
	`
		);
	return result.toString();
}

export const markdownManager = async () => {
	let parsedHTML = await remark()
		.use(remarkPrism)
		.use(html)
		.process(
			`\`\`\`javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello remark-codesandbox!</h1>,
  document.getElementById('root')
);
\`\`\`
	`
		);

	return String(parsedHTML);
};

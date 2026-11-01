import spawn from 'nano-spawn';

const query = `query($endCursor: String) {
	user(login: "privatenumber") {
		repositories(first: 100, after: $endCursor, privacy: PUBLIC, isFork: false, ownerAffiliations: OWNER, orderBy: { field: NAME, direction: ASC }) {
			pageInfo { hasNextPage endCursor }
			nodes {
				name
				url
				isArchived
				defaultBranchRef { name }
				object(expression: "HEAD:.github/ISSUE_TEMPLATE") { ... on Tree { entries { name } } }
			}
		}
	}
}`;

/**
 * Public repositories with their own `.github/ISSUE_TEMPLATE`,
 * which makes GitHub ignore the default issue templates in this repository.
 */
export const findTemplateOverrides = async () => {
	const { stdout } = await spawn('gh', ['api', 'graphql', '--paginate', '--slurp', '-f', `query=${query}`]);
	const pages = JSON.parse(stdout);

	return pages
		.flatMap(page => page.data.user.repositories.nodes)
		.filter(repo => repo.object && !repo.isArchived && repo.name !== '.github')
		.map(repo => ({
			name: repo.name,
			url: `${repo.url}/tree/${repo.defaultBranchRef.name}/.github/ISSUE_TEMPLATE`,
			templates: repo.object.entries.map(entry => entry.name),
		}));
};

if (import.meta.main) {
	console.log(JSON.stringify(await findTemplateOverrides(), null, '\t'));
}

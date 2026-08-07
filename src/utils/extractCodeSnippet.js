
export const extractSnippet = (source, tag = "implementation") => {
	const startTag = `// #region ${tag}`;
	const endTag = `// #endregion ${tag}`;

	const start = source.indexOf(startTag);
	const end = source.indexOf(endTag);
	if (start === -1 || end === -1) return source;

	return source.slice(start + startTag.length, end).replace(/^\n+|\n+$/g, "");
};

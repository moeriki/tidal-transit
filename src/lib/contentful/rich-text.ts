import {
	documentToHtmlString,
	type NodeRenderer,
} from '@contentful/rich-text-html-renderer';
import type { Document } from '@contentful/rich-text-types';

const renderEmbeddedAssetBlockNode: NodeRenderer = (node) => {
	return `<img alt="${node.data.target.fields.title}" src="${node.data.target.fields.file.url}" />`;
};

const options = {
	renderNode: { 'embedded-asset-block': renderEmbeddedAssetBlockNode },
};

export function renderRichText(document: Document): string {
	return documentToHtmlString(document, options);
}

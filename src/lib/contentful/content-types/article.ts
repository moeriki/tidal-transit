import type { EntrySkeletonType } from 'contentful';
import { contentfulClient } from '../client';

export interface Article {
	title: string;
	description: Document;
}

type ArticleItem = EntrySkeletonType<Article>;

export const getArticle = (id: string) =>
	contentfulClient.getEntry<ArticleItem>(id);

export const getArticles = () =>
	contentfulClient.getEntries<ArticleItem>({ content_type: 'test' });

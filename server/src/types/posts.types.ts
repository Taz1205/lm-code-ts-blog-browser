export type User = {
	id: string;
	userName: string;
	creationDate: Date;
};

export type Post = {
	id: string;
	title: string;
	text: string;
	author: User;
};

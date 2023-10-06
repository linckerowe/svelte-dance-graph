// TODO all the types
export type Types = 'Aerial' | 'Combo' | 'Lift' | 'Flip (Handstand)';

export type DanceMove = {
	title: string;
	slug: string;
	level: string;
	type: Types[];
	otherNames: string;
	published: boolean;
};

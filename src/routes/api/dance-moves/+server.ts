import { json } from '@sveltejs/kit';
import type { DanceMove } from '$lib/types';

async function getDanceMoves() {
	const danceMoves: DanceMove[] = [];

	const paths = import.meta.glob('/src/dance-moves/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<DanceMove, 'slug'>;
			const danceMove = { ...metadata, slug } satisfies DanceMove;
			danceMove.published && danceMoves.push(danceMove);
		}
	}

	// danceMoves = danceMoves.sort(
	// 	(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	// );

	return danceMoves;
}

export async function GET() {
	console.log('hello');
	const danceMoves = await getDanceMoves();
	return json(danceMoves);
}

import type { DanceMove } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/dance-moves');
	const danceMoves: DanceMove[] = await response.json();
	return { danceMoves };
}

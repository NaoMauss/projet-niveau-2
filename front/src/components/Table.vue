<template>
	<div class="table">
		<div class="table-title">
			<div>Rank</div>
			<div>Streamer</div>
			<div>Twitch</div>
			<div>Compte</div>
			<div>Elo</div>
			<div>Matchs</div>
			<div>Win</div>
			<div>Loose</div>
			<div>Winrate</div>
		</div>
		<div v-for="(streamer, index) in streamers">
			<div class="table-row">
				<div>{{  index + 1 }}</div>
				<div>{{ streamer.pseudo }}</div>
				<TwitchButton :twitch="streamer.twitchLink" :online="true"/>
				<div>{{ streamer.pseudo }}</div>
				<div>{{ streamer.tier }} {{ streamer.rank }} {{ streamer.leaguePoints }}LP</div>
				<div>{{ streamer.wins + streamer.losses }}</div>
				<div>{{ streamer.wins }}</div>
				<div>{{ streamer.losses }}</div>
				<div>{{ Math.round(streamer.winrate) }}%</div>
			</div>
		</div>
	</div>

</template>

<script setup lang="ts">
import TwitchButton from './TwitchButton.vue';

defineProps<{
  streamers: any[];
}>();
</script>

<style scoped>
	.table {
		border: solid 2px #000;
		border-radius: 5px;
		background-color: #F8B5FF;
		width: 100%;
		padding: 10px;
	}
	.table-title {
		display: grid;
		width: 100%;
		grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr 1fr 1fr 1fr;
		font-weight: bold;
		text-align: left;
	}
	.table-row {
		display: grid;
		width: 100%;
		grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr 1fr 1fr 1fr;
		text-align: left;
	}
	.table-row div{
		margin-top: 20px;
	}
</style>
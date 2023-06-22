<template>
	<div class="main_wrapper">
		<div class="_container">
			<div class="divider"></div>
			<div class="about_title text-2xl sm:text-3xl md:text-4xl">
				{{ info.title }}
			</div>
			<div class="about_content text-xl sm:text-2xl md:text-3xl">
				{{ info.content }}
			</div>
			<div class="hashtag_items">
				<div class="hashtag_item text-2xl md:text-3xl">#DotNetCore</div>
				<div class="hashtag_item text-2xl md:text-3xl">#WebAplication</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import infoAll from '@/store/about.json'

let language = localStorage.getItem('user_language')
if (!language) {
	localStorage.setItem('user_language', 'en')
	language = 'en'
}
let info = infoAll[language]

</script>

<style scoped>
.about_title {
	margin-top: 50px;
	font-weight: 600;
}

.about_content {
	margin-top: 25px;
	font-weight: 400;
	text-align: center;
}

.hashtag_items {
	display: flex;
	justify-content: center;
	grid-gap: 15px;
	margin: 45px 0 40px;
}

.hashtag_item {
	font-weight: 600;
	text-align: center;
	color: #034AD6;
}

@media screen and (max-width: 540px) {
	.hashtag_items {
		display: grid;
		grid-gap: 0;
		margin: 35px 0 30px;
	}
}
</style>
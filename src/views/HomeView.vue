<template>
	<div class="main_wrapper">
		<div class="_container">
			<div class="divider"></div>
			<div class="avatar_wrp">
				<img src="@/assets/images/ava.jpg" alt="" class="user_avatar">
			</div>
			<div class="user_name text-4xl md:text-5xl">{{ user.name }}</div>
			<div class="flex justify-center">
				<div class="mini_divider"></div>
			</div>
			<div class="user_title text-3xl md:text-4xl">{{ user.position }}</div>
		</div>
	</div>
</template>

<script setup>
// @ is an alias to /src
import userAll from '@/store/user.json'
// import icons from '@/store/icons.json'

let language = localStorage.getItem('user_language')
if (!language) {
	localStorage.getItem('user_language', 'en')
	language = 'en'
}
let user = userAll[language]

</script>

<style scoped>
.avatar_wrp {
	margin-top: 42px;
	display: flex;
	justify-content: center;
}

.user_avatar {
	width: 252px;
	height: 252px;
	border-radius: 50%;
	object-fit: cover;
}

.user_name {
	font-weight: 600;
	margin-top: 32px;
}

.user_title {
	font-weight: 400;
	margin-bottom: 38px;
}

.mini_divider {
	width: 100px;
	border-bottom: 1px solid gray;
	margin: 18px 0;
}

@media screen and (max-width: 410px) {
	.avatar_wrp {
		margin-top: 25px;
	}
}
</style>

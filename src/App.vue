<template>
	<div class="user_preference flex justify-end items-center gap-x-2">
		<div class="user_language hover:cursor-pointer" @click="changeLanguage(showLang)">{{ showLang }}</div>
		<div class="user_theme hover:cursor-pointer" @click="changeTheme(showTheme)">
			<img :src="require(`@/assets/images/theme/${showTheme}`)" alt="">
		</div>
	</div>
	<nav>
		<router-link v-for="item in menu" :to="item.path" :key="item.id" class="menu_item">
			{{ item.menu_item }}
		</router-link>
	</nav>
	<transition>
		<router-view></router-view>
	</transition>
	<!-- <router-view v-slot="{ Component }">
		<transition>
			<component :is="Component" />
		</transition>
	</router-view> -->
	<div class="main_wrapper">
		<div class="_container">
			<div class="divider"></div>
			<br>
			<div class="user_links flex justify-center">
				<div v-for="item in icons" :key="item.id" class="user_link mr-3.5 hover:cursor-pointer">
					<a :href="item.link" target="_blank"><img :src="require(`@/assets/images/links/${item.name}`)"
							:alt="item.alt"></a>
				</div>
			</div>
			<br>
		</div>
	</div>
</template>

<script setup>
import menuAll from '@/store/menu.json'
import icons from '@/store/icons.json'

const body = document.querySelector('body')
/*
Set current theme
*/
let theme = localStorage.getItem('user_theme')
if (!theme) {
	localStorage.setItem('user_theme', 'dark')
	theme = 'dark'
}
if (theme == 'dark') body.classList.add('dark_theme')
else body.classList.add('light_theme')

let showTheme = theme == 'dark' ? 'sun.svg' : 'moon.svg'

/*
Set current language
*/
let language = localStorage.getItem('user_language')
if (!language) {
	localStorage.setItem('user_language', 'en')
	language = 'en'
}
let showLang = language == 'en' ? 'Ru' : 'En'

/*
Set menu
*/
let menu = menuAll[language]

/*
Functions
*/
function changeLanguage(lang) {
	if (lang == 'Ru') {
		localStorage.setItem('user_language', 'ru')
	} else {
		localStorage.setItem('user_language', 'en')
	}
	window.location.reload()
}
function changeTheme(theme) {
	console.log(typeof theme)
	console.log(theme)
	if (theme == 'sun.svg') {
		localStorage.setItem('user_theme', 'light')
	} else {
		localStorage.setItem('user_theme', 'dark')
	}
	window.location.reload()
}
</script>

<style>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

#app {}

.dark_theme {
	background: #101729;
	color: #FFFFFF;
}

.light_theme {
	background: #E3EEFF;
	color: #000;
}

.user_preference {
	max-width: 1400px;
	padding: 15px 15px 0 0;
}

.user_language {
	font-size: 18px;
}

.user_theme {}

.user_theme img {
	width: 28px;
	height: 28px;
}

nav {
	display: flex;
	justify-content: center;
	grid-gap: 15px;
	padding-top: 40px;
	margin-bottom: 50px;
}

.dark_theme nav a.router-link-exact-active {
	border: 2px solid #fff;
	background: #fff;
	color: black;
}

.light_theme nav a.router-link-exact-active {
	border: 2px solid #034AD6;
	background: #034AD6;
	color: #fff;
}

.menu_item {
	padding: 10px 25px;
	border: 2px solid #034AD6;
	border-radius: 30px;
}

.user_links {}

.user_link {
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.dark_theme .user_link {
	background: #AAA9A9;
}
.light_theme .user_link {
	background: #fff;
}
.user_links img {

}

@media screen and (max-width: 500px) {
	nav {
		grid-gap: 8px;
		padding: 10px;
		margin-bottom: 20px;
	}
}

@media screen and (max-width: 410px) {
	nav {
		display: grid;
		grid-template-columns: 1fr;
	}
}
</style>

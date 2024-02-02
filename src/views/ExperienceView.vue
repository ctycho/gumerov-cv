<template>
	<div class="main_wrapper">
		<div class="_container">
			<div class="divider"></div>
            
            <div v-for="company in info" :key="info.id" class="company">
                <div class="company-header">
                    <div class="company-period">{{ company.period }}</div>
                    <div class="company-name">{{ company.name }}</div>
                </div>
                <div class="company-block">
                    <div class="block-title">{{ company.title_one }}</div>
                    <div class="block-desc">{{ company.outline }}</div>
                </div>
                <div class="company-block">
                    <div class="block-title">{{ company.title_two }}</div>
                    <div class="block-desc">
                        <div v-for="item in company.responsibilities" class="block-list">{{ item }}</div>
                    </div>
                </div>
            </div>
			<div class="divider"></div>
		</div>
	</div>
</template>
<script setup>
import { exp } from '@/store/experience.ts'

let language = localStorage.getItem('user_language')
if (!language) {
	localStorage.setItem('user_language', 'en')
	language = 'en'
}
let info = exp[language]

</script>

<style scoped>
.company {
    margin: 50px 0;
}
.company-header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: space-between;
    grid-column-gap: 30px;
    margin-bottom: 20px;
}
.company-period {
    font-size: 24px;
    font-weight: 600;
    text-align: left;
}
.company-name {
    font-size: 24px;
    font-weight: 600;
    text-align: left;
}
.company-block {
    margin-bottom: 20px;
}
.block-title {
    text-align: left;
    font-style: italic;
    font-size: 18px;
    margin-bottom: 15px;
}
.block-desc {
    text-align: left;
}
.block-list {
    position: relative;
    text-align: left;
    padding-left: 15px;
}
.block-list::before {
    position: absolute;
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
</style>
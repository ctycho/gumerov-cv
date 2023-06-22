<template>
    <div class="main_wrapper">
        <div class="_container">
            <div class="divider"></div>
            <div class="ptojects_title text-2xl sm:text-3xl md:text-4xl mb-8 mt-10">
                {{ content.title }}
            </div>
            <div class="projects">
                <div class="projects_header">
                    <div class="projects_header_col">{{ content.name }}</div>
                    <div class="projects_header_col">{{ content.lang }}</div>
                </div>
                <a v-for="repo in repos" :key="repo.id" class="project" :href="repo.html_url" target="_blank">
                    <div class="project_col">{{ repo.name }}</div>
                    <div class="project_col">{{ repo.language }}</div>
                </a>
            </div>
            <br>
            <br>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import content from '@/store/projects.json'

let language = localStorage.getItem('user_language')
if (!language) {
	localStorage.setItem('user_language', 'en')
	language = 'en'
}

export default {
    name: "Projects",
    data() {
        return {
            repos: null,
            followers: null,
            content: content[language]
        }
    },
    created: function () {
        axios.get('https://api.github.com/users/ctycho/repos').then((response) => {
            this.repos = response.data.reverse()
        })
    }
}
</script>

<style scoped>
.projects {

}
.projects_header {
    display: grid;
    grid-template-columns: 60% 40%;
    border-radius: 8px;
    font-size: 18px;
}
.dark_theme .projects_header {
    background: #617c93;
}
.light_theme .projects_header {
    background: #fff;
}

.projects_header_col {
    padding: 3px;
}
.project {
    display: grid;
    grid-template-columns: 60% 40%;
    transition: .3s ease;
}
.project:hover {
    color: #034AD6;
}
.project_col {
    padding: 8px 0;
    text-align: start;
    border-bottom: 2px solid #034AD6;
}
</style>
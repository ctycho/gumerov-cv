<template>
	<div class="main_wrapper">
		<div class="_container">
			<div class="divider"></div>
            <div class="company">
                <div class="company-header">
                    <div class="company-period">April 2022 - Present</div>
                    <div class="company-name">Media-tel by Devoteam, SimpleOne developer</div>
                </div>
                <div class="company-block">
                    <div class="block-title">Outline</div>
                    <div class="block-desc">Integration SimpleOne platform to the country top rated bank, main responsibilities creating dynamic portal for employees, synchronize tables with data from SAP, configuring busssiness rules</div>
                </div>
                <div class="company-block">
                    <div class="block-title">Key responsibilities</div>
                    <div class="block-desc">
                        <div class="block-list">Creating portal (Figma)</div>
                        <div class="block-list">Integration with SAP</div>
                        <div class="block-list">Creating SQL queries</div>
                    </div>
                </div>
            </div>
            <div class="company">
                <div class="company-header">
                    <div class="company-period">October 2021 - April 2022</div>
                    <div class="company-name">GDC, System Developer (ServiceNow)</div>
                </div>
                <div class="company-block">
                    <div class="block-title">Outline</div>
                    <div class="block-desc">The role involves designing, configuring, developing, troubleshooting and implementing baseline and custom applications to enhance the platform.</div>
                </div>
                <div class="company-block">
                    <div class="block-title">Key responsibilities</div>
                    <div class="block-desc">
                        <div class="block-list">Developing, configuring, and customizing the ServiceNow platform to fit business requirements.</div>
                        <div class="block-list">UI Actions, Business rules, Client scripts</div>
                        <div class="block-list">Creating widgets (HTML5, CSS3, JavaScript)</div>
                        <div class="block-list">Debugging and fixing technical problems</div>
                        <div class="block-list">Communication with customer</div>
                        <div class="block-list">Producing and running test cases to guarantee software quality.</div>
                    </div>
                </div>
            </div>
			<div class="divider"></div>
		</div>
	</div>
</template>
<script setup>
// import infoAll from '@/store/about.json'

let language = localStorage.getItem('user_language')
if (!language) {
	localStorage.setItem('user_language', 'en')
	language = 'en'
}
// let info = infoAll[language]

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
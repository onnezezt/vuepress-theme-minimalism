<template>
	<div class="theme-container"
			 :class="isDark?'dark':''">
		<div v-if="$route.path !== '/'">
			<div class="dark-icon hidden-xs-only"
					 v-if="themeConfig.darkMode.switch"
					 @click="isDark=!isDark">
				<span v-if="isDark"
							class="iconfont icon-yueliang"></span>
				<span v-else
							class="iconfont icon-taiyang"></span>
			</div>
		</div>
		<transition name="custom-classes-transition"
								enter-active-class="animated fadeIn">
			<Home v-if="$route.path == '/'" />
			<!-- <Home /> -->
			<!-- <router-view></router-view> -->
			<div v-else>
				<Header />
				<el-container>
					<el-main>
						<keep-alive>
							<!-- <router-view></router-view> -->
							<component :is="whichComponent"></component>
						</keep-alive>
					</el-main>
				</el-container>
				<BackTop />
				<Footer />
			</div>
		</transition>
	</div>
</template>
<script>
import 'element-ui/lib/theme-chalk/display.css'
import moment from 'moment'
import '@/styles/icon/iconfont.css'
import Home from '@/components/Home'
import List from '@/components/List'
import Tags from '@/components/Tags'
import TimeLine from '@/components/TimeLine'
import Posts from '@/components/Posts'
import BackTop from '@/components/BackTop'
// import '@/styles/icon/iconfont.js'
import { CursorSpecialEffects } from '@/util/fireworks.js'
export default {
	components: { Home, List, Posts, BackTop, Tags, TimeLine },
	data() {
		return {
			isDark: false
		}
	},
	computed: {
		pages() {
			return this.$site.pages
		},
		themeConfig() {
			return this.$site.themeConfig
		},
		whichComponent() {
			const compArr = ['List', 'All', 'Posts', 'TimeLine', 'Tags']
			const Path = this.$route.path
			let comp = ''
			compArr.forEach(item => {
				if (Path.includes(item.toLowerCase())) {
					comp = item
				}
			})
			return comp
		}
	},
	mounted() {
		this.now = new Date()
		this.hour = this.now.getHours()
		if (
			this.hour > this.$site.themeConfig.darkMode.on ||
			this.hour < this.$site.themeConfig.darkMode.off
		) {
			this.isDark = true
		}
		this.window = window
		const comments = [
			'',
			'                    .::::.            快捷键：',
			'                  .::::::::.            j：下移',
			'                 :::::::::::            k：上移',
			"             ..:::::::::::'             t：移到最顶",
			"           '::::::::::::'               b：移到最底",
			'             .::::::::::                n：下移很多',
			"        '::::::::::::::..               m：上移很多",
			'             ..::::::::::::.',
			'           ``::::::::::::::::',
			"            ::::``:::::::::'        .:::.",
			"           ::::'   ':::::'       .::::::::.",
			"         .::::'      ::::     .:::::::'::::.",
			"        .:::'       :::::  .::::::::'  ':::::.",
			"       .::'        :::::::::::::::'      ':::::.",
			"      .::'        :::::::::::::::'          ':::.",
			"  ...:::          :::::::::::::'              ``::.",
			" ```` ':.         '::::::::::'                  ::::..",
			"                    ':::::'                    ':'````..",
			''
		]
		comments.forEach(item => {
			console.log('%c' + item, 'color: #399c9c')
		})
		// evanyou()
		// const cursorSpecialEffects = new CursorSpecialEffects()
		// cursorSpecialEffects.init()
	}
}
</script>
<style lang="stylus" scoped>
@import './../styles/animeition'
@import './../styles/dark'

.theme-container {
	min-width: 377px
	overflow: hidden

	.dark-icon {
		position: fixed
		top: 0
		right: 0
		z-index: 100

		span {
			font-size: 3rem
			color: #e6a23c
			cursor: pointer
		}

		.icon-dark {
			cursor: pointer
			width: 3rem
			height: 3rem
		}
	}

	.el-header, .el-footer {
		background-color: #B3C0D1
		color: #333
		text-align: center
		line-height: 60px
	}

	#evanyou {
		position: fixed
		width: 100%
		height: 100%
		top: 0
		left: 0
		z-index: -1
	}
}
</style>
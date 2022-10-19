import Vue from 'vue'
import Router from 'vue-router'

import Home from "page/Home/Home"
import HelloWorld from "components/HelloWorld/HelloWorld"

Vue.use(Router)

// const home = r => require.ensure([], () => r(require(resolve('/page/home'))), 'home');
// const HelloWorld = r => require.ensure([], () => r(require(resolve('/components/HelloWorld'))), 'HelloWorld');

const routes = [
	{
		path: '*',
		redirect: "/home"
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/hello',
		component: HelloWorld
	}
]

export default new Router({
	routes
})

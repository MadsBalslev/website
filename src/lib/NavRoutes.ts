import { config } from '$lib/config'

const routes = [
	{
		href: '/',
		label: 'Home'
	},
	{
		href: '/projects',
		label: 'Projects'
	},
	{
		href: '/resume',
		label: 'Resume'
	},
	...(config.features.blog ? [{ href: '/blog', label: 'Blog' }] : [])
]

export default routes

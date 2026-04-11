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
	{
		href: '/uses',
		label: 'Uses'
	},
	...(config.features.blog ? [{ href: '/blog', label: 'Blog' }] : [])
]

export default routes

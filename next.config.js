/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
		  {
			source: "/auth/check",
			destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/check`,
		  },
		  {
			source: "/user/users",
			destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/users`,
		  },
		  {
			source: "/user/profile",
			destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
		  },
		  {
			source: "/user/me",
			destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
		  }
		];
	},
	experimental: {
		instrumentationHook: true
	},
	webpack: (config,) => {
		config.module.rules.push(
			{
				test:   /(\.d\.ts|\.map)$/,
				loader: 'ignore-loader',
			},
		)

		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.('.svg')
		)

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: {not: /\.(css|scss|sass)$/},
				resourceQuery: {not: /url/},
				loader: '@svgr/webpack',
				options: {
					dimensions: false,
					titleProp: true,
				},
			}
		)

		fileLoaderRule.exclude = /\.svg$/i
		
		return config
	},
	images: {
		domains: ['cgs-conroller.s3.amazonaws.com',],
	},
	transpilePackages: [
		'@adobe/react-spectrum',
		'@react-spectrum/actionbar',
		'@react-spectrum/actiongroup',
		'@react-spectrum/avatar',
		'@react-spectrum/badge',
		'@react-spectrum/breadcrumbs',
		'@react-spectrum/button',
		'@react-spectrum/buttongroup',
		'@react-spectrum/calendar',
		'@react-spectrum/checkbox',
		'@react-spectrum/combobox',
		'@react-spectrum/contextualhelp',
		'@react-spectrum/datepicker',
		'@react-spectrum/dialog',
		'@react-spectrum/divider',
		'@react-spectrum/dnd',
		'@react-spectrum/form',
		'@react-spectrum/icon',
		'@react-spectrum/illustratedmessage',
		'@react-spectrum/inlinealert',
		'@react-spectrum/image',
		'@react-spectrum/label',
		'@react-spectrum/labeledvalue',
		'@react-spectrum/layout',
		'@react-spectrum/link',
		'@react-spectrum/list',
		'@react-spectrum/listbox',
		'@react-spectrum/menu',
		'@react-spectrum/meter',
		'@react-spectrum/numberfield',
		'@react-spectrum/overlays',
		'@react-spectrum/picker',
		'@react-spectrum/progress',
		'@react-spectrum/provider',
		'@react-spectrum/radio',
		'@react-spectrum/slider',
		'@react-spectrum/searchfield',
		'@react-spectrum/statuslight',
		'@react-spectrum/switch',
		'@react-spectrum/table',
		'@react-spectrum/tabs',
		'@react-spectrum/tag',
		'@react-spectrum/text',
		'@react-spectrum/textfield',
		'@react-spectrum/theme-dark',
		'@react-spectrum/theme-default',
		'@react-spectrum/theme-light',
		'@react-spectrum/tooltip',
		'@react-spectrum/view',
		'@react-spectrum/well',
	]
}

module.exports = nextConfig

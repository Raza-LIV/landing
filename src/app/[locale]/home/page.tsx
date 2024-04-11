import * as React from 'react'
import type {
	Metadata,
} from 'next'
import { getI18n, } from '@/locales/tools/server'
import Hero from './components/hero/hero.component'
import ProddsLeague from './components/prodds-league/prodds-league.component'
import PageWrapper from '@/shared/components/page-wrapper/page-wrapper.component'
import ProddsPredict from './components/prodds-predict/prodds-predict.component'
import ProddsCurrencies from './components/prodds-curencies/prodds-currencies.component'
import Roadmap from './components/roadmap/roadmap.component'

export const metadata: Metadata = {
	title: 'Boilerplate',
}

const Home = async(): Promise<React.ReactElement> => {
	const t = await getI18n()

	return (
		<main>
			<PageWrapper>
				<>
					<Hero/>
					<ProddsLeague/>
					<ProddsPredict/>
					<ProddsCurrencies/>
					<Roadmap/>
				</>
			</PageWrapper>

		</main>
	)
}

export default Home

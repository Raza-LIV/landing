import React from 'react'
import classNames from 'classnames'

import type { Preview } from '@storybook/react';

import { Figtree, Fredoka } from '../src/app/fonts.config'

import '../src/shared/styles/globals.scss'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'code' } },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={classNames(Fredoka.variable, Figtree.variable)}>
        <Story />
      </div>
    )
  ]
};

export default preview;

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Trunk-Based Development Practice',
  tagline:
    'Operational guidance for engineering teams keeping Salesforce delivery stable, observable, and continuously releasable.',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://corekraft.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/trunk-based-development-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'corekraft',
  projectName: 'trunk-based-development-docs',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/corekraft/trunk-based-development-docs/tree/main/',
        },
        blog: false,
        gtag: {
          trackingID: 'G-QJ4VN4K0JC',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [require.resolve('docusaurus-lunr-search')],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/mission-control-social-card.svg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Trunk-Based Development',
      logo: {
        alt: 'Trunk-Based Development for Salesforce',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/corekraft/trunk-based-development-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/',
            },
            {
              label: 'Salesforce Starting Steps',
              to: '/docs/salesforce/starting-steps',
            },
          ],
        },
        {
          title: 'References',
          items: [
            {
              label: 'TrunkBasedDevelopment.com',
              href: 'https://trunkbaseddevelopment.com/',
            },
            {
              label: 'Feature Flags',
              href: 'https://beyond.minimumcd.org/docs/migrate-to-cd/optimize/feature-flags/',
            },
            {
              label: 'Minimumcd.org',
              href: 'https://minimumcd.org/#trunk-based-development'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/corekraft/trunk-based-development-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Corekraft. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

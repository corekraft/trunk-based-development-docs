import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Foundations',
      items: [
        'foundations/key-points',
        'foundations/core-principles',
        'foundations/migration-guide-concepts',
      ],
    },
    {
      type: 'category',
      label: 'Salesforce',
      items: [
        'salesforce/why-salesforce-needs-tbd',
        'salesforce/starting-steps',
        'salesforce/team-workflow',
      ],
    },
  ],
};

export default sidebars;

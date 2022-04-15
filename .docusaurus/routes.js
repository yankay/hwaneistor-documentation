
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','e2c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','640'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','b1b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','4e9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','599'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','fa5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','792'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','7c1'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','8cf'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','f69'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','3c0'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','248'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','394'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','19f'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','bed'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','e2c'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','e02'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','535'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','d5a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','739'),
    routes: [
      {
        path: '/docs/01features/00local-storage',
        component: ComponentCreator('/docs/01features/00local-storage','810'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/01features/01local-disk-manager',
        component: ComponentCreator('/docs/01features/01local-disk-manager','601'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/01features/02scheduler',
        component: ComponentCreator('/docs/01features/02scheduler','029'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/01features/03DRBD',
        component: ComponentCreator('/docs/01features/03DRBD','650'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/02installation/00prepare',
        component: ComponentCreator('/docs/02installation/00prepare','cc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/02installation/01helm-chart',
        component: ComponentCreator('/docs/02installation/01helm-chart','209'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/02installation/02install',
        component: ComponentCreator('/docs/02installation/02install','c98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/03scenarios',
        component: ComponentCreator('/docs/03scenarios','68d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/04concepts/00k8s-store',
        component: ComponentCreator('/docs/04concepts/00k8s-store','cdc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/04concepts/01cas',
        component: ComponentCreator('/docs/04concepts/01cas','98f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/04concepts/02csi',
        component: ComponentCreator('/docs/04concepts/02csi','767'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/04concepts/03crd',
        component: ComponentCreator('/docs/04concepts/03crd','8eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/04concepts/04volume',
        component: ComponentCreator('/docs/04concepts/04volume','dfc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/04concepts/05lvm',
        component: ComponentCreator('/docs/04concepts/05lvm','cd0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/04concepts/06pvc',
        component: ComponentCreator('/docs/04concepts/06pvc','f5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/05community',
        component: ComponentCreator('/docs/05community','05e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','931'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

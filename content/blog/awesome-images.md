---
path: 100-days-of-code
date: 2021-03-13T17:00:00.000Z
title: 100 Days Of Code Challenge as Frontend Web Developer
description: "#100DaysOfCode #challenge #html #css #js"
---
![Great Gatsby](/../assets/great2.jpg "Great Gatsby")

## Netlify CMS Media Configuration

First, in your `static/admin/config.yml`, make sure you have the following:

```
media_folder: content/assets
public_folder: ../assets
```

Docs: https://www.netlifycms.org/docs/configuration-options/#media-and-public-folders.

## Gatsby Plugins

From [@cwgw](https://github.com/cwgw):

So digging a little deeper, it looks like Gatsby only looks for "subplugins" at one specific path, `options.plugins`.

`gatsby-plugin-mdx` uses `options.gatsbyRemarkPlugins`. This is fine for transforming markdown as the plugin handles that itself, but Gatsby-specific api files like `gatsby-browser.js` don't get loaded because Gatsby doesn't know they exist.

If you try this…

```javascript
{
  resolve: 'gatsby-plugin-mdx',
  options: {
    gatsbyRemarkPlugins: [ `gatsby-remark-images` ],
    plugins: [ `gatsby-remark-images` ],
  }
},
```

…everything works as it should.

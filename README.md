# Twig

Twig is a simple set of icons designed by [Wiredcraft](http://wiredcraft.com) while building some of our products like [devo.ps](http://devo.ps).

Since Twig is a lineart iconset, we needed to make icons specifically for various sizes so as to retain the same line thickness. You will find these icons in the respective folders for 12px, 16px, 24px, 32px & 48px. Some of these folders contain less icons than others, use the 16px one by default.

If you want to contribute some new icons, knock yourself out; just send us a black and white, SVG version of it and we'll consider adding it to the repo.

MIT license and all. Don't be a dick.

## Install

We use both npm and bower, respectively for the gulp dependencies (+ eggshell) and 3rd party JS:

    npm install
    bower install

You also may need to install the `githug-pages` gem:

    sudo gem install github-pages

## Build

You'll need to build the JS and CSS:

    gulp

## Run

It's a regular jekyll site:

    jekyll serve

If you're running it locally, you'll need to overload the configuration with the development specific variables (makes sure we don't prepend resources links with the URL for example):

    jekyll serve --config _config.yml,_config-dev.yml

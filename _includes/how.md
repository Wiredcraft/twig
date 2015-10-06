## How to use it?

1. Download the latest release.
1. Unzip it; you should find a `fonts/` folder.
1. Drop the `fonts/` folder in your project.
1. From your CSS, call the font;

        @font-face {
          font-family: 'twig-24';
          src:url('fonts/twig-24.eot');
          src:url('fonts/twig-24.eot?#iefix') format('embedded-opentype'),
            url('fonts/twig-24.woff') format('woff'),
            url('fonts/twig-24.ttf') format('truetype'),
            url('fonts/twig-24.svg#Icons') format('svg');
          font-weight: normal;
          font-style: normal;
        }

        .twig-24 {
          font-family: 'twig-24';
          font-variant: normal;
          font-weight: normal;
          speak: none;
          text-transform: none;
          -webkit-font-smoothing: antialiased;
        }

    Keep in mind that there are two fonts; `twig-16` and `twig-24` depending optimized for font-sizes of respectively 16px and 24px.
1. We recommend you add icons to an element using the `content` property (e.g `content: '\e800'`), however you can also use HTML directly (e.g. `<span class='icon'>&#xe800;</span>`). The same code applies for any icon in either fonts, whether `twig-16` or `twig-24`.

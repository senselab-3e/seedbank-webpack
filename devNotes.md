**NOTE : For the project to build, these files must exist with exact filenames:

public/index.html is the page template;
src/index.js is the JavaScript entry point.
You can delete or rename the other files.

You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by Webpack. You need to put any JS and CSS files inside src, otherwise Webpack won’t see them.

Only files inside public can be used from public/index.html. 

//---- Notes on styling

Generally, we recommend that you don’t reuse the same CSS classes across different components. For example, instead of using a .Button CSS class in <AcceptButton> and <RejectButton> components, we recommend creating a <Button> component with its own .Button styles, that both <AcceptButton> and <RejectButton> can render (but not inherit).

Following this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition. You can, however, integrate a CSS preprocessor if you find it valuable.

//notes on optional things: https://cssreset.com/what-is-a-css-reset/

A CSS Reset (or “Reset CSS”) is a short, often compressed (minified) set of CSS rules that resets the styling of all HTML elements to a consistent baseline.

In case you didn’t know, every browser has its own default ‘user agent’ stylesheet, that it uses to make unstyled websites appear more legible. For example, most browsers by default make links blue and visited links purple, give tables a certain amount of border and padding, apply variable font-sizes to H1, H2, H3 etc. and a certain amount of padding to almost everything. Ever wondered why Submit buttons look different in every browser?

Obviously this creates a certain amount of headaches for CSS authors, who can’t work out how to make their websites look the same in every browser. (NB: article coming soon about why this is a false notion!)

Using a CSS Reset, CSS authors can force every browser to have all its styles reset to null, thus avoiding cross-browser differences as much as possible.

// Post-Processing CSS

 This project setup minifies your CSS and adds vendor prefixes to it automatically through Autoprefixer so you don’t need to worry about it.

Support for new CSS features like the all property, break properties, custom properties, and media query ranges are automatically polyfilled to add support for older browsers.

You can customize your target support browsers by adjusting the browserslist key in package.json according to the Browserslist specification.

For example, this:

.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
becomes this:

.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}


HOWEVER: CSS Grid Layout prefixing is disabled by default, but it will not strip manual prefixing. If you'd like to opt-in to CSS Grid prefixing, first familiarize yourself about its limitations.

To enable CSS Grid prefixing, add /* autoprefixer grid: autoplace */ to the top of your CSS file.

////

Adding Assets Outside of the Module System
You can also add other assets to the public folder.

Note that we normally encourage you to import assets in JavaScript files instead. For example, see the sections on adding a stylesheet and adding images and fonts. This mechanism provides a number of benefits:

Scripts and stylesheets get minified and bundled together to avoid extra network requests.
Missing files cause compilation errors instead of 404 errors for your users.
Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.
However there is an escape hatch that you can use to add an asset outside of the module system.

If you put a file into the public folder, it will not be processed by Webpack. Instead it will be copied into the build folder untouched. To reference assets in the public folder, you need to use an environment variable called PUBLIC_URL.

Inside index.html, you can use it like this:

<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
Only files inside the public folder will be accessible by %PUBLIC_URL% prefix. If you need to use a file from src or node_modules, you’ll have to copy it there to explicitly specify your intention to make this file a part of the build.

When you run npm run build, Create React App will substitute %PUBLIC_URL% with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL.

In JavaScript code, you can use process.env.PUBLIC_URL for similar purposes:

render() {
  // Note: this is an escape hatch and should be used sparingly!
  // Normally we recommend using `import` for getting asset URLs
  // as described in “Adding Images and Fonts” above this section.
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
Keep in mind the downsides of this approach:

None of the files in public folder get post-processed or minified.
Missing files will not be called at compilation time, and will cause 404 errors for your users.
Result filenames won’t include content hashes so you’ll need to add query arguments or rename them every time they change.

When to Use the public Folder
Normally we recommend importing stylesheets, images, and fonts from JavaScript. The public folder is useful as a workaround for a number of less common cases:

You need a file with a specific name in the build output, such as manifest.webmanifest.
You have thousands of images and need to dynamically reference their paths.
You want to include a small script like pace.js outside of the bundled code.
Some library may be incompatible with Webpack and you have no other option but to include it as a <script> tag.
Note that if you add a <script> that declares global variables, you also need to read the next section on using them.
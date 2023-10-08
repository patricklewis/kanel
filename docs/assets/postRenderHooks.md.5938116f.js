import { _ as s, o, c as t, S as a } from "./chunks/framework.cbdddcbb.js";
const A = JSON.parse(
    '{"title":"postRenderHooks","description":"","frontmatter":{},"headers":[],"relativePath":"postRenderHooks.md","filePath":"postRenderHooks.md"}',
  ),
  e = { name: "postRenderHooks.md" },
  n = a(
    `<h1 id="postrenderhooks" tabindex="-1">postRenderHooks <a class="header-anchor" href="#postrenderhooks" aria-label="Permalink to &quot;postRenderHooks&quot;">​</a></h1><p>In Kanel, &quot;rendering&quot; means translating a bunch of declarations into arrays of strings that will ultimately become files. You can apply hooks before and after this step if you want to make some custom modifications or additions to the final output.</p><p>A post-render hook has the following signature:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PostRenderHook</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">lines</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">instantiatedConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InstantiatedConfig</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Awaitable</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><p>For every file that is about to be written, this function will be called. The <code>lines</code> parameter is the raw strings that will comprise the file. You should return the entire array of lines that you want the file to contain.</p><p>The function receives the instantiated configuration (i.e. the settings as well as the extracted schemas) in case you need any information from there.</p>`,
    6,
  ),
  l = [n];
function p(r, i, c, y, C, d) {
  return o(), t("div", null, l);
}
const D = s(e, [["render", p]]);
export { A as __pageData, D as default };

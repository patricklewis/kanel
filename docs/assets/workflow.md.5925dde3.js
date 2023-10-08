import { _ as e, o as t, c as a, S as o } from "./chunks/framework.cbdddcbb.js";
const g = JSON.parse(
    '{"title":"How to work with Kanel","description":"","frontmatter":{},"headers":[],"relativePath":"workflow.md","filePath":"workflow.md"}',
  ),
  r = { name: "workflow.md" },
  i = o(
    '<h1 id="how-to-work-with-kanel" tabindex="-1">How to work with Kanel <a class="header-anchor" href="#how-to-work-with-kanel" aria-label="Permalink to &quot;How to work with Kanel&quot;">​</a></h1><p>Kanel is well suited for a workflow where you let the database schema drive the architecture of your application. It is easier if you have a mono-repo setup or at least have the code that relies on these types version controlled together with your migrations.</p><p>The recommended process making an architectural change is:</p><ol><li>Create a database migration using Knex or regular SQL.</li><li>Run the migration on your local development database.</li><li>Run Kanel on your dev database. It will create/update your type definitions.</li><li>Review the new defintions and update your code to support the new architecture.</li><li>When everything works, push and deploy the migration together with the updated type definitions and other changes.</li></ol><p>Introduction to the idea is outlined <a href="https://medium.com/@kristiandupont/generating-typescript-types-from-postgres-48661868ef84" target="_blank" rel="noreferrer">here</a>.</p><h2 id="linting" tabindex="-1">Linting <a class="header-anchor" href="#linting" aria-label="Permalink to &quot;Linting&quot;">​</a></h2><p>When using the database as the source of truth, you want to perform your linter checks on the structure of the database, i.e. the schema. For that, you can use <a href="https://github.com/kristiandupont/schemalint" target="_blank" rel="noreferrer">schemalint</a> which is a linter for Postgres schemas.</p><p>As for the generated code, it will contain a <code>@generated</code> tag which is a semi-standard that a number of tools respect. You can use <a href="https://github.com/zertosh/eslint-plugin-ignore-generated" target="_blank" rel="noreferrer">eslint-plugin-ignore-generated</a> to ignore these files.</p>',
    8,
  ),
  n = [i];
function s(h, l, c, d, u, p) {
  return t(), a("div", null, n);
}
const f = e(r, [["render", s]]);
export { g as __pageData, f as default };

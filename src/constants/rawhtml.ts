import { Entry } from "@/types/entry";

export const RAW_HTML = `
  <h1>Hello World</h1>
  <p>This is some raw HTML content.</p>
  <ul>
    <li>Point 1</li>
    <li>Point 2</li>
  </ul>
`;

export const TandC: { name: string; content: string } = {
  name: "<dt>Sample Terms & Conditions</dt>",
  content: `
  <dd>
    <p>
      By using this service, you agree to the following:
    </p>
    <ul class="list-disc pl-6 text-sm ">
      <li>Use the platform responsibly.</li>
      <li>No sharing of confidential data.</li>
      <li>We may update terms at any time.</li>
    </ul>
    <p class="text-xs mt-2">
      Last updated: Aug 2025
    </p>
  </dd>`,
};

export const entries: Entry[] = [
  {
    id: 1,
    htmlQuestion: `
<dt>Time complexities of common BST operations in balanced vs. skewed trees?</dt>`,
    htmlAnswer: `
<dd>
  <p>In a balanced BST (e.g., AVL/Red–Black), search/insert/delete are <code>O(log n)</code>. In a skewed/unbalanced BST, they degrade to <code>O(n)</code>.</p>
  <ul class="list-disc pl-6">
    <li>Balanced height ≈ <code>log₂ n</code></li>
    <li>Skewed height ≈ <code>n</code></li>
  </ul>
</dd>
`,
  },

  {
    id: 2,
    htmlQuestion: `<dt>Compare SGD, Momentum, and Adam (ML optimizers).</dt>`,
    htmlAnswer: `
<dd>
  <p>SGD uses raw gradients; Momentum adds velocity to smooth updates; Adam adapts per-parameter step sizes using first/second moments.</p>
  <ul class="list-disc pl-6">
    <li>SGD: simple, can be noisy</li>
    <li>Momentum: faster on ravines</li>
    <li>Adam: quick convergence, good defaults</li>
  </ul>
</dd>
`,
  },

  {
    id: 3,
    htmlQuestion: `<dt>How does HTTP caching work (briefly)?</dt>`,
    htmlAnswer: `
<dd>
  <p>Servers signal freshness via <code>Cache-Control</code>/<code>Expires</code>, and validators via <code>ETag</code>/<code>Last-Modified</code>. Clients reuse cached responses until stale, then revalidate.</p>
  <ul class="list-disc pl-6">
    <li>Freshness: <code>max-age</code>, <code>s-maxage</code>, <code>immutable</code></li>
    <li>Revalidation: <code>If-None-Match</code>, <code>If-Modified-Since</code></li>
  </ul>
</dd>
`,
  },

  {
    id: 4,
    htmlQuestion: `<dt>What are move semantics in C++ and why use them?</dt>`,
    htmlAnswer: `
<dd>
  <p>Move semantics transfer resources from temporaries using rvalue references, avoiding deep copies. Implement via move ctor/assignment and <code>std::move</code>.</p>
  <ul class="list-disc pl-6">
    <li>Benefits: fewer allocations, faster containers</li>
    <li>Rule: leave moved-from objects valid but unspecified</li>
  </ul>
</dd>
`,
  },
];

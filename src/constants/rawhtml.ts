import { Entry } from "@/types/entry";

export const RAW_HTML = `
  <h1 style="font-size: 2rem; font-weight: bold; color: #ededed; margin-bottom: 1rem;">Hello World</h1>
  <p style="color: #ededed; margin-bottom: 1rem; line-height: 1.6;">This is some raw HTML content.</p>
  <ul style="color: #ededed; padding-left: 1.5rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">Point 1</li>
    <li style="margin-bottom: 0.5rem;">Point 2</li>
  </ul>
`;

export const TandC: { name: string; content: string } = {
  name: "<dt style='font-weight: 600; color: #ededed; font-size: 1.125rem;'>Sample Terms & Conditions</dt>",
  content: `
    <dd style="color: #ededed; background: #0a0a0a; padding: 1rem; font-family: Arial, sans-serif; line-height: 1.6;">
      <p style="margin-bottom: 1rem; color: #ededed;">
        By using this service, you agree to the following:
      </p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; font-size: 0.875rem; margin-bottom: 1rem; color: #ededed;">
        <li style="margin-bottom: 0.5rem; color: #ededed;">Use the platform responsibly.</li>
        <li style="margin-bottom: 0.5rem; color: #ededed;">No sharing of confidential data.</li>
        <li style="margin-bottom: 0.5rem; color: #ededed;">We may update terms at any time.</li>
      </ul>
      <p style="font-size: 0.75rem; margin-top: 0.5rem; color: #a3a3a3;">
        Last updated: Aug 2025
      </p>
    </dd>`,
};

export const entries: Entry[] = [
  {
    id: 1,
    htmlQuestion: `
      <dt style="font-weight: 600; color: #ededed; font-size: 1rem; margin-bottom: 0.5rem; line-height: 1.5;">
        Time complexities of common BST operations in balanced vs. skewed trees?
      </dt>`,
    htmlAnswer: `
      <dd style="color: #ededed; background: #0a0a0a; font-family: Arial, sans-serif; line-height: 1.6;">
        <p style="margin-bottom: 1rem; color: #ededed; text-align: justify;">
          In a balanced BST (e.g., AVL/Red–Black), search/insert/delete are 
          <code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">O(log n)</code>. 
          In a skewed/unbalanced BST, they degrade to 
          <code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">O(n)</code>.
        </p>
        <ul style="list-style-type: disc; padding-left: 1.5rem; color: #ededed; margin-bottom: 1rem;">
          <li style="margin-bottom: 0.5rem; color: #ededed;">
            Balanced height ≈ 
            <code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">log₂ n</code>
          </li>
          <li style="margin-bottom: 0.5rem; color: #ededed;">
            Skewed height ≈ 
            <code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">n</code>
          </li>
        </ul>
      </dd>
    `,
  },
  {
    id: 2,
    htmlQuestion: `
      <dt style="font-weight: 600; color: #ededed; font-size: 1rem; margin-bottom: 0.5rem; line-height: 1.5;">
        Compare SGD, Momentum, and Adam (ML optimizers).
      </dt>`,
    htmlAnswer: `
      <dd style="color: #ededed; background: #0a0a0a; font-family: Arial, sans-serif; line-height: 1.6;">
        <p style="margin-bottom: 1rem; color: #ededed; text-align: justify;">
          SGD uses raw gradients; Momentum adds velocity to smooth updates; Adam adapts per-parameter step sizes using first/second moments.
        </p>
        <ul style="list-style-type: disc; padding-left: 1.5rem; color: #ededed; margin-bottom: 1rem;">
          <li style="margin-bottom: 0.5rem; color: #ededed;">SGD: simple, can be noisy</li>
          <li style="margin-bottom: 0.5rem; color: #ededed;">Momentum: faster on ravines</li>
          <li style="margin-bottom: 0.5rem; color: #ededed;">Adam: quick convergence, good defaults</li>
        </ul>
      </dd>
    `,
  },
  {
    id: 3,
    htmlQuestion: `
      <dt style="font-weight: 600; color: #ededed; font-size: 1rem; margin-bottom: 0.5rem; line-height: 1.5;">
        How does HTTP caching work (briefly)?
      </dt>`,
    htmlAnswer: `
      <dd style="color: #ededed; background: #0a0a0a; font-family: Arial, sans-serif; line-height: 1.6;">
        <p style="margin-bottom: 1rem; color: #ededed; text-align: justify;">
          Servers signal freshness via 
          <code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">Cache-Control</code>/<code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">Expires</code>, 
          and validators via 
          <code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">ETag</code>/<code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">Last-Modified</code>. 
          Clients reuse cached responses until stale, then revalidate.
        </p>
        <ul style="list-style-type: disc; padding-left: 1.5rem; color: #ededed; margin-bottom: 1rem;">
          <li style="margin-bottom: 0.5rem; color: #ededed;">
            Freshness: 
            <code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">max-age</code>, 
            <code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">s-maxage</code>, 
            <code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">immutable</code>
          </li>
          <li style="margin-bottom: 0.5rem; color: #ededed;">
            Revalidation: 
            <code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">If-None-Match</code>, 
            <code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">If-Modified-Since</code>
          </li>
        </ul>
      </dd>
    `,
  },
  {
    id: 4,
    htmlQuestion: `
      <dt style="font-weight: 600; color: #ededed; font-size: 1rem; margin-bottom: 0.5rem; line-height: 1.5;">
        What are move semantics in C++ and why use them?
      </dt>`,
    htmlAnswer: `
      <dd style="color: #ededed; background: #0a0a0a; font-family: Arial, sans-serif; line-height: 1.6;">
        <p style="margin-bottom: 1rem; color: #ededed; text-align: justify;">
          Move semantics transfer resources from temporaries using rvalue references, avoiding deep copies. Implement via move ctor/assignment and 
          <code style="background: #1f2937; color: #f97316; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: 'Courier New', monospace; font-size: 0.875rem;">std::move</code>.
        </p>
        <ul style="list-style-type: disc; padding-left: 1.5rem; color: #ededed; margin-bottom: 1rem;">
          <li style="margin-bottom: 0.5rem; color: #ededed;">Benefits: fewer allocations, faster containers</li>
          <li style="margin-bottom: 0.5rem; color: #ededed;">Rule: leave moved-from objects valid but unspecified</li>
        </ul>
      </dd>
    `,
  },
];
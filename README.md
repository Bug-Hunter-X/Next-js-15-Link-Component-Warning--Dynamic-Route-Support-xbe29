# Next.js 15 Link Component Warning: Dynamic Route Support

This repository demonstrates a common warning encountered when using the `next/link` component in Next.js 15 applications involving dynamic routes.  The warning `Warning: Link does not support dynamic routing` arises when attempting to use dynamic segments within the `href` prop that are not pre-rendered at build time.

## Problem
The provided example attempts to use the Link component with a route that isn't statically defined. This results in the warning, potentially leading to unexpected behavior or rendering issues.

## Solution
The solution involves using the `router.push` method from `next/router` for dynamic route navigation. This ensures proper client-side routing and avoids the warning.
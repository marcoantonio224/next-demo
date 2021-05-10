/**
 * Any file inside the folder pages/api is mapped to
 * /api/* and will be treated as an API endpoint instead of a page.
 * They are SERVER-SIDE only bundles and WON'T increase your client-side bundle size.
 */

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}

// Caveats
// API Routes do not specify CORS headers, meaning they are same-origin only by default.
// You can customize such behavior by wrapping the request handler with the cors middleware.
// API Routes can't be used with next export
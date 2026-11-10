/* ES module entry for bundlers / http(s) pages. Browsers block module scripts on file://, so the
   mockup loads edge-ticker.js as a classic script; this file re-exports the same implementation. */
import './edge-ticker.js';
export const { mountEdgeTicker, EdgeTickerElement } = globalThis.PLEdgeTicker;
export default mountEdgeTicker;

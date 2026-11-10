/* Thin React wrapper (not used by the mockup). Usage: <EdgeTicker text="POINTLAB // NEWS" duration={32} /> */
import { useEffect, useRef } from 'react';
import { mountEdgeTicker } from './edge-ticker.mjs';

export default function EdgeTicker({ target, ...options }) {
  const ref = useRef(null);
  const key = JSON.stringify(options);
  useEffect(() => {
    ref.current = mountEdgeTicker(target || document.body, options);
    return () => { ref.current && ref.current.destroy(); ref.current = null; };
  }, [target]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { ref.current && ref.current.update(options); }, [key]); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}

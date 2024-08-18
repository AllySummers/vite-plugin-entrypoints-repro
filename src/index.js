import { bar } from './bar.js';
import { foo } from './foo.js';

export const foobar = `${foo}${bar}`;

export default foobar;

export { bar, foo };
export { baz } from './lib/baz.js';

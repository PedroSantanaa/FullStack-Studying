//Import inline
import { inline } from "./inline.js";
//Import default inline
import defaultInline from "./inline.js";
//Por no inline
import { group } from "./non-inline.js";
//Default no inline
import exportDefault from "./non-inline.js";
inline();
defaultInline();
group();
exportDefault();

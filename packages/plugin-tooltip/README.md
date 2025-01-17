# @milkdown/plugin-tooltip

Tooltip plugin for [milkdown](https://saul-mirone.github.io/milkdown/).
Add support for tooltip commands.

# Example Usage

```typescript
import { Editor } from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';
import { nord } from '@milkdown/theme-nord';

import { tooltip } from '@milkdown/plugin-tooltip';

Editor.make().use(nord).use(commonmark).use(tooltip).create();
```

# Position

Modify the tooltip widget's position, to show on the top or the bottom

Example:

```typescript
import { tooltipPlugin, tooltip } from '@milkdown/plugin-tooltip';

Editor.make().use(
    tooltip.configure(tooltipPlugin, {
        bottom: true,
    }),
);
```

# License

Milkdown is open sourced software licensed under [MIT license](https://github.com/Saul-Mirone/milkdown/blob/main/LICENSE).

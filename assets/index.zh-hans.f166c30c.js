var n=`# \u96C6\u6210\u63D2\u4EF6

\u6211\u4EEC\u63D0\u4F9B\u4E86\u65B9\u6CD5\u6765\u8BA9\u7528\u6237\u5C06\u5DF2\u6709\u7684 prosemirror \u548C remark \u63D2\u4EF6\u5FEB\u901F\u96C6\u6210\u5230 milkdown \u4E2D\u3002

---

## Remark \u63D2\u4EF6

\u7528\u4E8E\u6DFB\u52A0 remark \u63D2\u4EF6\u3002

\`\`\`typescript
import { createPlugin } from '@milkdown/utils';

const remarkPlugin = createPlugin({
    remarkPlugins: () => [someRemarkPlugin, someOtherRemarkPlugin],
});

// use
milkdown.use(remarkPlugin());
\`\`\`

---

## Prosemirror \u63D2\u4EF6

\u7528\u4E8E\u6DFB\u52A0 prosemirror \u63D2\u4EF6\u3002

\`\`\`typescript
import { createPlugin } from '@milkdown/utils';

const prosePlugin = createPlugin({
    prosePlugins: () => [someProsePlugin, someOtherProsePlugin],
});

// use
milkdown.use(prosePlugin());
\`\`\`
`;export{n as default};

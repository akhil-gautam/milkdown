var n=`# \u8BBE\u8BA1\u7CFB\u7EDF

\u8BBE\u8BA1\u7CFB\u7EDF\u662F\u4E3B\u9898\u7684\u57FA\u7840\u3002

\`\`\`mermaid
graph TD;
	theme{{Theme}};
	system((Design System));

    theme --> system;
    system --> Node;
    system --> Mark;
    system --> Plugin;
\`\`\`

\u8BBE\u8BA1\u7CFB\u7EDF\u50CF\u662F\u4E00\u79CD\u7EA6\u5B9A\u3002\u4E3B\u9898\u5B9E\u73B0\u8BBE\u8BA1\u7CFB\u7EDF\uFF0C\u4E3B\u9898\u53EF\u4EE5\u88AB\u4E0D\u540C\u7684 nodes, marks \u548C\u63D2\u4EF6\u6D88\u8D39\u3002

\u5728[\u7F16\u5199\u4E3B\u9898\u63D2\u4EF6](/#/zh-hans/writing-theme-plugins)\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5B66\u4E60\u4E86\u4E3B\u9898\u7684\u5B9A\u4E49\u65B9\u5F0F\u3002\u5728\u672C\u8282\u4E2D\u5C06\u5C55\u793A\u5982\u4F55\u4F7F\u7528\u5B83\u3002

## \u4E3B\u9898\u5DE5\u5177

\u8BBE\u8BA1\u7CFB\u7EDF\u53EF\u4EE5\u901A\u8FC7\`themeToolCtx\`\u6765\u8BBF\u95EE\u3002

\`\`\`typescript
import { themeToolCtx } from '@milkdown/core';

import { createProsePlugin } from '@milkdown/utils';

export const myProsemirrorPlugin = createProsePlugin((_, utils) => {
    const themeTool = utils.ctx.get(themeToolCtx);

    // ...
});
\`\`\`

### font

\`\`\`typescript
const { typography, code } = themeTool.font;

css\`
    p {
        font-family: \${typography};
    }

    code {
        font-family: \${code};
    }
\`;
\`\`\`

### size

\`\`\`typescript
const { radius, lineWidth } = themeTool.size;

css\`
    border-radius: \${radius}px;
    border: \${lineWidth}px solid #000;
\`;
\`\`\`

### palette

\u8C03\u8272\u677F\u7528\u4E8E\u6839\u636E\u5F53\u524D\u4E3B\u9898\u751F\u6210\u989C\u8272\u3002

\`\`\`typescript
const { palette } = themeTool;

css\`
    background: \${palette('background')};
    // 0.8 means it has 0.8 opacity.
    color: \${palette('primary', 0.8)};
\`;
\`\`\`

### mixin

\`\`\`typescript
const { scrollbar, shadow, border } = themeTool.mixin;

css\`
    ul {
        \${scrollbar()};
    }
    div {
        \${shadow()};
        \${border()};
    }
\`;
\`\`\`

### slots

\`\`\`typescript
const { icon } = themeTool.slots;

const loadingIcon = icon('loading');
div.appendChild(loadingIcon);
\`\`\`
`;export{n as default};

var n=`# \u4F7F\u7528\u63D2\u4EF6

## \u521D\u5C1D\u63D2\u4EF6

\u4E8B\u5B9E\u4E0A\uFF0C\u5728 milkdown \u4E2D\u7684\u6240\u6709\u7279\u6027\u90FD\u662F\u7531\u63D2\u4EF6\u6765\u652F\u6301\u7684\u3002
\u6211\u4EEC\u4E4B\u524D\u4F7F\u7528\u8FC7\u7684 \`commonmark\` \u5C31\u662F\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u5C1D\u8BD5\u66F4\u591A\u63D2\u4EF6\uFF1A

\`\`\`typescript
import { Editor } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { commonmark } from '@milkdown/preset-commonmark';
import { tooltip } from '@milkdown/plugin-tooltip';
import { slash } from '@milkdown/plugin-slash';

Editor.make().use(nord).use(commonmark).use(tooltip).use(slash).create();
\`\`\`

---

## \u5BFB\u627E\u63D2\u4EF6

### \u5B98\u65B9\u63D2\u4EF6

Milkdown \u63D0\u4F9B\u4E86\u4E0B\u5217\u5B98\u65B9\u63D2\u4EF6\u3002

| \u540D\u79F0                                                                                           | \u63CF\u8FF0                                                               |
| :--------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| [@milkdown/preset-commonmark](https://www.npmjs.com/package/@milkdown/preset-commonmark)       | \u6DFB\u52A0 [commonmark](https://commonmark.org/) \u8BED\u6CD5\u652F\u6301                |
| [@milkdown/preset-gfm](https://www.npmjs.com/package/@milkdown/preset-gfm)                     | \u6DFB\u52A0 [gfm](https://github.github.com/gfm/) \u8BED\u6CD5\u652F\u6301                |
| [@milkdown/plugin-history](https://www.npmjs.com/package/@milkdown/plugin-history)             | \u6DFB\u52A0\u64A4\u9500\u548C\u91CD\u505A\u652F\u6301                                                 |
| [@milkdown/plugin-clipboard](https://www.npmjs.com/package/@milkdown/plugin-clipboard)         | \u6DFB\u52A0 markdown \u683C\u5F0F\u7684\u590D\u5236\u7C98\u8D34\u80FD\u529B                                   |
| [@milkdown/plugin-cursor](https://www.npmjs.com/package/@milkdown/plugin-cursor)               | \u6DFB\u52A0 drop \u548C gap \u5149\u6807                                              |
| [@milkdown/plugin-listener](https://www.npmjs.com/package/@milkdown/plugin-listener)           | \u6DFB\u52A0\u76D1\u542C\u5668\u652F\u6301                                                     |
| [@milkdown/plugin-collaborative](https://www.npmjs.com/package/@milkdown/plugin-collaborative) | \u6DFB\u52A0\u534F\u540C\u7F16\u8F91\u652F\u6301                                                   |
| [@milkdown/plugin-table](https://www.npmjs.com/package/@milkdown/plugin-table)                 | \u6DFB\u52A0\u8868\u683C\u8BED\u6CD5\u652F\u6301\uFF08\u5DF2\u7ECF\u5305\u542B\u5728 gfm \u4E2D\uFF09                              |
| [@milkdown/plugin-prism](https://www.npmjs.com/package/@milkdown/plugin-prism)                 | \u6DFB\u52A0 [prism](https://prismjs.com/) \u7528\u4E8E\u652F\u6301\u4EE3\u7801\u5757\u9AD8\u4EAE              |
| [@milkdown/plugin-math](https://www.npmjs.com/package/@milkdown/plugin-math)                   | \u6DFB\u52A0 [LaTeX](https://en.wikipedia.org/wiki/LaTeX) \u7528\u4E8E\u652F\u6301\u6570\u5B66\u516C\u5F0F |
| [@milkdown/plugin-tooltip](https://www.npmjs.com/package/@milkdown/plugin-tooltip)             | \u6DFB\u52A0\u9009\u62E9\u5DE5\u5177\u6761                                                     |
| [@milkdown/plugin-slash](https://www.npmjs.com/package/@milkdown/plugin-slash)                 | \u6DFB\u52A0\u659C\u7EBF\u6307\u4EE4                                                       |
| [@milkdown/plugin-emoji](https://www.npmjs.com/package/@milkdown/plugin-emoji)                 | \u6DFB\u52A0\u8868\u60C5\u7B26\u53F7\u652F\u6301                                                   |

### \u793E\u533A\u63D2\u4EF6

\u67E5\u770B [awesome-milkdown](https://github.com/Saul-Mirone/awesome-milkdown) \u6765\u5BFB\u627E\u793E\u533A\u63D2\u4EF6\u3002\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u63D0\u4EA4 pr \u7684\u65B9\u5F0F\u5C06\u81EA\u5DF1\u7F16\u5199\u7684\u63D2\u4EF6\u6DFB\u52A0\u4E0A\u53BB\u3002
`;export{n as default};

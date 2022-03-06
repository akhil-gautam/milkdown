var n=`# \u6837\u5F0F

Milkdown \u9ED8\u8BA4\u4E0D\u63D0\u4F9B\u6837\u5F0F\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u4F60\u53EF\u4EE5\u5BFC\u5165\u751A\u81F3\u81EA\u5B9A\u4E49\u7F16\u8F91\u5668\u4E3B\u9898\u3002

## \u9009\u62E9\u4E00\uFF1A\u9488\u5BF9\u5DF2\u6709 HTML \u7ED3\u6784\u8FDB\u884C\u6837\u5F0F\u7F16\u5199

\u6574\u4E2A\u7F16\u8F91\u5668\u662F\u6E32\u67D3\u5728\u4EE5 \`milkdown\` \u4E3A\u7C7B\u540D\u7684 HTML \u5BB9\u5668\u4E2D\u7684\uFF0C\u4E14\u53EF\u7F16\u8F91\u90E8\u5206 \`editor\` \u4E5F\u88AB\u5305\u542B\u5176\u4E2D\u3002\u4F60\u53EF\u4EE5\u50CF\u4E0B\u9762\u4F8B\u5B50\u4E2D\u7684\u90A3\u6837\u6765\u7F16\u5199\u7F16\u8F91\u5668\u6837\u5F0F\u3002

\`\`\`css
.milkdown .editor p {
    margin: 1rem 0;
}
\`\`\`

\u9488\u5BF9\u6BCF\u4E00\u4E2A node/mark\uFF0CMilkdown \u90FD\u4E3A\u5176\u63D0\u4F9B\u4E86\u4E00\u4E2A\u9ED8\u8BA4\u7684 css \u7C7B\u540D\uFF0C\u6BD4\u5982\uFF1A\u6BCF\u4E00\u4E2A \`<p>\` \u8282\u70B9\u7684 \`paragraph\` \u7C7B\u540D\uFF1A

\`\`\`css
.milkdown .editor .paragraph {
    margin: 1rem 0;
}
\`\`\`

## \u9009\u62E9\u4E8C\uFF1A \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D

\u4F60\u53EF\u4EE5\u4F7F\u7528 \`configure\` \u65B9\u6CD5\u6765\u4E3A node/mark \u6DFB\u52A0 css \u7C7B\u540D\u3002\u8FD9\u6837\uFF0C\u4F60\u5C31\u53EF\u4EE5\u4F7F\u7528\u50CF \`tailwind\` \u8FD9\u6837\u7684 css \u5DE5\u5177\u3002

\`\`\`typescript
import { commonmarkNodes, commonmarkPlugins, heading, paragraph } from '@milkdown/preset-commonmark';

const nodes = commonmark
    .configure(paragraph, {
        className: () => 'my-custom-paragraph',
    })
    .configure(heading, {
        className: (attrs) => \`my-custom-heading my-h\${attrs.level}\`,
    });

Editor.make().use(nodes).use(commonmarkPlugins);
\`\`\`

## \u65E0\u5934\u6A21\u5F0F

\u5982\u679C\u4F60\u504F\u5411\u4E8E\u81EA\u5DF1\u7F16\u5199\u6837\u5F0F\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u7B80\u5355\u7684\u5BF9\u652F\u6301\u65E0\u5934\u6A21\u5F0F\u7684\u63D2\u4EF6\u8C03\u7528\`headless\`\u65B9\u6CD5\u3002

\`\`\`typescript
import { commonmark } from '@milkdown/preset-commonmark';

Editor.make().use(commonmark.headless());
\`\`\`

\u652F\u6301\u65E0\u5934\u6A21\u5F0F\u7684\u63D2\u4EF6\u6709\uFF1A

-   [@milkdown/preset-commonmark](https://www.npmjs.com/package/@milkdown/preset-commonmark)
-   [@milkdown/preset-gfm](https://www.npmjs.com/package/@milkdown/preset-gfm)
-   [@milkdown/plugin-table](https://www.npmjs.com/package/@milkdown/plugin-table)
-   [@milkdown/plugin-math](https://www.npmjs.com/package/@milkdown/plugin-math)
-   [@milkdown/plugin-tooltip](https://www.npmjs.com/package/@milkdown/plugin-tooltip)
-   [@milkdown/plugin-slash](https://www.npmjs.com/package/@milkdown/plugin-slash)
-   [@milkdown/plugin-emoji](https://www.npmjs.com/package/@milkdown/plugin-emoji)
`;export{n as default};

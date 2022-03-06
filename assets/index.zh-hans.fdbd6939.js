var n=`# \u7F16\u5199\u8BED\u6CD5\u63D2\u4EF6

\u4E00\u822C\u800C\u8A00\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u6DFB\u52A0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u8BED\u6CD5\u63D2\u4EF6\uFF0C\u9700\u8981\u5B8C\u6210\u4EE5\u4E0B 5 \u4E2A\u6B65\u9AA4\uFF1A

1. \u6DFB\u52A0\u4E00\u4E2A remark \u63D2\u4EF6\u6765\u786E\u4FDD\u6211\u4EEC\u7684\u8BED\u6CD5\u53EF\u4EE5\u6B63\u786E\u7684\u88AB\u89E3\u6790\u548C\u5E8F\u5217\u5316\u3002
2. \u4E3A\u81EA\u5B9A\u4E49\u8BED\u6CD5\u6DFB\u52A0\u4E00\u4E2A prosemirror schema\u3002
3. \u7F16\u5199\u4E00\u4E2A\u89E3\u6790\u5668\u58F0\u660E\u6765\u5C06 remark AST \u8F6C\u6362\u5230 prosemirror \u8282\u70B9\u3002
4. \u7F16\u5199\u4E00\u4E2A\u5E8F\u5217\u5316\u5668\u58F0\u660E\u6765\u5C06 prosemirror \u8282\u70B9\u8F6C\u6362\u5230 remark AST\u3002
5. \u7F16\u5199\u4E00\u4E2A prosemirror \u8F93\u5165\u89C4\u5219\uFF08input rule\uFF09\u6765\u786E\u4FDD\u7528\u6237\u7684\u8F93\u5165\u53EF\u4EE5\u88AB\u6B63\u786E\u7684\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684 prosemirror \u8282\u70B9\u3002

---

\u5728\u8FD9\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6DFB\u52A0\u4E00\u4E2A**\u81EA\u5B9A\u4E49 iframe \u8BED\u6CD5**\u6765\u5C06 iframe \u4F5C\u4E3A\u4E00\u79CD\u8282\u70B9\u6DFB\u52A0\u8FDB markdown\u3002

## Remark \u63D2\u4EF6

\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A remark \u63D2\u4EF6\u6765\u652F\u6301\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\u8BED\u6CD5\u3002
\u5E78\u8FD0\u7684\u662F\uFF0Cremark \u63D0\u4F9B\u4E86\u4E00\u4E2A\u5F3A\u5927\u7684 [directive \u63D2\u4EF6](https://github.com/remarkjs/remark-directive) \u6765\u652F\u6301\u81EA\u5B9A\u4E49\u8BED\u6CD5\u3002\u901A\u8FC7\u8FD9\u4E2A\u63D2\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8F7B\u6613\u7684\u901A\u8FC7\u4EE5\u4E0B\u8BED\u6CD5\u5B9A\u4E49\u4E00\u4E2A iframe\uFF1A

\`\`\`markdown
# My Iframe

:iframe{src="https://saul-mirone.github.io"}
\`\`\`

\u6240\u4EE5\uFF0C\u6211\u4EEC\u9700\u8981\u7684\u53EA\u662F\u5B89\u88C5\u5B83\u5E76\u5C06\u5176\u8F6C\u6362\u4E3A\u4E00\u4E2A milkdown \u63D2\u4EF6\uFF1A

\`\`\`typescript
import { RemarkPlugin } from '@milkdown/core';
import directive from 'remark-directive';

const iframe = createNode(() => ({
    // ...
    remarkPlugins: () => [directive as RemarkPlugin],
}));
\`\`\`

## \u5B9A\u4E49 Schema

\u63A5\u7740\uFF0C\u6211\u4EEC\u9700\u8981\u5B9A\u4E49 iframe \u8282\u70B9\u7684 schema\u3002
\u6211\u4EEC\u628A iframe \u5B9A\u4E49\u4E3A\u4E00\u4E2A inline \u8282\u70B9\uFF0C\u56E0\u4E3A\u5B83\u6CA1\u6709\u4EFB\u4F55\u7684\u5B50\u8282\u70B9\uFF0C
\u5E76\u4E14\u6709\u4E00\u4E2A\`src\`\u6807\u7B7E\u6765\u8FDE\u63A5\u5230\u76EE\u6807\u9875\u9762\u3002

\`\`\`typescript
import { createNode } from '@milkdown/utils';

const id = 'iframe';
const iframe = createNode(() => ({
    id,
    schema: () => ({
        inline: true,
        attrs: {
            src: { default: null },
        },
        group: 'inline',
        marks: '',
        parseDOM: [
            {
                tag: 'iframe',
                getAttrs: (dom) => {
                    if (!(dom instanceof HTMLElement)) {
                        throw new Error();
                    }
                    return {
                        src: dom.getAttribute('src'),
                    };
                },
            },
        ],
        toDOM: (node) => ['iframe', { ...node.attrs, class: 'iframe' }, 0],
    }),
}));
\`\`\`

## \u89E3\u6790\u5668

\u63A5\u7740\uFF0C\u6211\u4EEC\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A\u89E3\u6790\u5668\u58F0\u660E\uFF0C\u6765\u5C06 remark AST \u8F6C\u6362\u4E3A prosemirror node\u3002
\u4F60\u53EF\u4EE5\u4F7F\u7528\u5F00\u53D1\u8005\u5DE5\u5177\u53BB\u68C0\u67E5 remark AST \u7684\u7ED3\u6784\u3002\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0 iframe \u5177\u6709\u4EE5\u4E0B\u7ED3\u6784\uFF1A

\`\`\`typescript
const AST = {
    name: 'iframe',
    attributes: { src: 'https://saul-mirone.github.io' },
    type: 'textDirective',
};
\`\`\`

\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u8F7B\u6613\u5199\u51FA\u5B83\u5BF9\u5E94\u7684\u89E3\u6790\u5668\u58F0\u660E\uFF1A

\`\`\`typescript
schema: () => ({
    // ...
    parseMarkdown: {
        match: (node) => node.type === 'textDirective' && node.name === 'iframe',
        runner: (state, node, type) => {
            state.addNode(type, { src: (node.attributes as { src: string }).src });
        },
    },
}),
\`\`\`

\u73B0\u5728\uFF0C\`defaultValue\` \u4E2D\u7684\u6587\u672C\u53EF\u4EE5\u88AB\u6B63\u786E\u7684\u89E3\u6790\u4E3A iframe \u5143\u7D20\u4E86\u3002

## \u5E8F\u5217\u5316\u5668

\u63A5\u7740\uFF0C\u6211\u4EEC\u9700\u8981\u6DFB\u52A0\u5E8F\u5217\u5316\u5668\u6765\u5C06 prosemirror \u8282\u70B9\u8F6C\u56DE\u4E3A remark AST\u3002

\`\`\`typescript
schema: () => ({
    // ...
    toMarkdown: {
        match: (node) => node.type.name === id,
        runner: (state, node) => {
            state.addNode('textDirective', undefined, undefined, {
                name: 'iframe',
                attributes: {
                    src: node.attrs.src,
                },
            });
        },
    }
},
\`\`\`

\u73B0\u5728\uFF0Ciframe \u5143\u7D20\u53EF\u4EE5\u88AB\u6B63\u786E\u7684\u5E8F\u5217\u5316\u6210 markdown \u5B57\u7B26\u4E32\u4E86\u3002

## \u8F93\u5165\u89C4\u5219

\u6211\u4EEC\u4E5F\u9700\u8981\u80FD\u591F\u8BA9\u7528\u6237\u7684\u8F93\u5165\u987A\u5229\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684 iframe\u3002
\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 \`inputRules\` \u6765\u5B9A\u4E49 [prosemirror \u7528\u6237\u8F93\u5165](https://prosemirror.net/docs/ref/#inputrules) \u6765\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\uFF1A

\`\`\`typescript
import { InputRule } from 'prosemirror-inputrules';

const iframe = createNode(() => ({
    // ...
    inputRules: (nodeType) => [
        new InputRule(/:iframe\\{src\\="(?<src>[^"]+)?"?\\}/, (state, match, start, end) => {
            const [okay, src = ''] = match;
            const { tr } = state;
            if (okay) {
                tr.replaceWith(start, end, nodeType.create({ src }));
            }

            return tr;
        }),
    ],
}));
\`\`\`

## \u4F7F\u7528\u63D2\u4EF6

\u6700\u540E\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u4F7F\u7528 \`use\` \u6765\u4F7F\u7528\u6211\u4EEC\u7F16\u5199\u7684\u63D2\u4EF6\uFF1A

\`\`\`typescript
import { Editor } from '@milkdown/core';
import { AtomList, createNode } from "@milkdown/utils";
import { commonmark } from '@milkdown/preset-commonmark';

const iframe = createNode(() => ({ /* ... */ });

const iframePlugin = AtomList.create([iframe()]);

Editor.make().use(iframePlugin).use(commonmark).create();
\`\`\`

---

## \u5B8C\u6574\u4EE3\u7801

!CodeSandBox{milkdown-custom-syntax-mudgd?fontsize=14&hidenavigation=1&theme=dark&view=preview}
`;export{n as default};

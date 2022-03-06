var n=`# Node & Mark

Node \u548C Mark \u662F\u4E24\u4E2A\u7ED3\u6784\uFF0C\u5B83\u4EEC\u88AB\u7528\u4E8E\u5B9A\u4E49 prosemirror \u7684 [Node](https://prosemirror.net/docs/ref/#model.Node) \u548C [Mark](https://prosemirror.net/docs/ref/#model.Mark).

## \u6982\u89C8

\u7528\u6237\u53EF\u4EE5\u7B80\u5355\u7684\u7528\u4EE5\u4E0B\u4EE3\u7801\u6765\u5B9A\u4E49\u4E00\u4E2A node\uFF1A

\`\`\`typescript
import { createNode } from '@milkdown/utils';

const id = 'paragraph';
const paragraph = createNode(() => ({
    id,
    schema: {
        content: 'inline*',
        group: 'block',
        parseDOM: [{ tag: 'p' }],
        toDOM: () => ['p', { class: 'paragraph' }, 0],
        parseMarkdown: {
            match: (node) => node.type === id,
            runner: (state, node, type) => {
                state.openNode(type).next(node.children).closeNode();
            },
        },
        toMarkdown: {
            match: (node) => node.type.name === id,
            runner: (state, node) => {
                state.openNode('paragraph').next(node.content).closeNode();
            },
        },
    },
}));
\`\`\`

---

## \u5C5E\u6027

node/mark \u6709 4 \u4E2A\u5FC5\u9009\u5C5E\u6027\u548C 3 \u4E2A\u53EF\u9009\u5C5E\u6027\u3002

### id

**\u5FC5\u987B\u3002** node/mark \u7684\u6807\u8BC6\u7B26\uFF0C\u4E5F\u4F1A\u88AB\u7528\u4E8E\u5F53\u4F5C [prosemirror schema][schema] \u7684 key\u3002

### schema

**\u5FC5\u987B\u3002** \u5F53\u524D node/mark \u7684 [prosemirror schema][schema] \u5B9A\u4E49\u3002

### parseMarkdown

**\u5FC5\u987B\u3002** \u5F53\u524D node/mark \u7684 parser \u5B9A\u4E49\uFF0C\u7528\u4E8E\u89C4\u5B9A markdown \u88AB\u5982\u4F55\u8F6C\u6362\u4E3A\u76EE\u6807\u8282\u70B9\u3002

### toMarkdown

**\u5FC5\u987B\u3002** \u5F53\u524D node/mark \u7684 serializer \u5B9A\u4E49\uFF0C\u7528\u4E8E\u89C4\u5B9A\u5F53\u524D\u8282\u70B9\u88AB\u5982\u4F55\u8F6C\u6362\u4E3A markdown\u3002

### inputRules?

**\u53EF\u9009\u3002** \u5F53\u524D node/mark \u521B\u5EFA\u7684 [prosemirror input rules][input-rules]\u3002\u7528\u4E8E\u5339\u914D\u7528\u6237\u7684\u7279\u5B9A\u8F93\u5165\u89C4\u5219\u6765\u505A\u54CD\u5E94\uFF0C\u4F8B\u5982\u8F93\u5165\`\`\`\u81EA\u52A8\u751F\u6210\u4EE3\u7801\u5757\u3002

### commands?

**\u53EF\u9009\u3002** \u5F53\u524D node/mark \u521B\u5EFA\u7684 [prosemirror commands][commands]\u3002\u7528\u4E8E\u5B9A\u4E49\u547D\u4EE4\u6765\u7A0B\u5E8F\u5316\u7684\u64CD\u4F5C\u7F16\u8F91\u5668\u3002

### shortcuts?

**\u53EF\u9009\u3002** \u5F53\u524D node/mark \u521B\u5EFA\u7684 [prosemirror key map][key-map]\u3002\u7528\u4E8E\u5B9A\u4E49\u5FEB\u6377\u952E\uFF0C\u5C06\u5176\u7ED1\u5B9A\u5230\u5BF9\u5E94\u7684 command\u3002

### view?

**\u53EF\u9009\u3002** \u7528\u4E8E\u6E32\u67D3\u5F53\u524D node/mark \u7684 [prosemirror node view][node-view]\u3002\u7528\u4E8E\u4E3A node/mark \u5B9A\u4E49\u7279\u6B8A\u7684\u6E32\u67D3\u903B\u8F91\u3002

---

> \u4F60\u53EF\u4EE5\u5728\u5B98\u65B9\u4ED3\u5E93\u4E2D\u627E\u5230\u66F4\u591A\u4F8B\u5B50\uFF0C\u4F8B\u5982 [preset-commonmark][preset-commonmark] \u548C [preset-gfm][preset-gfm]\u3002
>
> \u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u63A8\u8350\u4F60\u4F7F\u7528 [@milkdown/utils][utils] \u4E2D\u7684 \`createNode\` \u548C \`createMark\` \u65B9\u6CD5\uFF0C\u4ED6\u4EEC\u53EF\u4EE5\u7B80\u5316 node/mark \u7684\u5B9A\u4E49\u3002

[schema]: https://prosemirror.net/docs/ref/#model.Schema
[input-rules]: https://prosemirror.net/docs/ref/#inputrules.InputRule
[key-map]: https://prosemirror.net/docs/ref/#keymap
[node-view]: https://prosemirror.net/docs/ref/#view.NodeView
[commands]: https://prosemirror.net/docs/guide/#commands
[preset-commonmark]: https://github.com/Saul-Mirone/milkdown/tree/main/packages/preset-commonmark
[preset-gfm]: https://github.com/Saul-Mirone/milkdown/tree/main/packages/preset-gfm
[utils]: https://github.com/Saul-Mirone/milkdown/tree/main/packages/utils
`;export{n as default};

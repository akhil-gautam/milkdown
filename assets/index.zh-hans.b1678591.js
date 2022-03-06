var n=`# \u5FEB\u6377\u952E

\u5FEB\u6377\u952E\u5728\u9884\u8BBE\uFF08Presets\uFF09\u548C\u63D2\u4EF6\u4E2D\u90FD\u88AB\u9ED8\u8BA4\u63D0\u4F9B\u3002\u8FD9\u5B8C\u5168\u53D6\u51B3\u4E8E\u4F60\u7684\u4E60\u60EF\uFF0C\u4F60\u53EF\u4EE5\u5C06\u5B83\u4EEC\u5B9A\u4E49\u6210\u4EFB\u4F55\u4F60\u60F3\u8981\u7684\u5FEB\u6377\u952E\u3002

---

## \u9ED8\u8BA4\u7684\u5FEB\u6377\u952E\u901F\u67E5\u8868

> \`Mod\` \u5728 macOS \u7CFB\u7EDF\u4E2D\u6307\u7684\u662F \`Cmd\`\uFF0C\u5728 windows/linux \u4E2D\u6307 \`Ctrl\`\u3002

### \u5FC5\u8981

| Action     | Key       |
| ---------- | --------- |
| \u590D\u5236       | Mod-c     |
| \u526A\u5207       | Mod-x     |
| \u62F7\u8D1D       | Mod-v     |
| \u6362\u884C       | Enter     |
| \u9000\u51FA\u4EE3\u7801\u5757 | Mod-Enter |

### \u5386\u53F2

| Action | Key         |
| ------ | ----------- |
| \u64A4\u9500   | Mod-z       |
| \u91CD\u505A   | Mod-Shift-z |

### \u6807\u8BB0

| Action   | Key       |
| -------- | --------- |
| \u52A0\u7C97     | Mod-b     |
| \u659C\u4F53     | Mod-i     |
| \u884C\u5185\u4EE3\u7801 | Mod-e     |
| \u5220\u9664\u7EBF   | Mod-Alt-x |

### \u6BB5\u843D

| Action   | Key         |
| -------- | ----------- |
| \u5E38\u89C4\u6587\u672C | Mod-Alt-0   |
| H1       | Mod-Alt-1   |
| H2       | Mod-Alt-2   |
| H3       | Mod-Alt-3   |
| H4       | Mod-Alt-4   |
| H5       | Mod-Alt-5   |
| H6       | Mod-Alt-6   |
| \u4EE3\u7801\u5757   | Mod-Alt-c   |
| \u5220\u9664\u6362\u884C | Shift-Enter |

### \u5217\u8868

| Action   | Key       |
| -------- | --------- |
| \u6709\u5E8F\u5217\u8868 | Mod-Alt-7 |
| \u65E0\u9700\u5217\u8868 | Mod-Alt-8 |
| \u4EFB\u52A1\u5217\u8868 | Mod-Alt-9 |
| \u5411\u540E\u7F29\u8FDB | Mod-]     |
| \u5411\u524D\u7F29\u8FDB | Mod-[     |

### \u8868\u683C

| Action           | Key       |
| ---------------- | --------- |
| \u4E0B\u4E00\u5217           | Mod-]     |
| \u524D\u4E00\u5217           | Mod-[     |
| \u9000\u51FA\u8868\u683C\u5757\u5E76\u6362\u884C | Mod-Enter |

---

## \u5FEB\u6377\u952E\u914D\u7F6E

\u4F60\u53EF\u4EE5\u50CF\u914D\u7F6E\u5B83\u4EEC\u7684\u6837\u5F0F\u4E00\u6837\u914D\u7F6E\u5FEB\u6377\u952E\uFF1A

\`\`\`typescript
import { commonmarkNodes, commonmarkPlugins, blockquote, SupportedKeys } from '@milkdown/preset-commonmark';

Editor.make().use(commonmarkPlugins).use(nodes);

const nodes = commonmarkNodes.configure(blockquote, {
    keymap: {
        [SupportedKeys.Blockquote]: 'Mod-Shift-b',
        // or you may want to bind multiple keys:
        [SupportedKeys.Blockquote]: ['Mod-Shift-b', 'Mod-b'],
    },
});

Editor.make().use(nodes).use(commonmarkPlugins);
\`\`\`

\u4F60\u53EF\u4EE5\u901A\u8FC7\u5BA1\u67E5 \`SupportedKeys\` \u679A\u4E3E\u7C7B\u578B\u6765\u627E\u51FA\u652F\u6301\u914D\u7F6E\u7684\u547D\u4EE4\u3002

\u5982\u679C\u6CA1\u6709\u5B58\u5728\u50CF\u4F60\u9884\u671F\u652F\u6301\u7684\u547D\u4EE4\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u7F16\u5199 [prosemirror keymap plugin](https://github.com/ProseMirror/prosemirror-keymap) \u6765\u8FDB\u884C\u652F\u6301\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u9605\u8BFB [building plugins](/#/building-plugins) \u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\u3002
`;export{n as default};

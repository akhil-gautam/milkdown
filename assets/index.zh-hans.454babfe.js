var n=`# \u7F16\u5199\u4E3B\u9898\u63D2\u4EF6

## \u6982\u89C8

\`\`\`typescript
import { themeFactory } from '@milkdown/core';

const customTheme = themeFactory({
    font: {
        typography: ['Roboto', 'Helvetica', 'Arial'],
        code: ['Monaco', 'Fira Code'],
    },
    size: {
        radius: '2px',
        lineWidth: '1px',
    },
    color: {
        primary: '#ff79c6',
        secondary: '#bd93f9',
        neutral: '#000',
        background: '#fff',
    },
});
\`\`\`

---

## \u5C5E\u6027

### font

Font \u5B9A\u4E49\u4E86\u7F16\u8F91\u5668\u4E2D\u7684\u5B57\u4F53\u3002

-   typography
    \u7F16\u8F91\u5668\u4E2D\u7684\u6587\u672C\u7684\u5B57\u4F53\uFF0C\u4F8B\u5982\u6807\u9898\uFF0C\u6BB5\u843D\uFF0C\u5F15\u7528\u3002

-   code
    \u7F16\u8F91\u5668\u4E2D\u7684\u4EE3\u7801\u7684\u5B57\u4F53\uFF0C\u4F8B\u5982\u4EE3\u7801\u5757\u548C\u884C\u5185\u4EE3\u7801\u3002

### size

-   radius
    \u5706\u89D2\u7684\u5927\u5C0F\u3002

-   lineWidth
    \u7EBF\u7684\u5BBD\u5EA6\uFF0C\u4F8B\u5982 border \u548C\u5206\u5272\u7EBF\u3002

### color

\u7F16\u8F91\u5668\u7684\u8272\u677F\u3002

-   primary
    \u7F16\u8F91\u5668\u7684\u4E3B\u8272\u3002\u901A\u5E38\u88AB\u7528\u5728\u5927\u8272\u5757\u4E0A\uFF0C\u4F8B\u5982\u5F15\u7528\u533A\u7684\u8272\u5757\u3002
-   secondary
    \u7F16\u8F91\u5668\u7684\u526F\u8272\uFF0C\u7528\u5728\u63D0\u793A\u533A\u57DF\uFF0C\u4F8B\u5982\u94FE\u63A5\u3002
-   solid
    \u7F16\u8F91\u5668\u4E2D\u63A7\u4EF6\u7684\u989C\u8272\uFF0C\u4F8B\u5982\u6309\u94AE\u548C\u8F93\u5165\u6846\u3002
-   shadow
    \u9634\u5F71\u7684\u989C\u8272\u3002
-   line
    \u7EBF\u7684\u989C\u8272\u3002
-   surface
    \u7F16\u8F91\u5668\u7684\u80CC\u666F\u8272\u3002
-   background
    \u7F16\u8F91\u5668\u5176\u5B83\u533A\u5757\u7684\u80CC\u666F\u8272\uFF0C\u4F8B\u5982\u4EE3\u7801\u5757\u548C\u6570\u5B66\u516C\u5F0F\u8F93\u5165\u533A\u3002

### mixin

Mixin \u5B9A\u4E49\u4E86\u4E00\u4E9B\u9884\u8BBE\u6837\u5F0F\uFF0C\u65B9\u4FBF\u5176\u5B83\u63D2\u4EF6\u91CD\u7528\u3002

-   scrollbar
    \u6EDA\u52A8\u6761\u7684\u6837\u5F0F\u3002
-   shadow
    \u9634\u5F71\u7684\u6837\u5F0F\u3002
-   border
    \u8FB9\u6846\u7684\u6837\u5F0F\u3002

### slots

Slots \u4E0D\u4EC5\u5B9A\u4E49\u4E86\u6837\u5F0F\uFF0C\u8FD8\u5B9A\u4E49\u4E86\u5BF9\u5E94\u7684 dom \u5143\u7D20\u3002

-   icon
    \u5B9A\u4E49\u4E86\u5BF9\u4E8E\u4E0D\u540C id\uFF0C\u5982\u4F55\u5B9E\u73B0\u5BF9\u5E94\u7684\u56FE\u6807\u3002

\u9700\u8981\u5B9E\u73B0\u7684\u56FE\u6807 id:

| \u7C7B\u578B | Ids                                           |
| ---- | --------------------------------------------- |
| \u6BB5\u843D | h1, h2, h3, quote, code, table, divider       |
| \u56FE\u7247 | image, brokenImage                            |
| \u5217\u8868 | bulletList, orderedList, taskList             |
| \u7BAD\u5934 | leftArrow, rightArrow, upArrow, downArrow     |
| \u5BF9\u9F50 | alignLeft, alignRight, alignCenter            |
| \u7F16\u8F91 | delete, select                                |
| \u884C\u5185 | bold, italic, inlineCode, strikeThrough, link |
| \u72B6\u6001 | checked, unchecked, loading                   |

### global

\u4E3A\u7F16\u8F91\u5668\u6CE8\u5165\u7684\u5168\u5C40\u6837\u5F0F\u3002

## \u793A\u4F8B: NES \u4E3B\u9898

> \u6682\u65F6\u53EA\u652F\u6301\u82F1\u6587\uFF0C\u56E0\u4E3A\u6CA1\u6709\u627E\u5230\u5408\u9002\u7684\u4E2D\u6587\u5B57\u4F53 CDN\u3002

!CodeSandBox{milkdown-theme-nes-b0zmy?fontsize=14&hidenavigation=1&theme=dark&view=preview}
`;export{n as default};

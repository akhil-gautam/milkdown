var n=`# React

\u6211\u4EEC\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684 react \u652F\u6301\u3002

## \u4F9D\u8D56\u5B89\u88C5

\u9664\u4E86 \`@milkdown/core\`\uFF0C\u9884\u8BBE\u548C\u4E3B\u9898\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5B89\u88C5 \`@milkdown/react\`\uFF0C\u5B83\u63D0\u4F9B\u4E86\u8BA9 milkdown \u8FD0\u884C\u5728 react \u4E2D\u7684\u80FD\u529B\u3002

\`\`\`bash
# install with npm
npm install @milkdown/react @milkdown/core

# optional
npm install @milkdown/preset-commonmark @milkdown/theme-nord
\`\`\`

## \u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6

\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u5341\u5206\u7B80\u5355\u3002

\`\`\`typescript
import React from 'react';
import { Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { ReactEditor, useEditor } from '@milkdown/react';
import { commonmark } from '@milkdown/preset-commonmark';

export const MilkdownEditor: React.FC = () => {
    const editor = useEditor((root) =>
        Editor.make()
            .config((ctx) => {
                ctx.set(rootCtx, root);
            })
            .use(nord)
            .use(commonmark),
    );

    return <ReactEditor editor={editor} />;
};
\`\`\`

### \u5728\u7EBF\u793A\u4F8B

!CodeSandBox{milkdown-react-setup-ngkiq?fontsize=14&hidenavigation=1&theme=dark&view=preview}

---

## \u81EA\u5B9A\u4E49\u8282\u70B9\u7EC4\u4EF6 Component

\u6211\u4EEC\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u652F\u6301\u3002

\`\`\`typescript
import React from 'react';
import { Editor, rootCtx } from '@milkdown/core';
import { ReactEditor, useEditor, useNodeCtx } from '@milkdown/react';
import { commonmark, paragraph, image } from '@milkdown/preset-commonmark';

const CustomParagraph: React.FC = ({ children }) => <div className="react-paragraph">{children}</div>;

const CustomImage: React.FC = ({ children }) => {
    const { node } = useNodeCtx();

    return (
        <img
            className="react-image"
            src={node.attrs.src}
            alt={node.attrs.alt}
            title={node.attrs.tittle}
        />;
    )
};

export const MilkdownEditor: React.FC = () => {
    const editor = useEditor((root, renderReact) => {
        const nodes = commonmark
            .configure(paragraph, { view: renderReact(CustomParagraph) })
            .configure(image, { view: renderReact(CustomImage) });

        return Editor.make()
            .config((ctx) => {
                ctx.set(rootCtx, root);
            })
            .use(nodes);
    });

    return <ReactEditor editor={editor} />;
};
\`\`\`

\`useNodeCtx\` \u4E2D\u53EF\u4EE5\u83B7\u53D6\u5230\u7684\u503C\uFF1A

-   _ctx_:

    Milkdown \u7F16\u8F91\u5668\u7684 ctx\u3002

-   _node_:

    \u5F53\u524D\u9700\u8981\u7EC4\u4EF6\u6E32\u67D3\u7684 prosemirror \u8282\u70B9\u3002
    \u7B49\u540C\u4E8E [nodeViews \u4E2D\u7684 node \u53C2\u6570](https://prosemirror.net/docs/ref/#view.EditorProps.nodeViews)\u3002

-   _view_:

    \u5F53\u524D\u7F16\u8F91\u5668\u7684 prosemirror view\u3002
    \u7B49\u540C\u4E8E [nodeViews \u4E2D\u7684 view \u53C2\u6570](https://prosemirror.net/docs/ref/#view.EditorProps.nodeViews)\u3002

-   _getPos_:

    \u7528\u4E8E\u83B7\u53D6\u5F53\u524D\u8282\u70B9\u7684\u4F4D\u7F6E\u7684\u65B9\u6CD5\u6216\u5C5E\u6027\u3002
    \u7B49\u540C\u4E8E [nodeViews \u4E2D\u7684 getPos \u53C2\u6570](https://prosemirror.net/docs/ref/#view.EditorProps.nodeViews)\u3002

-   _decorations_:

    \u5F53\u524D\u8282\u70B9\u7684 prosemirror decorations\u3002
    \u7B49\u540C\u4E8E [nodeViews \u4E2D\u7684 decorations \u53C2\u6570](https://prosemirror.net/docs/ref/#view.EditorProps.nodeViews)\u3002
`;export{n as default};

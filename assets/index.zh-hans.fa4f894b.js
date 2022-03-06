var n=`# Vue

\u6211\u4EEC\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684 vue \u652F\u6301\u3002

> Vue version should be 3.x

## \u4F9D\u8D56\u5B89\u88C5

\u9664\u4E86 \`@milkdown/core\`\uFF0C\u9884\u8BBE\u548C\u4E3B\u9898\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5B89\u88C5 \`@milkdown/vue\`\uFF0C\u5B83\u63D0\u4F9B\u4E86\u8BA9 milkdown \u8FD0\u884C\u5728 vue \u4E2D\u7684\u80FD\u529B\u3002

\`\`\`bash
# install with npm
npm install @milkdown/vue @milkdown/core

# optional
npm install @milkdown/preset-commonmark @milkdown/theme-nord
\`\`\`

## \u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6

\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u5341\u5206\u7B80\u5355\u3002

\`\`\`typescript
import { defineComponent } from 'vue';
import { Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { VueEditor, useEditor } from '@milkdown/vue';
import { commonmark } from '@milkdown/preset-commonmark';

export const MilkdownEditor = defineComponent(() => {
    const editor = useEditor((root) =>
        Editor.make()
            .config((ctx) => {
                ctx.set(rootCtx, root);
            })
            .use(nord)
            .use(commonmark),
    );

    return () => <VueEditor editor={editor} />;
});
\`\`\`

### \u5728\u7EBF\u793A\u4F8B

!CodeSandBox{milkdown-vue-setup-wjdup?fontsize=14&hidenavigation=1&theme=dark&view=preview}

---

## \u81EA\u5B9A\u4E49\u8282\u70B9\u7EC4\u4EF6 Component

\u6211\u4EEC\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u652F\u6301\u3002

\`\`\`typescript
import { inject, defineComponent, DefineComponent } from 'vue';
import { Editor, rootCtx } from '@milkdown/core';
import { VueEditor, useEditor } from '@milkdown/vue';
import { commonmark, paragraph, image } from '@milkdown/preset-commonmark';
import { Node } from 'prosemirror-model';

const CustomParagraph: DefineComponent = defineComponent({
    name: 'my-paragraph',
    setup(_, { slots }) {
        return () => <div class="vue-paragraph">{slots.default?.()}</div>;
    },
});

const CustomImage: DefineComponent = defineComponent({
    name: 'my-image',
    setup() {
        const node: Node = inject('node', {} as Node);

        return () => <img class="vue-image" src={node.attrs.src} alt={node.attrs.alt} />;
    },
});

export const MyEditor = defineComponent(() => {
    const editor = useEditor((root, renderVue) => {
        const nodes = commonmark
            .configure(paragraph, {
                view: renderVue(CustomParagraph),
            })
            .configure(image, {
                view: renderVue(CustomImage),
            });
        return Editor.make()
            .config((ctx) => {
                ctx.set(rootCtx, root);
            })
            .use(nodes);
    });

    return () => <VueEditor editor={editor} />;
});
\`\`\`

\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u88AB\u6CE8\u5165\u7684\u503C\uFF1A

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

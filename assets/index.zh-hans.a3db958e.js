var n=`# \u4F7F\u7528\u5DE5\u5177\u5305

\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A[\u5DE5\u5177\u5305](https://www.npmjs.com/package/@milkdown/utils)\u6765\u4E3A\u7F16\u5199\u63D2\u4EF6\u63D0\u4F9B\u66F4\u591A\u7684\u80FD\u529B\u548C\u4FBF\u5229\u3002

# \u5DE5\u5382\u51FD\u6570

\u5DE5\u5177\u5305\u63D0\u4F9B\u4E86\u4E09\u4E2A\u5DE5\u5382\u51FD\u6570\uFF1A

-   _createPlugin_:
    \u521B\u5EFA\u901A\u7528\u63D2\u4EF6\u3002
-   _createNode_:
    \u521B\u5EFA[prosemirror node](https://prosemirror.net/docs/ref/#model.Node)\u3002
-   _createMark_:
    \u521B\u5EFA[prosemirror mark](https://prosemirror.net/docs/ref/#model.Mark)\u3002

## \u9009\u9879

\u6709\u65F6\u4F60\u53EF\u80FD\u5E0C\u671B\u63D2\u4EF6\u53EF\u4EE5\u901A\u8FC7\u4E0D\u540C\u7684\u9009\u9879\u6765\u914D\u7F6E\u3002
\u901A\u8FC7\u5DE5\u5177\u5305\u4E2D\u63D0\u4F9B\u7684\u5DE5\u5382\u51FD\u6570\uFF0C\u4F60\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u5B83\uFF1A

\`\`\`typescript
import { createPlugin } from '@milkdown/utils';

type Options = {
    color: string;
};

export const myPlugin = createPlugin<Options>((utils, options) => {
    // \u6240\u6709\u7684\u9009\u9879\u90FD\u9700\u8981\u9ED8\u8BA4\u503C
    const color = options?.color ?? '#fff';

    return {
        // ...\u5B9A\u4E49\u4F60\u7684\u63D2\u4EF6
    };
});

// \u4F7F\u7528\uFF1A
// \u9ED8\u8BA4
Editor.use(myPlugin());

// \u81EA\u5B9A\u4E49\u914D\u7F6E
Editor.use(myPlugin({ color: '#000' }));
\`\`\`

## \u5DE5\u5177

\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5DE5\u5177\u6765\u8BA9\u5B9E\u73B0\u529F\u80FD\u66F4\u52A0\u8F7B\u677E\u3002

### getStyle

\u901A\u8FC7\`getStyle\`\u51FD\u6570\uFF0C\u4F60\u53EF\u4EE5\uFF1A

-   \u901A\u8FC7[themeTool](/#/zh-hans/design-system)\u8BBF\u95EE\u8BBE\u8BA1\u7CFB\u7EDF\u3002
-   \u8BA9\u4F60\u7684\u6837\u5F0F\u81EA\u52A8\u9002\u914D**\u65E0\u5934\u6A21\u5F0F**\u3002

\`\`\`typescript
import { createPlugin } from '@milkdown/utils';
import { css } from '@emotion/css';

type Options = {
    color: string;
};

export const myPlugin = createProsePlugin((_, utils) => {
    const className = utils.getStyle((themeTool) => {
        const primaryColor = themeTool.palette('primary');
        const { shadow } = themeTool.mixin;

        return css\`
            \${shadow};
            color: \${primaryColor};
        \`;
    });

    return {
        // ...\u5B9A\u4E49\u4F60\u7684\u63D2\u4EF6
    };
});

// \u65E0\u5934\u6A21\u5F0F\uFF1A
// \u5728\u65E0\u5934\u6A21\u5F0F\u4E2D\uFF0C\u901A\u8FC7\`getStyle\`\u521B\u5EFA\u7684\u6837\u5F0F\u90FD\u4F1A\u88AB\u6D88\u9664\u3002
Editor.use(myPlugin({ headless: true }));
\`\`\`

### getClassName

\`getClassName\`\u51FD\u6570\u662F\u4E00\u4E2A\u8BA9\u7528\u6237\u66F4\u5BB9\u6613\u521B\u5EFA class name \u7684\u5FEB\u6377\u65B9\u5F0F\u3002

\`\`\`typescript
import { createNode } from '@milkdown/utils';

export const myNode = createNode<Keys>((options, utils) => {
    const id = 'myNode';
    const style = 'my-class-name';

    return {
        id,
        schema: {
            content: 'inline*',
            group: 'block',
            parseDOM: [{ tag: 'div' }],
            toDOM: (node) => ['div', { class: utils.getClassName(node.attrs, id, style) }, 0],
            // ...other props
        },
        // ...other props
    };
});
\`\`\`

\u5728\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u751F\u6210\u7684 block \u662F\u4E00\u4E2A\`div\`\u5143\u7D20\uFF0C\u5B83\u62E5\u6709\u7C7B\u540D\uFF1A\`myNode my-class-name\`\u3002
\u7528\u6237\u4E5F\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u81EA\u5B9A\u4E49\u7C7B\u540D\uFF1A

\`\`\`typescript
Editor.use(
    myNode({
        className: (attrs) => ['my-custom-node-className', attrs.disabled && 'disabled'],
    }),
);
\`\`\`

### ctx

\u4F60\u4E5F\u53EF\u4EE5\u8BBF\u95EE\u7F16\u8F91\u5668\u7684*ctx*\u3002

\`\`\`typescript
import { rootCtx } from '@milkdown/core';
import { createProsePlugin } from '@milkdown/utils';

export const myProsemirrorPlugin = createProsePlugin((_, utils) => {
    const { ctx } = utils;
    const getRootElement = () => ctx.get(rootCtx);

    return new Plugin({
        // ...define your plugin
        // Get root element
        const rootElement = getRootElement();
    });
});
\`\`\`

## \u547D\u4EE4\u548C\u5FEB\u6377\u952E

\u5728\u63D2\u4EF6\u5DE5\u5382\u4E2D\uFF0C\u5B9A\u4E49\u547D\u4EE4\u548C\u5FEB\u6377\u952E\u4F1A\u66F4\u52A0\u7B80\u5355\u3002

\u4F8B\u5982\u5728\u6807\u9898\u8282\u70B9\u4E2D\uFF1A

\`\`\`typescript
import { createCmd, createCmdKey } from '@milkdown/core';
import { createNode, createShortcut } from '@milkdown/utils';
import { setBlockType } from '@milkdown/prose';

type Keys = 'H1' | 'H2' | 'H3';

export const TurnIntoHeading = createCmdKey<number>();
export const heading = createNode<Keys>((_, utils) => {
    const id = 'heading';

    return {
        id,
        schema: {
            content: 'inline*',
            group: 'block',
            attrs: {
                level: {
                    default: 1,
                },
            },
            parseDOM: [1, 2, 3].map((x) => ({ tag: \`h\${x}\`, attrs: { level: x } })),
            toDOM: (node) => [\`h\${node.attrs.level}\`, 0],
            // ...some other props
        },
        // ...some other props

        // \u5B9E\u73B0\u547D\u4EE4
        commands: (nodeType) => [createCmd(TurnIntoHeading, (level = 1) => setBlockType(nodeType, { level }))],

        // \u5C06\u547D\u4EE4\u6620\u5C04\u5230\u5FEB\u6377\u952E
        shortcuts: {
            [SupportedKeys.H1]: createShortcut(TurnIntoHeading, 'Mod-Alt-1', 1),
            [SupportedKeys.H2]: createShortcut(TurnIntoHeading, 'Mod-Alt-2', 2),
            [SupportedKeys.H3]: createShortcut(TurnIntoHeading, 'Mod-Alt-3', 3),
        },
    };
});
\`\`\`

\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\`createCmdKey\`\u6765\u6CE8\u518C\u547D\u4EE4\uFF0C\u7136\u540E\u4F7F\u7528\`createCmd\`\u6765\u5B9E\u73B0\u5B83\u3002
\u7C7B\u578B\u53D8\u91CF\u4E2D\u7684\`number\`\u610F\u5473\u7740\u8FD9\u4E2A\u547D\u4EE4\u88AB\u8C03\u7528\u65F6\u53EF\u4EE5\u63A5\u53D7\`number\`\u7C7B\u578B\u7684\u53C2\u6570\u3002
\u7136\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u547D\u4EE4\u6765\u521B\u5EFA\u5FEB\u6377\u952E\u3002

\u901A\u8FC7\u8FD9\u4E2A\u6A21\u5F0F\uFF0C\u6211\u4EEC\u4E5F\u63D0\u4F9B\u4E86\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u7684\u80FD\u529B\u3002

\`\`\`typescript
Editor.use(
    heading({
        keymap: {
            H1: 'Mod-shift-1',
            H2: 'Mod-shift-2',
            H3: 'Mod-shift-3',
        },
    }),
);
\`\`\`

\u4F60\u53EF\u80FD\u6CE8\u610F\u5230\u4E86\u5B9A\u4E49\u7684\`Keys\`\u7C7B\u578B\uFF0C\u5B83\u7528\u4E8E\u544A\u8BC9 typescript \u652F\u6301\u7684\u5FEB\u6377\u952E\u3002
\u5982\u679C\u7528\u6237\u8BD5\u56FE\u81EA\u5B9A\u4E49\u8D85\u51FA\u8303\u56F4\u7684\u5FEB\u6377\u952E\uFF0Ctypescript \u4F1A\u544A\u8BC9\u4ED6\u4EEC\uFF1A

\`\`\`typescript
Editor.use(
    heading({
        keymap: {
            // typescript\u7F16\u8BD1\u65F6\u4F1A\u62A5\u9519
            H4: 'Mod-shift-4',
        },
    }),
);
\`\`\`

## \u7EE7\u627F

\u6240\u6709\u88AB\u5DE5\u5382\u521B\u5EFA\u7684\u63D2\u4EF6\u90FD\u53EF\u4EE5\u88AB\u7EE7\u627F\u3002\u5982\u679C\u4F60\u60F3\u8981\u4FEE\u6539\u73B0\u6709\u63D2\u4EF6\u7684\u4E00\u4E9B\u884C\u4E3A\uFF0C\u7EE7\u627F\u6BD4\u5B8C\u5168\u91CD\u5199\u8981\u597D\u3002

\`\`\`typescript
import { heading } from '@milkdown/preset-commonmark';
const customHeading = heading.extend((original, utils, options) => {
    return {
        ...original,
        schema: customSchema,
    };
});
\`\`\`

\u8FD9\u91CC\u6211\u4EEC\u6709\u4E09\u4E2A\u53C2\u6570\uFF0C\`options\`\u548C\`utils\`\u5DF2\u7ECF\u4ECB\u7ECD\u8FC7\u4E86\u3002\`original\`\u662F\u6307\u88AB\u7EE7\u627F\u7684\u63D2\u4EF6\u3002
\u8FD9\u4E2A\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u63D2\u4EF6\u3002

\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7C7B\u578B\u53C2\u6570\u6765\u66F4\u6539\`options\`\u548C\`keys\`\u7684\u7C7B\u578B\u7B7E\u540D\u3002

\`\`\`typescript
import { heading } from '@milkdown/preset-commonmark';
const customHeading = heading.extend<CustomKeys, CustomOptions>((original, utils, options) => {
    return {
        ...original,
        schema: customSchema,
    };
});
\`\`\`

# AtomList

\u5728\u771F\u5B9E\u4E16\u754C\u4E2D\uFF0C\u4E00\u4E2A\u5305\u7ECF\u5E38\u7531\u4E00\u7CFB\u5217 milkdown \u63D2\u4EF6\u7EC4\u6210\u3002
\`AtomList\`\u53EF\u4EE5\u5E2E\u52A9\u7528\u6237\u66F4\u7B80\u5355\u7684\u4F7F\u7528\u548C\u914D\u7F6E\u63D2\u4EF6\u5217\u8868\u3002

\`\`\`typescript
import { createNode, AtomList } from '@milkdown/utils';
const node1 = createNode(/* node1 */);
const node2 = createNode(/* node2 */);
const node3 = createNode(/* node3 */);

const mySyntaxPlugin = AtomList.create([node1(), node2(), node3()]);

Editor.use(mySyntaxPlugin);

// \u914D\u7F6E\u63D2\u4EF6\uFF1A
Editor.use(
    mySyntaxPlugin.configure(node1, {
        keymap: {
            //...
        },
    }),
);
// \u7B49\u540C\u4E8E\uFF1A
Editor.use([
    node1({
        keymap: {
            //...
        },
    }),
    node2(),
    node3(),
]);

// \u4E3A\u6240\u6709\u63D2\u4EF6\u5F00\u542F\u65E0\u5934\u6A21\u5F0F\uFF1A
Editor.use(mySyntaxPlugin.headless());

// \u79FB\u9664\u4E00\u4E2A\u63D2\u4EF6\uFF1A
Editor.use(mySyntaxPlugin.remove(node1));

// \u66FF\u6362\u4E00\u4E2A\u63D2\u4EF6\uFF1A
const myNode1 = createNode(/* ... */);
Editor.use(mySyntaxPlugin.replace(node1, myNode1));
\`\`\`

# \u53EF\u7EC4\u5408\u63D2\u4EF6

\u6709\u65F6\u7528\u6237\u4E0D\u60F3\u63D0\u4F9B\u4E00\u4E2A\u5B8C\u6574\u7684\u63D2\u4EF6\uFF0C\u800C\u662F\u53EA\u63D0\u4F9B\u4E00\u90E8\u5206\u3002
\u6216\u8005\u4ED6\u4EEC\u60F3\u5C06\u4E00\u4E2A\u63D2\u4EF6\u4E0E\u5176\u4ED6\u63D2\u4EF6\u7EC4\u5408\u3002
\u5728\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u53EF\u7EC4\u5408\u63D2\u4EF6\u3002

## Remark Plugin

\`\`\`typescript
import { $remark } from '@milkdown/utils';

const myRemarkPlugin = $remark((ctx) => remarkPlugin);

Editor.use(myRemarkPlugin);
\`\`\`

## Node & Mark

\`\`\`typescript
import { $node } from '@milkdown/utils';

const myNode = $node('my-node', (ctx) => {
    return {
        atom: true,
        toDOM: () => ['my-node'],
        parseDOM: [{ tag: 'my-node' }],
        toMarkdown: {
            //...
        },
        parseMarkdown: {
            //...
        },
    };
});

Editor.use(myNode);
\`\`\`

\`$nodes\`\u548C\`$marks\`\u521B\u5EFA\u7684\u63D2\u4EF6\u6709\u5143\u6570\u636E\uFF1A

-   id\uFF1Anode \u6216 mark \u7684 id\u3002
-   type\uFF1Aprosemirror node \u6216 mark \u7684\u7C7B\u578B\u3002
-   schema\uFF1Anode \u6216 mark \u7684\u539F\u59CB schema\u3002

## InputRule

\`\`\`typescript
import { $inputRule } from '@milkdown/utils';
import { schemaCtx } from '@milkdown/core';
import { wrappingInputRule } from '@milkdown/prose';

const myNode = $node(/* ... */);

const inputRule1 = $inputRule((ctx) => {
    return wrappingInputRule(/^\\[my-node\\]/, myNode.type);
});

const inputRule2 = $inputRule((ctx) => {
    return wrappingInputRule(/^\\[my-node\\]/, ctx.get(schemaCtx).nodes['my-node'].type);
});
\`\`\`

\u5728\u88AB\`$inputRule\`\u521B\u5EFA\u540E\uFF0C\u8F93\u5165\u89C4\u5219\u6709\u5143\u6570\u636E\uFF1A

-   inputRule\uFF1A\u539F\u59CB\u8F93\u5165\u89C4\u5219\u3002

## Command

\`\`\`typescript
import { $command } from '@milkdown/utils';
import { createCmd, createCmdKey } from '@milkdown/core';
import { wrapIn } from '@milkdown/prose';

const myNode = $node(/* ... */);

export const WrapInMyBlock = createCmdKey<number>();

const myCommand = $command((ctx) => {
    return createCmd(WrapInMyBlock, (level = 1) => wrapIn(myNode.type, level));
});
\`\`\`

\u5728\u88AB\`$command\`\u521B\u5EFA\u540E\uFF0C\u547D\u4EE4\u6709\u5143\u6570\u636E\uFF1A

-   run\uFF1A\u8FD0\u884C\u521B\u5EFA\u7684\u547D\u4EE4\u3002
    \u4F8B\u5982\uFF1A\`myCommand.run(1)\`\u5C06\u9009\u4E2D\u7684\u5185\u5BB9\u5305\u88F9\u5728\`myNode.type\`\uFF0C\u7B49\u7EA7\u4E3A 1\u3002
-   key: The key of the command.
-   key\uFF1A\u547D\u4EE4\u7684 key\u3002
    \u4F8B\u5982\uFF1A\`myCommand.key\`\u5C06\u4F1A\u8FD4\u56DE\`WrapInMyBlock\`\u3002

## Shortcut

\`\`\`typescript
import { $shortcut } from '@milkdown/utils';

const myCommand = $command(/* ... */);

const myShortcut = $shortcut((ctx) => {
    return {
        'Mod-Alt-1': () => myCommand.run(1),
        'Mod-Alt-2': () => myCommand.run(2),
    };
});
\`\`\`

\u5728\u88AB\`$shortcut\`\u521B\u5EFA\u540E\uFF0C\u5FEB\u6377\u952E\u6709\u5143\u6570\u636E\uFF1A

-   keymap\uFF1A\u521B\u5EFA\u7684 keymap\u3002

## Prosemirror Plugin

\`\`\`typescript
import { $prose } from '@milkdown/utils';
import { Plugin } from '@milkdown/prose';

const myProsePlugin = $prose((ctx) => {
    return new Plugin({
        //...
    });
});
\`\`\`

\u5728\u88AB\`$prose\`\u521B\u5EFA\u540E\uFF0Cprosemirror \u63D2\u4EF6\u6709\u5143\u6570\u636E\uFF1A

-   plugin\uFF1A\u539F\u59CB prosemirror \u63D2\u4EF6\u3002

## View

\`\`\`typescript
import { $view } from '@milkdown/utils';

const myNode = $node(/* ... */);

const myNodeView = $view(myNode, (ctx) => {
    return (node, view, getPos, decorations) => {
        return nodeViewImpl;
    };
});
\`\`\`

\u5728\u88AB\`$view\`\u521B\u5EFA\u540E\uFF0Cview \u6709\u5143\u6570\u636E\uFF1A

-   type\uFF1A\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165 view \u7684\u539F\u59CB\`$node\`\u6216\`$mark\`\u6570\u636E\u3002
-   view\uFF1A\u539F\u59CB view\u3002
`;export{n as default};

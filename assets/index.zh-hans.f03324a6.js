var n=`# \u547D\u4EE4

\u6709\u65F6\u5019\uFF0C\u6211\u4EEC\u4F1A\u60F3\u66F4\u6781\u5BA2\u5730\u5BF9\u7F16\u8F91\u5668\u8FDB\u884C\u4E00\u4E9B\u6539\u52A8\uFF0C\u6BD4\u5982\u70B9\u51FB\u4E00\u4E2A\u6309\u94AE\u76F4\u63A5\u53EF\u4EE5\u5BF9\u9009\u4E2D\u5185\u5BB9\u8FDB\u884C\u659C\u4F53\u6837\u5F0F\u7684\u5207\u6362\u3002

\u9488\u5BF9\u8FD9\u79CD\u573A\u666F\uFF0C\u6211\u4EEC\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86\u4E00\u4E2A\u547D\u4EE4\u7BA1\u7406\u5668\uFF0C\u5176\u4E2D\u6709\u8BB8\u591A\u5728\u9884\u8BBE\uFF08Presets\uFF09\u9636\u6BB5\u5B9A\u4E49\u548C\u63D2\u4EF6\u4E2D\u4F7F\u7528\u7684\u547D\u4EE4\u3002

## \u8FD0\u884C\u547D\u4EE4

\u6211\u4EEC\u53EF\u4EE5\u5728\u547D\u4EE4\u7BA1\u7406\u5668\u4E2D\u901A\u8FC7\u8C03\u7528\u7279\u5B9A **command key** \u6765\u8FDB\u884C\u6307\u5B9A\u64CD\u4F5C\u3002

\`\`\`typescript
import { Editor, commandsCtx } from '@milkdown/core';
import { commonmark, ToggleItalic } from '@milkdown/preset-commonmark';

async function setup() {
    const editor = await Editor.make().use(commonmark).create();

    const toggleItalic = () =>
        editor.action((ctx) => {
            // get command manager
            const commandManager = ctx.get(commandsCtx);

            // call command
            commandManager.call(ToggleItalic);
        });

    // get markdown string:
    $button.onClick = toggleItalic;
}
\`\`\`

## \u521B\u5EFA\u547D\u4EE4

\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u6765\u521B\u5EFA\u547D\u4EE4\uFF1A

1. \u901A\u8FC7 \`createCmdKey\` \u5148\u521B\u5EFA\u4E00\u4E2A command key\u3002
2. \u518D\u521B\u5EFA\u5BF9\u5E94\u7684 command \u65B9\u6CD5\u3002\uFF08\u5B83\u4EEC\u4E5F\u53EA\u662F\u4E00\u4E9B [prosemirror commands](https://prosemirror.net/docs/guide/#commands)\uFF09
3. \u5728\u547D\u4EE4\u7BA1\u7406\u5668\u4E2D\u5BF9\u521A\u624D\u521B\u5EFA\u7684\u547D\u4EE4\u8FDB\u884C\u6CE8\u518C\u3002

### \u4F8B\u5B50\uFF1A\u4E0D\u643A\u5E26\u53C2\u6570\u7684\u547D\u4EE4

\u6211\u4EEC\u5C06\u5728\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\u521B\u5EFA\u547D\u4EE4\uFF1A

\`\`\`typescript
import { createCmdKey, MilkdownPlugin, CommandsReady, commandsCtx, schemaCtx } from '@milkdown/core';
import { wrapIn } from 'prosemirror-commands';

export const WrapInBlockquote = createCmdKey();
const plugin: MilkdownPlugin = () => async (ctx) => {
    // wait for command manager ready
    await ctx.wait(CommandsReady);

    const commandManager = ctx.get(commandsCtx);
    const schema = ctx.get(schemaCtx);

    commandManager.create(WrapInBlockquote, () => wrapIn(schema.nodes.blockquote));
};

// call command
commandManager.call(WrapInBlockquote);
\`\`\`

### \u4F8B\u5B50\uFF1A\u643A\u5E26\u53C2\u6570\u7684\u547D\u4EE4

\u6211\u4EEC\u5F53\u7136\u4E5F\u53EF\u4EE5\u4E3A\u547D\u4EE4\u6DFB\u52A0\u53C2\u6570\u5217\u8868\uFF1A

\`\`\`typescript
import { createCmdKey, MilkdownPlugin, CommandsReady, commandsCtx, schemaCtx } from '@milkdown/core';
import { setBlockType } from 'prosemirror-commands';

// use number as the type of argument
export const WrapInHeading = createCmdKey<number>();

const plugin: MilkdownPlugin = () => async (ctx) => {
    // wait for command manager ready
    await ctx.wait(CommandsReady);

    const commandManager = ctx.get(commandsCtx);
    const schema = ctx.get(schemaCtx);

    commandManager.create(WrapInBlockquote, (level = 1) => setBlockType(schema.nodes.heading, { level }));
};

// call command
commandManager.call(WrapInHeading); // turn to h1 by default
commandManager.call(WrapInHeading, 2); // turn to h2
\`\`\`

---

## \u5185\u90E8\u547D\u4EE4

### Commonmark

\u4F60\u53EF\u4EE5\u4F7F\u7528 \`import { commands } from '@milkdown/preset-commonmark'\` \u6765\u83B7\u53D6\u4EE3\u7801\u4E2D\u6240\u6709\u7684\u547D\u4EE4\u3002

-   Toggle:
    -   ToggleInlineCode
    -   ToggleItalic
    -   ToggleLink
    -   ToggleBold
-   Insert:
    -   InsertHardbreak
    -   InsertHr
    -   InsertImage
-   Modify:
    -   ModifyLink
    -   ModifyImage
-   Wrap:
    -   WrapInBlockquote
    -   WrapInBulletList
    -   WrapInOrderedList
-   Turn Into:
    -   TurnIntoCodeFence
    -   TurnIntoHeading
    -   TurnIntoText
-   List Operation:
    -   SplitListItem
    -   SinkListItem
    -   LiftListItem

### GFM

\u4F60\u53EF\u4EE5\u4F7F\u7528 \`import { commands } from '@milkdown/preset-gfm'\` \u6765\u83B7\u53D6\u4EE3\u7801\u4E2D\u6240\u6709\u7684\u547D\u4EE4

**GFM \u5305\u62EC\u6765\u81EA commonmark \u4E2D\u6240\u6709\u7684\u547D\u4EE4**\uFF0C\u5E76\u989D\u5916\u63D0\u4F9B:

-   Toggle:
    -   ToggleStrikeThrough
-   Turn Into:
    -   TurnIntoTaskList
-   Task List Operation:
    -   SplitTaskListItem
    -   SinkTaskListItem
    -   LiftTaskListItem
`;export{n as default};

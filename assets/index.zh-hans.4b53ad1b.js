var n=`# \u7F16\u5199\u81EA\u5B9A\u4E49\u63D2\u4EF6

\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u7F16\u5199 Milkdown \u63D2\u4EF6\u800C\u4E0D\u4F7F\u7528\u63D0\u4F9B\u7684\u5DE5\u5177\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u4F60\u5C06\u80FD\u591F\u63A7\u5236\u66F4\u591A\u63D2\u4EF6\u7684\u7EC6\u8282\u3002\u8FD9\u6709\u52A9\u4E8E\u5E2E\u52A9\u4F60\u7F16\u5199\u51FA\u66F4\u5F3A\u5927\u7684\u63D2\u4EF6\u3002

## \u7ED3\u6784\u6982\u89C8

\u4E00\u822C\u6765\u8BF4\uFF0C\u4E00\u4E2A\u63D2\u4EF6\u5177\u6709\u5982\u4E0B\u7ED3\u6784\uFF1A

\`\`\`typescript
import { MilkdownPlugin } from '@milkdown/core';

const myPlugin: MilkdownPlugin = (pre) => {
    // #1 \u51C6\u5907\u9636\u6BB5
    return async (ctx) => {
        // #2 \u6267\u884C\u9636\u6BB5
    };
};
\`\`\`

\u6BCF\u4E2A\u63D2\u4EF6\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A

1. _\u51C6\u5907_\uFF1A\u8FD9\u4E00\u9636\u6BB5\u5C06\u5728\u63D2\u4EF6\u88AB\u901A\u8FC7 \`use\` \u65B9\u6CD5\u88AB\u6CE8\u518C\u8FDB milkdown \u65F6\u6267\u884C\u3002
2. _\u6267\u884C_\uFF1A\u8FD9\u4E00\u9636\u6BB5\u5C06\u5728\u63D2\u4EF6\u88AB\u771F\u5B9E\u52A0\u8F7D\u65F6\u6267\u884C\u3002

## \u5B9A\u65F6\u5668\uFF08Timer\uFF09

\u5B9A\u65F6\u5668\u88AB\u7528\u4E8E\u51B3\u5B9A\u5F53\u524D\u63D2\u4EF6\u88AB\u52A0\u8F7D\u7684\u65F6\u673A\uFF0C\u548C\u5F53\u524D\u63D2\u4EF6\u5C06\u5982\u4F55\u5F71\u54CD\u5176\u5B83\u63D2\u4EF6\u7684\u52A0\u8F7D\u3002

\u4F60\u53EF\u4EE5\u4F7F\u7528 \`ctx.wait\` \u6765\u7B49\u5F85\u4E00\u4E2A\u5B9A\u65F6\u5668\u7ED3\u675F\u3002

\`\`\`typescript
import { MilkdownPlugin, Complete } from '@milkdown/core';

const myPlugin: MilkdownPlugin = () => {
    return async (ctx) => {
        const start = Date.now();

        await ctx.wait(Complete);

        const end = Date.now();

        console.log('Milkdown load duration: ', end - start);
    };
};
\`\`\`

\u4F60\u4E5F\u53EF\u4EE5\u521B\u5EFA\u81EA\u5DF1\u7684\u5B9A\u65F6\u5668\uFF0C\u4EE5\u53CA\u5F71\u54CD\u5176\u5B83\u63D2\u4EF6\u7684\u52A0\u8F7D\u65F6\u673A\u3002
\u4F8B\u5982\uFF0C\u8BA9\u6211\u521B\u5EFA\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u5B83\u5C06\u4ECE\u8FDC\u7A0B\u670D\u52A1\u5668\u62C9\u53D6\u7F16\u8F91\u5668\u7684\u9ED8\u8BA4\u503C\u3002

\`\`\`typescript
import { MilkdownPlugin, editorStateTimerCtx, defaultValueCtx, createTimer } from '@milkdown/core';

const RemoteTimer = createTimer('RemoteTimer');

const remotePlugin: MilkdownPlugin = (pre) => {
    pre.record(RemoteTimer);

    return async (ctx) => {
        ctx.update(editorStateTimerCtx, (timers) => timers.concat(RemoteTimer));

        const defaultMarkdown = await fetchMarkdownAPI();
        ctx.set(defaultValueCtx, defaultMarkdown);

        ctx.done(RemoteTimer);
    };
};
\`\`\`

\u5B83\u6709\u5982\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A

1. \u6211\u4EEC\u4F7F\u7528 \`createTimer\` \u6765\u521B\u5EFA\u5B9A\u65F6\u5668\uFF0C\u7136\u540E\u4F7F\u7528 \`pre.record\` \u6765\u5C06\u5B9A\u65F6\u5668\u6CE8\u518C\u5230 milkdown \u4E2D\u3002
2. \u6211\u4EEC\u66F4\u65B0 \`editorStateTimerCtx\` \u6765\u544A\u8BC9\u5185\u7F6E\u7684 \`editorState\` \u63D2\u4EF6\uFF0C\u5B83\u5E94\u8BE5\u7B49\u6211\u4EEC \u7684\u8FDC\u7A0B\u83B7\u53D6\u6B65\u9AA4\u7ED3\u675F\u540E\u518D\u6267\u884C\u3002
3. \u5F53\u6211\u4EEC\u4ECE \`fetchMarkdownAPI\`\u4E2D\u53D6\u5230\u9700\u8981\u7684\u6570\u636E\u540E\uFF0C\u6211\u4EEC\u5C06\u5B83\u8BBE\u7F6E\u4E3A \`defaultValue\` \u5E76\u8C03\u7528 \`ctx.done\` \u6765\u5C06\u5B9A\u65F6\u5668\u6807\u8BB0\u4E3A\u7ED3\u675F\u3002

## \u4E0A\u4E0B\u6587\uFF08Ctx\uFF09

\u5728\u4E0A\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u4F7F\u7528\u4E86 \`ctx\` \u8BB8\u591A\u6B21\u4E86\uFF0C\u73B0\u5728\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u53BB\u7406\u89E3\u5B83\u662F\u4EC0\u4E48\u3002
\u4E0A\u4E0B\u6587\u662F\u4E00\u4E2A\u53EF\u4EE5\u5728\u6574\u4E2A\u7F16\u8F91\u5668\u5B9E\u4F8B\u4E2D\u5171\u4EAB\u7684\u6570\u636E\u5207\u7247\u3002

\`\`\`typescript
import { MilkdownPlugin, createSlice } from '@milkdown/core';

const counterCtx = createSlice(0);

const counterPlugin: MilkdownPlugin = (pre) => {
    pre.inject(counterCtx);

    return (ctx) => {
        // count is 0
        const count0 = ctx.get(counterCtx);

        // set count to 1
        ctx.get(counterCtx, 1);

        // now count is 1
        const count1 = ctx.get(counterCtx);

        // set count to n + 2
        ctx.update(counterCtx, (prev) => prev + 2);

        // now count is 3
        const count2 = ctx.get(counterCtx);
    };
};
\`\`\`

\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 \`createSlice\` \u6765\u521B\u5EFA\u4E0A\u4E0B\u6587\uFF0C\u7136\u540E\u4F7F\u7528 \`pre.inject\` \u6765\u5C06\u5176\u6CE8\u518C\u5230\u7F16\u8F91\u5668\u4E2D\u3002\`ctx.get\` \u6765\u83B7\u53D6\u4E00\u4E2A\u4E0A\u4E0B\u6587\u7684\u503C\uFF0C\u4F7F\u7528 \`ctx.set\` \u6765\u8BBE\u7F6E\u5B83\u7684\u503C\uFF0C\u6216\u662F\u4F7F\u7528 \`ctx.update\` \u6765\u4F7F\u7528\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u66F4\u65B0\u4E0A\u4E0B\u6587\u3002

\u6240\u4EE5\u5F53\u6211\u4EEC\u7ED3\u5408 \`timer\` \u4F7F\u7528 \`ctx\` \u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u51B3\u5B9A\u4E00\u4E2A\u63D2\u4EF6\u6267\u884C\u7684\u65F6\u673A\u3002

\`\`\`typescript
import { MilkdownPlugin, SchemaReady, Timer, createSlice } from '@milkdown/core';

const examplePluginTimersCtx = createSlice<Timer[]>([]);

const examplePlugin: MilkdownPlugin = (pre) => {
    pre.inject(counterCtx, [SchemaReady]);
    return async (ctx) => {
        await Promise.all(ctx.get(examplePluginTimersCtx).map((timer) => ctx.wait(timer)));
        // \u6216\u8005\u6211\u4EEC\u4E5F\u53EF\u4EE5\u7528\u4E00\u4E2A\u5185\u7F6E\u7684\u8BED\u6CD5\u7CD6\u7B80\u5316\u5B83
        await ctx.waitTimers(examplePluginTimersCtx);

        // do something
    };
};
\`\`\`

\u901A\u8FC7\u8FD9\u79CD\u6A21\u5F0F\uFF0C\u5982\u679C\u5176\u5B83\u63D2\u4EF6\u60F3\u8981\u5EF6\u8FDF \`examplePlugin\` \u7684\u6267\u884C\uFF0C\u5B83\u4EEC\u9700\u8981\u505A\u7684\u5C31\u662F\u901A\u8FC7 \`ctx.update\` \u6DFB\u52A0\u4E00\u4E2A\u5B9A\u65F6\u5668\u5230 \`examplePluginTimerCtx\` \u4E2D\u3002
`;export{n as default};

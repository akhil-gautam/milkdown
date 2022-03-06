var n=`# \u67B6\u6784

Milkdown \u4E3B\u8981\u57FA\u4E8E\u4E24\u4E2A\u6846\u67B6\u6784\u5EFA\uFF1A [Prosemirror](https://prosemirror.net/) \u548C [Remark](https://remark.js.org/)\u3002
\u6B63\u56E0\u5982\u6B64, \u4F60\u53EF\u4EE5\u8BA4\u4E3A[\u89E3\u6790\u5668](/#/zh-hans/parser) \u548C [\u5E8F\u5217\u5316\u5668](/#/zh-hans/serializer) \u662F\u80FD\u591F\u8BA9 remark \u62BD\u8C61\u8BED\u6CD5\u6811\u548C Prosemirror \u7684\u7F16\u8F91\u5668\u72B6\u6001\u540C\u6B65\u7684\u6865\u6881\u3002

\u6240\u4EE5\uFF0C\u5BF9\u4E8E\u4EFB\u610F\u65F6\u523B\u7684 Milkdown \u7F16\u8F91\u5668\uFF0C\u5B83\u90FD\u6709\u4E00\u4E2A\u7F16\u8F91\u5668\u72B6\u6001(editor state)\uFF0C\u8FD9\u4E00\u72B6\u6001\u65E2\u53EF\u4EE5\u6E32\u67D3\u51FA\u7F16\u8F91\u5668\u7684 UI\uFF0C\u4E5F\u53EF\u4EE5\u7528\u6765\u88AB\u8F6C\u6362\u4E3A markdown \u5B57\u7B26\u4E32\u3002
\u4EFB\u4F55\u5BF9\u7F16\u8F91\u5668\u7684\u53D8\u66F4\u90FD\u4E0D\u4F1A\u76F4\u63A5\u4FEE\u6539\u7F16\u8F91\u5668\u7684 UI\uFF0C\u5B83\u4F1A\u5148\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7F16\u8F91\u5668\u72B6\u6001\uFF0C\u7136\u540E\u901A\u8FC7\u8FD9\u4E00\u72B6\u6001\u6E32\u67D3\u65B0\u7684 UI\u3002

\`\`\`mermaid
graph BT;
	view[\\"Editor View (UI)"\\];
	dom(DOM Event);
	tr(Transaction);
	state{{Editor State}};

	string[/Markdown String/];
	ast{{Remark AST}};

	tr -- create new --> state;
	state -- render --> view;
	view -- user input --> dom;
	dom --> tr;

	ast -- Parser --> state;
	state -- Serializer --> ast;


	ast --> string;
	string --> ast;
\`\`\`

## \u751F\u547D\u5468\u671F

\u5728 Milkdown \u5185\u90E8, \u5B83\u6709\u8BB8\u591A[\u5185\u7F6E\u63D2\u4EF6](/#/zh-hans/internal-plugins) \u6765\u63A7\u5236\u7F16\u8F91\u5668\u7684\u72B6\u6001\uFF0C \u5B83\u53EF\u4EE5\u901A\u8FC7\u4E0B\u56FE\u6765\u63CF\u8FF0:

\`\`\`mermaid
flowchart TD;
	prepare("Nodes | Marks | Remark Plugins");
	stage1("Parser | Serializer | Commands")
	stage2("Prosemirror Plugins | Keymap | Input Rules")
	Config --> Init;
	Init --> prepare --> Schema;
	Schema --> stage1 --> stage2;
	stage2 --> EditorState --> EditorView;
	EditorView --> Done;
\`\`\`
`;export{n as default};

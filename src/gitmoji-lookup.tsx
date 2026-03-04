import { List, ActionPanel, Action } from "@raycast/api";
import gitmojisData from "./gitmojis.json";

export default function Command() {
  const gitmojis = gitmojisData.gitmojis;

  return (
    <List
      isShowingDetail
      searchBarPlaceholder="Try typing 'build' or 'ci'..."
      filtering={true}
    >
      {gitmojis.map((item) => {
        const cleanDescription = item.description.trim();
        const cleanCode = item.code.trim();

        return (
          <List.Item
            key={item.name}
            icon={item.emoji}
            title={cleanCode}
            subtitle={cleanDescription}
            keywords={[
                cleanDescription,
                item.name,
                cleanCode.replace(/:/g, "")
            ]}
            detail={
              <List.Item.Detail
                markdown={`# ${item.emoji}\n## ${item.code}\n\n${item.description}`}
              />
            }
            actions={
              <ActionPanel>
                <Action.Paste title="Paste Code" content={item.code} />
                <Action.Paste title="Paste Emoji" content={item.emoji} shortcut={{ modifiers: ["cmd"], key: "enter" }}/>
                <Action.CopyToClipboard title="Copy Code" content={item.code} />
              </ActionPanel>
            }
          />
        );
      })}
    </List>
  );
}

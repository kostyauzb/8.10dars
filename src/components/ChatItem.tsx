import { Person } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const ChatItem = () => {
  return (
    <>
      <ListItem sx={{ cursor: "pointer" }}>
        <ListItemAvatar>
          <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.jp%2Fpin%2F364087951130741589%2F&psig=AOvVaw2-xmKAjz7WeAJnzzdCV7PM&ust=1711992945760000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiak-2En4UDFQAAAAAdAAAAABAJ">
            <Person />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider></Divider>
    </>
  );
};

export default ChatItem;

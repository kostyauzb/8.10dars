import {
  Box,
  Grid,
  IconButton,
  List,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ChatItem from "../components/ChatItem";
import { ArrowBack, ArrowUpward, Send } from "@mui/icons-material";
import Message from "../components/Message";

const Chats = () => {
  return (
    <Grid container>
      <Grid item sm={4}>
        <List sx={{}}>
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </List>
      </Grid>

      <Grid item sm={8}>
        <Paper
          sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
        >
          {/* chat header */}
          <Paper sx={{ p: 2 }}>
            <Box display="flex" alignItems={"center"} gap={1}>
              <IconButton sx={{ display: { sm: "none" } }} color="primary">
                <ArrowBack />
              </IconButton>
              <Typography>ALex</Typography>
            </Box>
          </Paper>

          <Stack justifyContent={"flex-end"} spacing={2} sx={{ p: 2, flex: 1 }}>
            <Message sender={"me"} />
            <Message />
            <Message sender={"me"} />
            <Message />
          </Stack>
          <Box display={"flex"} m={2}>
            <TextField
              fullWidth
              label="Message..."
              variant="outlined"
              size="small"
            />
            <IconButton color="primary">
              <Send />
            </IconButton>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Chats;

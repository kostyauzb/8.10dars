import { Paper, Stack } from "@mui/material";

const Message = ({ sender }: { sender?: string }) => {
  return (
    <Stack direction={sender === "me" ? "row-reverse" : "row"}>
      <Paper
        sx={{
          py: 1,
          px: 3,
          bgcolor: sender ? "primary.main" : "",
          color: sender ? "#fff" : "",
        }}
      >
        Hello alex
      </Paper>
    </Stack>
  );
};

export default Message;

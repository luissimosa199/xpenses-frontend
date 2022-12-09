export const statusColor = (
  status: "unknown" | "paid" | "notpaid"
):
  | "info"
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | undefined => {
  if (status === "unknown") {
    return "inherit";
  }

  if (status === "paid") {
    return "primary";
  }

  if (status === "notpaid") {
    return "warning";
  }

  return "error";
};

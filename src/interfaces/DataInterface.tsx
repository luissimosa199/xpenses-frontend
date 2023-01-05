export interface DataObject {
  _id: string;
  name: string;
  description: string;
  date?: string;
  amount?: number;
  status: "paid" | "notpaid" | "unknown";
  createdBy: string;
  family: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

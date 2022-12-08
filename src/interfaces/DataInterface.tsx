export interface DataObject {
  id: string;
  name: string;
  description: string;
  date?: string;
  amount?: number;
  status: "paid" | "notpaid" | "unknown";
  createBy: string;
  family: string;
  createAt: string;
  updatedAt: string;
  __v: number;
}

export default interface Invoice {
  id: number;
  invoiceNo: string;
  stockCode: string;
  description: string;
  quantity: number;
  invoiceDate: string;
  unitPrice: number;
  customerId: string;
  country: string;
}

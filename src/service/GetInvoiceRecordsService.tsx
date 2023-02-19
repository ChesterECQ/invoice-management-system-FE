import http from '../api/APIUtils';
import SearchVal from '../interface/SearchVal';

// get invoice records form BE
const getInvoicesRecords = (searchVal : SearchVal) : Promise<any> => {
    return http.post("/invoice/getInvoiceRecords", searchVal)
}

const GetInvoiceRecordsService = {
    getInvoicesRecords,
  };
  
  export default GetInvoiceRecordsService;
export const serverUrl: string = "http://localhost:5036";

// *url for donators
export const donatorUrl: string = `${serverUrl}/Donator`;

// ? API endpoint to get the donators count, it is a GET request that returns an Int32 (Number)
export const getDonatorsCountUrl: string = `${donatorUrl}/GetDonatorCount`;

// *url for cases
export const caseUrl: string = `${serverUrl}/Cases`;

// ? API endpoint to get the cases count, it is a GET request that returns an Int32 (Number)
export const getResolvedCaseCountUrl: string = `${caseUrl}/GetResolvedCaseCount`;

// ? API endpoint to get verified cases List, it is a GET request
export const getVerifiedCasesUrl: string = `${caseUrl}/GetAllVerifiedCases`;

// ? API endpoint to get case by id, it is a GET request
export const getCaseByIdUrl: string = `${caseUrl}/GetCaseById/`;

// *url for caseTranaction
export const caseTransactionUrl: string = `${serverUrl}/CaseTransaction`;

// ? API endpoint to get the totalDonations, it is a GET request that returns an Int32 (Number)
export const getTotalDonationsUrl: string = `${caseTransactionUrl}/GetTotalDonations`;

// *url for causBank
export const causeBankUrl: string = `${serverUrl}/CauseBank`;

// ? API endpoint to get total causes, it is a GET request
export const getAllCausesUrl: string = `${causeBankUrl}/GetAllCauses`;

// ? API endpoint to get cause by id, it is a GET request http://localhost:5036/CauseBank/GetCauseById/2
export const getCauseByIdUrl: string = `${causeBankUrl}/GetCauseById/`;
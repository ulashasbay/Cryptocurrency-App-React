import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "60bb687815msh159730a3aa26290p1cb0f9jsnb90e1239062a",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";
// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     timePeriod: "24h",
//     "tiers[0]": "1",
//     orderBy: "marketCap",
//     orderDirection: "desc",
//     limit: "50",
//     offset: "0",
//   },
//   headers: {
//     "X-RapidAPI-Key": "60bb687815msh159730a3aa26290p1cb0f9jsnb90e1239062a",
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//   },
// };

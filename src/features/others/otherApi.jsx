import axios from "axios";
import { othersSlice } from "./otherSlice";

const othersApi = othersSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCountries: builder.query({
      queryFn: async () => {
        try {
          const response = await axios.get(
            "https://restcountries.com/v3.1/all"
          );
          return {
            data: response.data,
          };
        } catch (error) {
          return {
            error: {
              data: {
                error: { message: error.message, status: error.code || 400 },
              },
            },
          };
        }
      },
    }),
  }),
});

export const { useGetCountriesQuery } = othersApi;

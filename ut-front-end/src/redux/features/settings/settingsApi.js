import { apiSlice } from "@/redux/api/apiSlice";

export const settingsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublicSettings: builder.query({
      query: () => `/api/settings/public`,
      providesTags: ["Settings"],
    }),
    getSettings: builder.query({
      query: () => `/api/settings`,
      providesTags: ["Settings"],
    }),
    updateSettings: builder.mutation({
      query: (data) => ({
        url: "/api/settings",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Settings"],
    }),
  }),
});

export const {
  useGetPublicSettingsQuery,
  useGetSettingsQuery,
  useUpdateSettingsMutation,
} = settingsApi;
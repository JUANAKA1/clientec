import { authFetch, ENV } from "@/utils";


export class Address {
    async create(data, userId) {
      try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`;
  
        const params = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              ...data,
              user: userId,
            },
          }),
        };

        // console.log({
        //     data: {
        //         ...data,
        //         user: userId,
        //       },
        // });
        
        const response = await authFetch(url, params);
        const result = await response.json();
        
        if (response.status !== 201) throw result;
        return result;
  
        // if (!response.ok) {
        //   const errorResult = await response.json();
        //   throw errorResult;
        // }
        // return await response.json();
        
      } catch (error) {
        throw error;
      }
    }
  }
  
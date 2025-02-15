import { authFetch, ENV } from "@/utils";


export class Wishlist {
    async check(userId, gameId) {
        try {
            const filterUser = `filters[user][documentId][$eq][0]=${userId}`;
            const filterGame = `filters[game][documentId][$eq][1]=${gameId}`;
            const urlParams = `${filterUser}&${filterGame}`
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`;

            const response = await authFetch(url);
            const result = await response.json();
            
            if (response.status!== 200) throw result;

            if (result.data.length === 0) {
                return false;
            }
            
            return result.data[0];
        } catch (error) {
            throw error;
        }
    }
}
import { Token } from "@/api";

export async function authFetch(url, params) {
    const tokenCtrl = new Token();
    const token = tokenCtrl.getToken();

    if (!token) {
        // TODO: logout
    } else {
        if (tokenCtrl.hasExpired(token)) {
            // TODO: logout
        } else {
            const paramsTemp = {
                ...params,
                headers: {
                   ...params?.headers,
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                return await fetch(url, paramsTemp);
            } catch (error) {
                return error
            }
        }
    }

}
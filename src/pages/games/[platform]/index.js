import { Platform } from "@/api";
export { default } from "./platform";

export async function getServerSideProps(context) {
    const { query, params } = context;
    const { page =1 } = query;
    const { platform } = params;

    const platformCtrl = new Platform();
    const responsePlatform = await platformCtrl.getBySlug(platform);

    return {
        props: {
            platform: responsePlatform,
            games: null,
            pagination: null
        },
    };

}
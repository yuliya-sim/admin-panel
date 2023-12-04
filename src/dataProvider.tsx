import { fetchUtils } from "react-admin";

import raStrapiRest from "ra-strapi-rest";

const strapiApiUrl = import.meta.env.VITE_SIMPLE_REST_URL;

const httpClient = (url: string, options: any = {}) => {
    options.headers = options.headers || new Headers({ Accept: "application/json" });
    return fetchUtils.fetchJson(url, options);
};

export default raStrapiRest(strapiApiUrl, httpClient);

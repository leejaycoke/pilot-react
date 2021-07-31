export default class UrlParamService {
    getAccessTokenOrThrow(): string {
        const accessToken = new URL(location.href).searchParams.get("accessToken");
        if (accessToken == null) throw "accessToken was null";
        return accessToken;
    }
}

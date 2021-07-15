function saveAccessTokenToCookie(value: string): void {
  document.cookie = `devbadak_auth=${value}`;
}

function getAccessTokenFromCookie(): string {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)devbadak_auth\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function deleteAccessTokenFromCookie(): void {
  document.cookie = "devbadak_auth=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export {
  saveAccessTokenToCookie,
  getAccessTokenFromCookie,
  deleteAccessTokenFromCookie,
};

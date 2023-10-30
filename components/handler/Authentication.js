import axios from "axios";

function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

export default async function authentication() {
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");

  if (accessToken) {
    try {
      const response = await axios.get("/api/check-token", {
        params: { accessToken },
      });
      return response.data.isLoggedIn;
    } catch (error) {
      console.error("Failed to verify token", error);
      return false; // 에러 발생 시 false 반환
    }
  } else if (refreshToken) {
    try {
      await axios.get("/api/refresh-token", { params: { refreshToken } });
      window.location.reload();
    } catch (error) {
      console.error("Failed to refresh token", error);
      return false; // 에러 발생 시 false 반환
    }
  }

  return false; // accessToken 및 refreshToken이 없는 경우에도 false 반환
}

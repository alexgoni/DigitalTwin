import jwt from "jsonwebtoken";

export default async function refreshToken(req, res) {
  const { refreshToken } = req.query;

  try {
    const refreshKey = `${process.env.NEXT_PUBLIC_REFRESH_KEY}`;
    const decodedRefresh = await jwt.verify(refreshToken, refreshKey);

    // Refresh Token이 유효한 경우, 새로운 Access Token 발급
    const accessKey = `${process.env.NEXT_PUBLIC_ACCESS_KEY}`;
    const newAccessToken = jwt.sign(
      { email: decodedRefresh.email },
      accessKey,
      { expiresIn: "30m" },
    );

    // 새로운 Access Token을 클라이언트에게 쿠키로 발행
    res.setHeader(
      "Set-Cookie",
      `accessToken=${newAccessToken}; Path=/; Max-Age=1800`,
    );
    res.status(200).json({});
  } catch (error) {
    console.error("Failed to verify Refresh Token:", error);
    res.status(401).json({ error: "Failed to verify Refresh Token" });
  }
}

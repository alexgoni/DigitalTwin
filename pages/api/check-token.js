import jwt from "jsonwebtoken";

export default function checkToken(req, res) {
  const { accessToken } = req.query;

  // JWT 검증
  try {
    const secretKey = `${process.env.NEXT_PUBLIC_ACCESS_KEY}`;
    const decode = jwt.verify(accessToken, secretKey);
    // 유효한 JWT인 경우
    res.status(200).json({ isLoggedIn: true, decode });
  } catch (error) {
    // 유효하지 않은 JWT인 경우
    console.error("Failed to verify JWT:", error);
    res.status(401).json({ isLoggedIn: false });
  }
}

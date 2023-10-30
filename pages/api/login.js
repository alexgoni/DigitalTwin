import jwt from "jsonwebtoken";
import connection from "@/components/db/userDB";

export default async function login(req, res) {
  try {
    if (req.method !== "POST") {
      res.status(405).end();
      return;
    }

    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;

    const result = await new Promise((resolve, reject) => {
      connection.query(query, [email, password], (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });

    if (result.length === 0) {
      res.status(401).json({ message: "Invalid email or password." });
      return;
    }

    const user = result[0];

    // Access Token 생성
    const accessKey = `${process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET}`;
    const accessToken = jwt.sign({ email: user.username }, accessKey, {
      expiresIn: "30m",
    });

    // Refresh Token 생성
    const refreshKey = `${process.env.NEXT_PUBLIC_REFRESH_TOKEN_SECRET}`;
    const refreshToken = jwt.sign({ email: user.username }, refreshKey, {
      expiresIn: "14d",
    });

    // 로그인 성공 시 토큰 발행
    res.setHeader("Set-Cookie", [
      `accessToken=${accessToken}; Path=/; Max-Age=1800`,
      `refreshToken=${refreshToken}; Path=/; Max-Age=1209600`,
    ]);
    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    console.error("Failed to log in:", error);
    res.status(500).json({ message: "Failed to log in. Please try again." });
  }
}

import connection from "@/components/db/dataDB";

function checkEnv(currentEnv) {
  const message = [];

  if (currentEnv["온도"] > 30) message.push("온도가 너무 높습니다.");
  else if (currentEnv["온도"] < 20) message.push("온도가 너무 낮습니다.");

  if (currentEnv["습도"] > 40) message.push("습도가 너무 높습니다.");
  else if (currentEnv["습도"] < 20) message.push("습도가 너무 낮습니다.");

  if (currentEnv["조도"] > 90) message.push("조도가 너무 높습니다.");
  else if (currentEnv["조도"] < 60) message.push("조도가 너무 낮습니다.");

  if (currentEnv["co2"] > 1000) message.push("이산화탄소가 너무 많습니다.");

  if (currentEnv["배액ec"] > 7) message.push("배액ec가 너무 높습니다.");
  else if (currentEnv["배액ec"] < 5) message.push("배액ec가 너무 낮습니다.");

  if (currentEnv["배액ph"] > 7) message.push("배액ph가 너무 높습니다.");
  else if (currentEnv["배액ph"] < 5) message.push("배액ph가 너무 낮습니다.");

  if (currentEnv["지온"] > 3) message.push("지온이 너무 높습니다.");

  return message;
}

export default async function handler(req, res) {
  const modelIndex = req.query.modelIndex;
  const query = "SELECT * FROM editedketi";

  try {
    const results = await new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    const currentEnv = results[modelIndex];
    const messages = checkEnv(currentEnv);

    if (messages.length > 0) {
      const time = results[modelIndex]["수집시간"];
      res.status(200).json({ messages, time });
    } else {
      res.status(200).json({ messages });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}

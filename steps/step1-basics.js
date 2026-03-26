/**
 * =============================================
 * Step 1: Express 기초와 첫 라우트
 * =============================================
 *
 * 실행 방법: node steps/step1-basics.js
 * 테스트: 브라우저에서 http://localhost:8080 접속
 *
 * TODO를 찾아서 코드를 완성하세요!
 */

import express from "express";

// TODO 1: Express 앱을 생성하세요
// const app = ???
// const PORT = 8080;
const app = express();
const PORT = 8080;

// ─────────────────────────────────────────────
// TODO 2: 기본 라우트 만들기
// ─────────────────────────────────────────────
// GET / 요청이 오면 'Hello Express!'를 응답하세요
// 힌트: app.get(경로, (req, res) => { ... })
app.get("/", function (req, res) {
  res.send("Hellow Express!");
});

// ─────────────────────────────────────────────
// TODO 3: 여러 라우트 만들기
// ─────────────────────────────────────────────
// GET /users  → '사용자 목록' 응답
// GET /products → '상품 목록' 응답
// GET /about → 'About 페이지' 응답
app.get("/user", function (req, res) {
  res.send("사용자 목록");
});

app.get("/products", function (req, res) {
  res.send("상품 목록");
});

app.get("/about", function (req, res) {
  res.send("About 페이지");
});

// ─────────────────────────────────────────────
// TODO 4: JSON 응답 보내기
// ─────────────────────────────────────────────
// GET /api/users 요청이 오면 아래 데이터를 JSON으로 응답하세요
// 힌트: res.json()을 사용합니다
//
app.get("/api/users", function (req, res) {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  res.json(users);
});
// 데이터:
// [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' }
// ]

// ─────────────────────────────────────────────
// TODO 5: 상태 코드와 함께 응답하기
// ─────────────────────────────────────────────
// 힌트: res.status(코드).json({ ... })
//
// GET /success → 200 상태코드 + { message: 'Success' }
// GET /error   → 404 상태코드 + { message: 'Not Found' }
app.get("/success", function (req, res) {
  res.status(200).json({ message: "success" });
});

app.get("/error", function (req, res) {
  res.status(404).json({ message: "Not Found" });
});

// ─────────────────────────────────────────────
// TODO 6: 서버 시작하기
// ─────────────────────────────────────────────
// 힌트: app.listen(포트, 콜백함수)
// 콜백에서 console.log로 서버 시작 메시지를 출력하세요
app.listen(PORT, function () {
  console.log("서버시작");
  console.log(`  http://localhost:${PORT}/`);
  console.log(`  http://localhost:${PORT}/users`);
  console.log(`  http://localhost:${PORT}/products`);
  console.log(`  http://localhost:${PORT}/about`);
  console.log(`  http://localhost:${PORT}/api/users`);
  console.log(`  http://localhost:${PORT}/success`);
  console.log(`  http://localhost:${PORT}/error`);
});

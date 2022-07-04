// importのようなもの
const express =　require("express");
const app = express();
const PORT = 5000;
// josnを使うことを明示的に示す
app.use(express.json());

// サーバをexpress()のlistenで起動できる
app.listen(PORT, () => console.log("サーバが起動しました"));

// ルートディレクトリからget
app.get("/", (req,res) => {
  // ルートディレクトリをリクエストされたら何をレスポンスするか（何をクライアントに表示するか）を指定している
  res.send("勉強中");
});

const customers =[
  {title:"田中", id:1},
  {title:"斉藤", id:2},
  {title:"鈴木", id:3},
  {title:"加藤", id:4},
  {title:"柏", id:5}
]

// localhost:5000/api/customersからget
app.get("/api/customers", (req,res) => {
  // 配列はsendの中にそのまま格納すれば表示できる
  res.send(customers);
});

app.post("/api/customers", (req,res) => {
const customer ={
  // bodyとはpostmanでJOSNで記述する際の名前
  // JSON形式のpostですよと明示的にexpressのフレームワークで示す必要がある
  title:req.body.title,
  id:customers.length +1
};
customers.push(customer);
res.send(customer);
});

// 顧客情報の更新（putもpatchでもどちらでも更新できる）
// セミコロンを打つとIDという属性を任意に決めることができる（クエリパラメータ？）
app.put("/api/customers/:id", (req,res) => {
  // req.params.idはパラメータで受け取ったIDを指している（stringで受け取るっぽい？）
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  customer.title = req.body.title;
  res.send(customer);
})

app.delete("/api/customers/:id", (req,res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  const index = customers.indexOf(customer);
  // indexの番号1つだけ削除する
  customers.splice(index,1);
   res.send(customer);
})
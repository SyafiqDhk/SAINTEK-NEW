import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes";
import lectureRoutes from "./routes/lectureRoutes";
import cashflowRoutes from "./routes/cashflowRoutes";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/admin", adminRoutes);
app.use("/api/lectures", lectureRoutes);
app.use("/api/cashflows", cashflowRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

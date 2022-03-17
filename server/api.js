import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
	res.json({ message: "API: Hello, world! " });
});

router.get("/login", (_, res) => {
	res.json({ message: "API: Login!" });
});

export default router;

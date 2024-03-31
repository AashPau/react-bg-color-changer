import React, { useState, useEffect } from "react";

export const ColorChanger = () => {
	const [type, setType] = useState("hex");
	const [color, setColor] = useState("#ffffff");

	const RandomHex = (length) => {
		return Math.floor(Math.random() * length);
	};
	const handleRandomHexColor = () => {
		const hex = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		let hexColor = "#";
		for (let i = 0; i < 6; i++) {
			hexColor += hex[RandomHex(hex.length)];
		}
		setColor(hexColor);
	};

	const handleRandomRbgColor = () => {
		const r = RandomHex(256);
		const g = RandomHex(256);
		const b = RandomHex(256);
		setColor(`rgb(${r},${g},${b})`);
	};
	useEffect(() => {
		if (type === "rgb") handleRandomRbgColor();
		else handleRandomHexColor();
	}, [type]);

	return (
		<div style={{ width: "100vw", height: "100vh", background: color }}>
			<button onClick={() => setType("rgb")}>RGB color</button>
			<button onClick={() => setType("hex")}>Hex Color</button>
			<button
				onClick={type === "hex" ? handleRandomHexColor : handleRandomRbgColor}
			>
				Generate Random color
			</button>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "#fff",
					fontSize: "60px",
					marginTop: "50px",
					flexDirection: "column",
				}}
			>
				<h3>{type === "rgb" ? "RGB Color" : "Hex Color"}</h3>
				<h1>{color}</h1>
			</div>
		</div>
	);
};

import React from "react";

export default function AuthRootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="bg-green-600 h-screen">{children}</div>;
}

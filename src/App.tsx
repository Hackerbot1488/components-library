import React from "react";
import { Main } from "./layout/Main/Main";
import { Navigation } from "./layout/Navigation/Navigation";

export const App: React.FC = ({ children }) => {
	return (
		<>
			<Navigation key="navigation" />
			<Main key="main">{children}</Main>
		</>
	);
};

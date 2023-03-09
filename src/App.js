import React from "react";
import {AppCtxProvider} from "./Context";
import Counter from "./Counter";

function App() {
	return (
		<AppCtxProvider>
			<Counter/>
		</AppCtxProvider>
	);
}

export default App;

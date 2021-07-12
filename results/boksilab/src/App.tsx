import { Suspense } from 'react';
import { SnackbarProvider } from 'notistack';
import Canvas from './components/Canvas';
import { CircularProgress } from '@material-ui/core';

function App() {
	return (
		<SnackbarProvider
			maxSnack={2}
			autoHideDuration={2500}
			preventDuplicate={true}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
		>
			<div className="App">
				<Suspense fallback={<CircularProgress />}>
					<Canvas />
				</Suspense>
			</div>
		</SnackbarProvider>
	);
}

export default App;

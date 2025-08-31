import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import PortifolioContextProvider from './context/PortifolioContext';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <PortifolioContextProvider>
                    <Router />
                </PortifolioContextProvider>
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
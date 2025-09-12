import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import PortifolioContextProvider, { PortifolioContext } from './context/PortifolioContext';
import { useContext } from 'react';

const AppContent = () => {
    const { currentTheme } = useContext(PortifolioContext);
    
    return (
        <ThemeProvider theme={currentTheme}>
            <Router />
            <GlobalStyle />
        </ThemeProvider>
    );
};

function App() {
    return (
        <BrowserRouter>
            <PortifolioContextProvider>
                <AppContent />
            </PortifolioContextProvider>
        </BrowserRouter>
    );
}

export default App;

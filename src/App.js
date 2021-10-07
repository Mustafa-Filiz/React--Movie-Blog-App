import './App.css';
import AuthContextProvider from './contexts/AuthContext';
import SearchContextProvider from './contexts/SearchContext';
import AppRouter from './router/AppRouter';

function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <SearchContextProvider>
                    <AppRouter />
                </SearchContextProvider>
            </AuthContextProvider>
        </div>
    );
}

export default App;

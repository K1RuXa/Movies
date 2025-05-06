import React, { Component } from 'react';
import MovieList from './MovieList';
import './app.css';
import MoviePaginationAPI from './MoviePaginationAPI';


const ThemeCreate = React.createContext('light');
const ThemeProvider = ThemeCreate.Provider;
const ThemeConsumer = ThemeCreate.Consumer;

const ThemeButtonsvg = () => (
    <ThemeConsumer>
        {({ theme, toggleTheme }) => {
            const imgSrc = theme === 'light' ? '/sunny.png' : '/moon.png';
            return (
                <button onClick={toggleTheme} className="theme-button">
                    <img src={imgSrc} alt="Theme" />
                </button>
            );
        }}
    </ThemeConsumer>
);

const Content = () => (
    <div className="Content">
        <ThemeButtonsvg />
    </div>
);

class App extends Component {
    constructor() {
        super();
        this.state = {
            theme: 'light'
        };
    }

    toggleTheme = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        });
    };

    render() {
        const contextValue = {
            theme: this.state.theme,
            toggleTheme: this.toggleTheme
        };

        return (
            <ThemeProvider value={contextValue}>
                <div className={this.state.theme === 'light' ? 'light-theme' : 'dark-theme'}>
                    <Content />
                    <div>
                        <div className="header">
                            <h1>Favourite Movies</h1>
                        </div>
                        <MovieList>
                        </MovieList>
                        <MoviePaginationAPI />
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;

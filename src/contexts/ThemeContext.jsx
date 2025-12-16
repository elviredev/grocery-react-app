import { createContext, useContext, useEffect, useState } from "react";

// Create a new context for theme management
const ThemeContext = createContext()


// Custom hook to consume the ThemeContext
export const useThemeContext = () => useContext(ThemeContext)

export const ThemeContextProvider = ({children}) => {

    const getInitialTheme = () => {
        // Check if a the is saved in localStorage
        const savedTheme = localStorage.getItem("theme")
        if(savedTheme) {
            return savedTheme
        } else {
            // Othewrise, check the user's system preference for dark mode
            const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            return userPrefersDark ? "dark" : "light"
        }

    }

    // State to store the current theme  
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    // Provide the theme and toggleTheme function to child component
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
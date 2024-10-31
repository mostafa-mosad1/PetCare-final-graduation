import SectionOne from "./components/ui/Hero/SectionOne"
import SectionTwo from "./components/ui/Hero/SectionTwo"
import { ThemeProvider } from "./components/ui/Hero/theme-provider"


function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <SectionOne/>
    <SectionTwo/>
    </ThemeProvider>
    
    </>
  )
}

export default App

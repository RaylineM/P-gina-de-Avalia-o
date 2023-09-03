import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Avaliacao from "./pages/Avaliacao"
import Configuracoes from "./pages/Configuracao";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/configuracoes" element={<Configuracoes/>}></Route>
             <Route path="/avaliacao" element={<Avaliacao/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes
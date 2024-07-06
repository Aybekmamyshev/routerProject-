import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./component/Layout";
import HomePage from "./pages/homePage";
import HeroPage from "./pages/HeroPage";
import Location from "./pages/LocationPage";
import LocationPage from "./pages/LocationPage";
import EpisodePage from "./pages/EpisodePage";
import HeroSingle from "./pages/HeroSingle";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/hero'} element={<HeroPage/>}/>
                    <Route path={'/hero/:id/'} element={<HeroSingle/>}/>
                    <Route path={'/location'} element={<LocationPage/>}/>
                    <Route path={'/episode'} element={<EpisodePage/>}/>
                </Route>
            </>
        )
    )
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;

import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Loading } from './components/Loading';

// Export load functions for prefetching
export const loadHome = () => import('./pages/Home').then(module => ({ default: module.Home }));
export const loadCatalog = () => import('./pages/Catalog').then(module => ({ default: module.Catalog }));
export const loadAbout = () => import('./pages/About').then(module => ({ default: module.About }));
export const loadWeekAtAGlance = () => import('./pages/WeekAtAGlance').then(module => ({ default: module.WeekAtAGlance }));
export const loadRegistration = () => import('./pages/Registration').then(module => ({ default: module.Registration }));
export const loadTravelAndHotels = () => import('./pages/TravelAndHotels').then(module => ({ default: module.TravelAndHotels }));
export const loadSessionDetail = () => import('./pages/SessionDetail').then(module => ({ default: module.SessionDetail }));
export const loadSponsors = () => import('./pages/Sponsors').then(module => ({ default: module.Sponsors }));
export const loadWhyAttendDetail = () => import('./pages/WhyAttendDetail').then(module => ({ default: module.WhyAttendDetail }));

const Home = lazy(loadHome);
const Catalog = lazy(loadCatalog);
const About = lazy(loadAbout);
const WeekAtAGlance = lazy(loadWeekAtAGlance);
const Registration = lazy(loadRegistration);
const TravelAndHotels = lazy(loadTravelAndHotels);
const SessionDetail = lazy(loadSessionDetail);
const Sponsors = lazy(loadSponsors);
const WhyAttendDetail = lazy(loadWhyAttendDetail);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-attend/:slug" element={<WhyAttendDetail />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:sessionId" element={<SessionDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<WeekAtAGlance />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/travel" element={<TravelAndHotels />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;

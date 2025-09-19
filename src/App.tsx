import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TestimonialsPage from "./pages/testimonial/testimonialPage";
import Layout from "./layout/layout";
import DesignPage from "./pages/design/designPage";
import BuyPage from "./pages/buy/BuyPage";
import SellPage from "./pages/sell/sellPage";
import AboutPage from "./pages/about/about";
import ScrollToTop from "./util/scroll-top/ScrollTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

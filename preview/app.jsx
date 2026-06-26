function App() {
  return (
    <main className="bg-black">
      <Hero />
      <Capabilities />
      <BentoFeatures />
      <Workflow />
      <PricingMatrix />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

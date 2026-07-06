import React, { useState } from "react";
import logo from "./assets/logo.jpeg";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    slot: "",
  });
const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerSlot, setDrawerSlot] = useState("");
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // REPLACE THIS URL with the exact Web App URL you copied from your Google Apps Script deployment
    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyM7oS6_jJl-7CySyBjNec9AoLrTmXgMZkpITNEGI77O__SyKgug3QV95ekoKWgjwxc/exec";

    try {
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors", // Required to bypass browser CORS checks with Google Scripts
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Registration Successful! Your seat details have been saved.");
      
      // Resets the form inputs cleanly after successful entry submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        slot: "",
      });
      
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-950 selection:bg-[#ff6600] selection:text-white antialiased relative overflow-hidden flex flex-col pb-24">
      
      {/* PREMIUM DYNAMIC MESH BACKGROUND ANIMATION */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-60"></div>
        <div className="absolute -top-48 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[#ff6600]/15 via-orange-300/10 to-transparent rounded-full blur-3xl animate-[spin_20s_infinite_linear] opacity-80"></div>
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-orange-200/30 via-[#ff6600]/10 to-transparent rounded-full blur-3xl animate-[pulse_8s_infinite_alternate]"></div>
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-gradient-to-r from-orange-100/40 to-transparent rounded-full blur-3xl animate-[bounce_10s_infinite_alternate]"></div>
      </div>

      {/* PERMANENTLY FIXED HEADER - Stays visible always */}
      {/* PERMANENTLY FIXED HEADER - Stays visible always */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          
          {/* Main Brand Container - Scaled high to let the square logo expand naturally */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="DNDC Logo" 
              className="h-20 w-auto object-contain object-left block transition-transform hover:scale-105"
            />
          </div>

          <button
            className="bg-[#ff6600] hover:bg-[#e05a00] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm shadow-orange-500/20 transition-all active:scale-95 hover:shadow-md flex-shrink-0"
            onClick={() => setIsDrawerOpen(true)}
          >
            Request Callback
          </button>
        </div>
      </header>

      {/* HERO MAIN BODY - pt-20 added to clear the fixed header block height */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 flex flex-col space-y-4 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 text-[#ff6600] px-3 py-1 rounded-full text-[11px] font-bold w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff6600] animate-ping"></span>
              <span>Admissions Open 2026</span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-950 tracking-tight leading-tight">
              Become a <span className="text-[#ff6600] relative inline-block">Data Analyst<span className="absolute left-0 bottom-0.5 w-full h-1 bg-[#ff6600]/20 rounded"></span></span>
              <br />
              with Generative AI at DNDC
            </h1>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xl">
              Master Excel, SQL, Power BI, Python and Generative AI through
              live classes, hands-on projects and expert mentorship.
            </p>

            {/* Feature Points */}
            <div className="space-y-2.5 pt-1">
              {[
                "Live Classroom Training with Industry Experts.",
                "Real-world Projects to build your portfolio.",
                "Interview Preparation and Placement Assistance."
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 group">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-[#ff6600] transition-colors duration-200">
                    <div className="w-2 h-2 rounded-full bg-[#ff6600] group-hover:bg-white transition-colors duration-200"></div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm font-medium">{feature}</p>
                </div>
              ))}
            </div>

            {/* Tools Section */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Tools You'll Learn</h3>
              <div className="flex flex-wrap gap-1.5">
                {["Excel", "SQL", "Power BI", "Python", "Gen AI", "Jupyter"].map((tool) => (
                  <span 
                    key={tool} 
                    className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-800 px-2.5 py-1 rounded-md text-[11px] font-bold hover:border-[#ff6600] hover:text-[#ff6600] transition-all duration-150 shadow-sm cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div 
            id="registration-form" 
            className="lg:col-span-5 bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-lg shadow-gray-200/50 p-5 sm:p-6 order-1 lg:order-2 scroll-mt-24 group hover:border-orange-200/80 transition-all duration-300"
          >
            <div className="text-center lg:text-left mb-4">
              <h2 className="text-lg sm:text-xl font-black text-gray-950">
                Book Your <span className="text-[#ff6600]">FREE Demo</span>
              </h2>
              <div className="w-12 h-0.5 bg-[#ff6600] mx-auto lg:mx-0 mt-1 rounded-full transition-all duration-300 group-hover:w-20"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ff6600] focus:bg-white transition-all shadow-inner"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ff6600] focus:bg-white transition-all shadow-inner"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ff6600] focus:bg-white transition-all shadow-inner"
                />
              </div>

              <div className="pt-1">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Choose Time Slot
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: "11-1", label: "11AM - 1PM" },
                    { id: "1-4", label: "1PM - 4PM" },
                    { id: "4-7", label: "4PM - 7PM" }
                  ].map((slot) => (
                    <label 
                      key={slot.id}
                      className={`flex items-center justify-center space-x-2 border rounded-lg p-2.5 cursor-pointer transition-all ${
                        formData.slot === slot.id 
                          ? "border-[#ff6600] bg-orange-50/40 font-bold text-[#ff6600] shadow-sm" 
                          : "border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium"
                      }`}
                    >
                      <input
                        type="radio"
                        name="slot"
                        value={slot.id}
                        checked={formData.slot === slot.id}
                        onChange={handleChange}
                        className="h-3.5 w-3.5 text-[#ff6600] border-gray-300 focus:ring-[#ff6600] accent-[#ff6600]"
                      />
                      <span className="text-[11px] whitespace-nowrap">{slot.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#ff6600] hover:bg-[#e05a00] text-white font-black text-xs py-3.5 rounded-lg shadow-md shadow-orange-500/10 transition-all active:scale-[0.99] mt-2 uppercase tracking-wider"
              >
                Register Now
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* STATS & AI FUTURE SECTION */}
      <section className="bg-slate-50/60 border-t border-b border-gray-100 py-8 lg:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          {/* STATS STRIP CONTAINER */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-b border-gray-200 pb-8 mb-8">
            <div className="px-2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#ff6600]">6 months</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">Intensive job bootcamp</p>
            </div>
            <div className="px-2 border-l border-gray-200">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-950">12 LPA</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">Highest CTC in placements</p>
            </div>
            <div className="px-2 border-l border-gray-200">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-950">68% avg hike</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">After program completion</p>
            </div>
            <div className="px-2 border-l border-gray-200">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#ff6600]">2000+</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">Students enrolled</p>
            </div>
          </div>

          {/* AI VALUE PROPOSITION GRID CONTAINER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-950 tracking-tight leading-tight">
                AI is redefining the <span className="text-[#ff6600] relative inline-block">future of jobs<span className="absolute left-0 bottom-0.5 w-full h-1 bg-[#ff6600]/20 rounded"></span></span>
              </h2>
              
              <div className="space-y-4 pt-1">
                <div className="flex items-start space-x-3 border-b border-gray-100 pb-3">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#ff6600]"></div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-950">1.4M+ Global Data Analytics Openings</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-1">
                      Cross-industry demand for professionals equipped to break down big data streams using predictive modern tooling solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-b border-gray-100 pb-3">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#ff6600]"></div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-950">75% of Analytics Workflows Mandate AI</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-1">
                      Enterprise tech infrastructures are systematically shifting parameters, demanding engineers adept at deploying Generative AI frameworks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#ff6600]"></div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-950">40% Core Pipeline Task Automation</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-1">
                      Routine preprocessing, automated documentation, and code script extraction are being offloaded onto machine environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-5 bg-white border border-gray-100 rounded-xl p-5 sm:p-6 shadow-lg shadow-gray-200/50 relative group hover:border-orange-200/80 transition-all duration-300">
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">AI skills demand in job market</span>
                <h3 className="text-lg sm:text-xl font-black text-gray-950 mt-1">
                  80% increase <span className="text-[#ff6600]">in 3 years</span>
                </h3>
                <div className="w-12 h-0.5 bg-[#ff6600] mt-1 rounded-full transition-all duration-300 group-hover:w-20"></div>
              </div>

              {/* Chart */}
              <div className="relative h-40 flex items-end justify-between gap-4 pt-4 border-b border-gray-200/80 px-2">
                <div className="absolute inset-x-0 top-0 border-t border-dashed border-gray-100"></div>
                <div className="absolute inset-x-0 top-1/3 border-t border-dashed border-gray-100"></div>
                <div className="absolute inset-x-0 top-2/3 border-t border-dashed border-gray-100"></div>

                <div className="flex flex-col items-center flex-1 z-10 group/bar">
                  <div className="w-full bg-gray-50/80 border border-gray-200 rounded-t-lg h-12 transition-all duration-300 relative flex justify-center">
                    <span className="absolute -top-6 text-[10px] font-bold text-gray-400 opacity-0 group-hover/bar:opacity-100 transition-opacity">25%</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 mt-2">2024</span>
                </div>

                <div className="flex flex-col items-center flex-1 z-10 group/bar">
                  <div className="w-full bg-gray-100/80 border border-gray-200 rounded-t-lg h-24 transition-all duration-300 relative flex justify-center">
                    <span className="absolute -top-6 text-[10px] font-bold text-gray-400 opacity-0 group-hover/bar:opacity-100 transition-opacity">50%</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 mt-2">2025</span>
                </div>

                <div className="flex flex-col items-center flex-1 z-10 group/bar">
                  <div className="w-full bg-gradient-to-t from-[#ff6600] to-orange-400 rounded-t-lg h-32 transition-all duration-500 shadow-md shadow-orange-500/20 relative flex justify-center">
                    <span className="absolute -top-6 text-[11px] font-black text-[#ff6600]">80%</span>
                  </div>
                  <span className="text-[10px] font-black text-gray-900 mt-2">2026</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INDUSTRY INSIGHTS VIDEO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/50 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 w-full aspect-video rounded-xl overflow-hidden bg-gray-950 shadow-md relative">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/cX5NQFTCX-k"
              title="Importance of AI/ML in Data Analytics"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 text-[#ff6600] px-3 py-1 rounded-full text-[11px] font-bold w-fit shadow-sm">
              <span>INDUSTRY INSIGHTS</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-950 tracking-tight leading-tight">
              Mastering modern fundamentals is key to becoming a successful <span className="text-[#ff6600] relative inline-block">AI/ML Engineer<span className="absolute left-0 bottom-0.5 w-full h-1 bg-[#ff6600]/20 rounded"></span></span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Discover why static traditional data processing models are no longer sufficient. Industry experts break down why deploying modern automation architectures, prompt tuning, and scalable pipelines give engineers a massive structural advantage in competitive job markets.
            </p>
            <button 
              onClick={() => document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" })}
              className="text-xs sm:text-sm font-black text-[#ff6600] uppercase tracking-wider text-left hover:text-[#e05a00] flex items-center pt-2 group focus:outline-none"
            >
              Claim Your Free Spot Now 
              <span className="transform translate-x-1 group-hover:translate-x-2 transition-transform duration-150 ml-1">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6-MONTH CURRICULUM ROADMAP */}
      <section className="bg-slate-50/60 border-t border-b border-gray-100 py-8 lg:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-xl mx-auto mb-8 lg:mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Learning Path</span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-950 tracking-tight mt-1">
              Your 6-Month <span className="text-[#ff6600]">Curriculum Roadmap</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#ff6600] mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-lg shadow-gray-200/40 relative group hover:border-orange-200 transition-all duration-200">
              <span className="absolute top-4 right-4 text-3xl font-black text-orange-100 group-hover:text-orange-200 transition-colors">01</span>
              <div className="bg-orange-50 text-[#ff6600] font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded w-fit mb-3">
                Months 1 - 2
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-950">Data Core Fundamentals</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2">
                Master advanced Excel operations, foundational SQL indexing, querying databases, and structured data clearing mechanics.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-lg shadow-gray-200/40 relative group hover:border-orange-200 transition-all duration-200">
              <span className="absolute top-4 right-4 text-3xl font-black text-orange-100 group-hover:text-orange-200 transition-colors">02</span>
              <div className="bg-orange-50 text-[#ff6600] font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded w-fit mb-3">
                Months 3 - 4
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-950">Programming & BI Modeling</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2">
                Dive deep into Python logic infrastructure, data cleaning arrays, and building complex vector dashboards inside Power BI.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-lg shadow-gray-200/40 relative group hover:border-orange-200 transition-all duration-200">
              <span className="absolute top-4 right-4 text-3xl font-black text-orange-100 group-hover:text-orange-200 transition-colors">03</span>
              <div className="bg-orange-50 text-[#ff6600] font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded w-fit mb-3">
                Months 5 - 6
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-950">Gen AI & Capstone Portfolios</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2">
                Deploy advanced LLM prompts, automate analytical jobs via APIs, and complete end-to-end placement placement pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 relative z-10 w-full">
        <div className="text-center max-w-xl mx-auto mb-8 lg:mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Eligibility Framework</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-950 tracking-tight mt-1">
            Is This Bootcamp <span className="text-[#ff6600]">Right For You?</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#ff6600] mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { title: "College Freshers", desc: "Final year students or recent graduates looking to launch a fast-growing career path straight away." },
            { title: "Tech Professionals", desc: "Software engineers or system admins searching for modern AI upskilling paths to shift focus areas." },
            { title: "Non-Tech Switchers", desc: "Professionals from sales, HR, or finance sectors wanting a smooth path into core data systems." },
            { title: "Business Analysts", desc: "Domain analysts looking to integrate programmatic automation into manual spreadsheets and work streams." }
          ].map((profile, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-xl hover:shadow-gray-200/50 hover:border-orange-200 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-xs font-black text-[#ff6600] mb-3 group-hover:bg-[#ff6600] group-hover:text-white transition-all duration-200">
                  0{index + 1}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-950 tracking-tight">{profile.title}</h3>
                <p className="text-gray-600 text-xs mt-2 leading-relaxed">{profile.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-orange-50/50 border border-orange-100 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-gray-950">Not sure if your academic background matches analytics prerequisites?</h4>
            <p className="text-gray-500 text-xs mt-0.5">Connect with our primary placement program advisors for instant feedback.</p>
          </div>
          <button
            onClick={() => document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#ff6600] hover:bg-[#e05a00] text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-lg shadow-sm shadow-orange-500/10 active:scale-95 transition-all whitespace-nowrap"
          >
            Claim Your Free Spot Now →
          </button>
        </div>
      </section>

    {/* URGENCY BATCH STATUS ALERT GRID - Updated Counter Configuration per image_cf79a7.png */}
      <section className="bg-slate-50/60 border-t border-b border-gray-100 py-8 lg:py-14 relative overflow-hidden">
        {/* Syncing identical background dot structure layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-60"></div>
          <div className="absolute top-1/4 -right-24 w-80 h-80 bg-gradient-to-tr from-[#ff6600]/10 to-transparent rounded-full blur-2xl animate-[pulse_6s_infinite_alternate]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="bg-white border-2 border-orange-100 rounded-2xl p-6 sm:p-8 shadow-xl shadow-orange-500/[0.02] max-w-4xl mx-auto">
            
            {/* Header with Live Signal Alert */}
            <div className="flex flex-col items-center text-center space-y-2 mb-6">
              <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-100 text-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                <span>Live Batch Status Update</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight">
                Strict Limit: <span className="text-[#ff6600]">30 Seats Only</span> Per Cohort
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm max-w-lg leading-relaxed">
                To maintain premium classroom mentorship standards and provide dedicated 1-on-1 career assistance pipelines, we accept precisely 30 applicants.
              </p>
            </div>

            {/* Dynamic Urgency Progress Indicator Block */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-100 mb-6">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                <span>Registration Allocation Progress</span>
                <span className="text-red-600 font-black animate-pulse">5 / 30 SEATS CLAIMED</span>
              </div>
              
              {/* Core Visual Progress Bar Tracker - Scaled to 16.6% matching 5/30 ratio */}
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden p-0.5 border border-gray-100">
                <div className="bg-gradient-to-r from-[#ff6600] to-orange-400 h-full rounded-full transition-all duration-1000 w-[16.6%] shadow-inner"></div>
              </div>
              
              <div className="flex justify-between items-center mt-2.5 text-[10px] sm:text-xs font-semibold text-gray-400">
                <span>Batch Launch Impending</span>
                <span className="text-gray-900 font-bold">Hurry up 25 Spots Remaining</span>
              </div>
            </div>

            {/* Urgent Target Matrix Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-gray-100 pb-6 mb-6">
              <div className="flex items-center space-x-3 bg-white p-3.5 border border-gray-100 rounded-xl">
                <span className="text-base">⏳</span>
                <div>
                  <h4 className="text-xs font-bold text-gray-950">Application Freeze</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Closes as soon as seat 30 locks in</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white p-3.5 border border-gray-100 rounded-xl">
                <span className="text-base">👔</span>
                <div>
                  <h4 className="text-xs font-bold text-gray-950">Placement Pipeline</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Direct referral routes for early birds</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white p-3.5 border border-gray-100 rounded-xl">
                <span className="text-base">🎯</span>
                <div>
                  <h4 className="text-xs font-bold text-gray-950">1-on-1 Review Syncs</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Guaranteed line review entry spots</p>
                </div>
              </div>
            </div>

            {/* Instant Conversion Redirection Trigger */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-xs font-medium text-center sm:text-left">
                Don't wait until next semester. Secure temporary demo slot access code instantly.
              </p>
              
              <button
                onClick={() => document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto bg-[#ff6600] hover:bg-[#e05a00] text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md shadow-orange-500/20 active:scale-[0.98] transition-all whitespace-nowrap"
              >
                Lock In Your Spot Now →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* PREMIUM PINNED STICKY FOOTER - Properly aligned and spaced layout matching image_c1625b.png */}
      <footer className="fixed bottom-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-t shadow-[0_-4px_20px_rgba(0,0,0,0.15)] backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Left Area Content Info block wrapper */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700/50 flex items-center justify-center text-[#ff6600] shadow-inner flex-shrink-0">
              <svg className="w-5 h-5 animate-[pulse_1.5s_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <div className="leading-tight">
              <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Limited offer</span>
              <p className="text-xs sm:text-sm font-black text-gray-100 tracking-tight mt-0.5">
                Webinar • <span className="line-through text-gray-500 font-medium decoration-1">₹499</span> <span className="text-green-500 font-black ml-1">FREE</span>
              </p>
            </div>
          </div>

          {/* Right Area Custom CTA trigger */}
          <button
            onClick={() => document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#ff6600] hover:bg-[#e05a00] text-white font-black text-xs sm:text-sm px-6 sm:px-8 py-3 rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all uppercase tracking-wider whitespace-nowrap"
          >
            Book a seat
          </button>

        </div>
      </footer>

      <div 
        className={`fixed inset-0 z-[100] transition-all duration-300 ease-in-out ${
          isDrawerOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
        }`}
      >
        {/* Dark Backdrop Overlay */}
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isDrawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsDrawerOpen(false)}
        />

        {/* Sliding Panel Content */}
        <div 
          className={`absolute top-0 inset-x-0 bg-white border-b-2 border-orange-100 shadow-2xl p-6 transition-transform duration-300 ease-in-out z-10 ${
            isDrawerOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="max-w-md mx-auto relative pt-4">
            {/* Close Cross Trigger */}
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-0 right-0 text-gray-400 hover:text-gray-600 font-bold text-lg"
            >
              ✕
            </button>

            <div className="text-center mb-4">
              <h3 className="text-base sm:text-lg font-black text-gray-950">Select Preferred Callback Window</h3>
              <p className="text-gray-500 text-xs mt-0.5">Enter your details for our team to reach out.</p>
            </div>

            {/* NEW: Explicit Full Name Input Field Inside Drawer */}
            <div className="mb-3">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                Your Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-2.5 text-xs font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ff6600] focus:bg-white transition-all shadow-inner"
              />
            </div>

            {/* Time Slot Radio Group */}
            <div className="grid grid-cols-1 gap-2 mb-4">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">
                Choose Time Slot
              </label>
              {[
                { id: "11:00 AM - 1:00 PM", label: "11:00 AM - 1:00 PM" },
                { id: "1:00 PM - 4:00 PM", label: "1:00 PM - 4:00 PM" },
                { id: "4:00 PM - 7:00 PM", label: "4:00 PM - 7:00 PM" }
              ].map((slot) => (
                <label 
                  key={slot.id}
                  className={`flex items-center space-x-3 border-2 rounded-xl px-4 py-3 cursor-pointer transition-all ${
                    drawerSlot === slot.id 
                      ? "border-[#ff6600] bg-orange-50/40 font-bold text-[#ff6600]" 
                      : "border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="drawerSlot"
                    value={slot.id}
                    checked={drawerSlot === slot.id}
                    onChange={(e) => setDrawerSlot(e.target.value)}
                    className="h-4 w-4 text-[#ff6600] border-gray-300 focus:ring-[#ff6600] accent-[#ff6600]"
                  />
                  <span className="text-xs sm:text-sm">{slot.label}</span>
                </label>
              ))}
            </div>

            {/* Submit Action Redirection Trigger */}
           {/* Submit Action Redirection Trigger */}
            <button
              disabled={!drawerSlot || !formData.name.trim()}
              onClick={() => {
                const studentName = formData.name.trim();
                const textMessage = `hey ${studentName} this side, i wana know about this course please call me during this time ${drawerSlot}`;
                const encodedMsg = encodeURIComponent(textMessage);
                const targetNumber = "917879645092"; 

                // Detects if the user is on mobile or desktop to choose the fastest direct link
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                
                let whatsappUrl;
                if (isMobile) {
                  // Mobile deep link protocol to force open the native mobile app directly
                  whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedMsg}`;
                } else {
                  // Direct desktop URL targeting web instance to completely skip the intermediate landing tab
                  whatsappUrl = `https://web.whatsapp.com/send?phone=${targetNumber}&text=${encodedMsg}`;
                }
                
                window.open(whatsappUrl, "_blank");
                setIsDrawerOpen(false);
              }}
              className={`w-full text-white font-black text-xs py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-md ${
                drawerSlot && formData.name.trim()
                  ? "bg-[#ff6600] hover:bg-[#e05a00] shadow-orange-500/20 active:scale-[0.99]" 
                  : "bg-gray-300 cursor-not-allowed shadow-none"
              }`}
            >
              Send Request →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
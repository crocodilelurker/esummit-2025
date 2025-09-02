"use client";
import BlockHole_Model from "../_components/Spline";
import React, { Suspense, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import {
  Sparkles,
  Zap,
  Target,
  Play,
  ArrowRight,
  Network,
  Bot,
  MessageSquare,
  Lightbulb,
  Award,
} from "lucide-react";
import Link from "next/link";
import Aurora from "../_components/Aurora";

// Simplified and refined Navbar component
const Navbar = () => (
  <header className="py-4 md:py-6 relative z-50">
    {" "}
    {/* Use z-50 or higher for navbar */}
    <nav className="container mx-auto px-6 flex justify-between items-center">
      <Link
        href="/"
        className="ml-[-2rem] text-2xl font-bold text-white tracking-tight"
      >
        IIIT Bhagalpur
      </Link>
      <div className="flex items-center space-x-4 md:space-x-6">
        <Link
          href="/features"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 hidden md:inline"
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 hidden md:inline"
        >
          Pricing
        </Link>
        <Link href="/login">
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white/10 text-gray-200 hover:bg-white/20 transition-all duration-300">
            Log In
          </button>
        </Link>
      </div>
    </nav>
  </header>
);

const Page = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    { icon: Network, text: "Build" },
    { icon: Zap, text: "Lead" },
    { icon: Target, text: "Innovative" },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black font-sans antialiased text-white overflow-hidden">
      <div className="absolute inset-0 z-10 bg-black opacity-40 pointer-events-none" />
      <div className="absolute inset-0 z-0">
        {/* REMOVED Link from here */}
        <Aurora
          colorStops={["#B8F1FF", "#00F5D4", "#3ABEFF", "#4ECDC4"]}
          blend={0.75}
          amplitude={0.6}
          speed={0.7}
        />
      </div>
      <div className="relative z-20 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center py-10 lg:py-0 px-6 md:px-8 lg:px-12">
          <div className="max-w-[1300px] w-full grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white mr-2" />
                <span className="text-sm font-medium text-gray-200">
                  “Dream. Dare. Disrupt”
                </span>
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
                    E-Summit
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  <span className="text-3xl font-bold text-white block mb-2">
                    The E-Summit of IIIT Bhagalpur
                  </span>
                  Bringing together innovators, startups, industry leaders, and
                  students
                  <span className="font-semibold text-gray-200">
                    {" "}
                    to celebrate ideas, innovation, and impact
                  </span>
                  ,
                  <span className="font-semibold text-gray-200">
                    {" "}
                    real-time feedback
                  </span>
                  , and
                  <span className="font-semibold text-gray-200">
                    {" "}
                    personalized coaching
                  </span>
                  .
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <feature.icon className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-gray-200">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/signup">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8,
                      type: "spring",
                      stiffness: 300,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center justify-center px-6 py-3 text-xl font-bold rounded-xl bg-white text-gray-900 shadow-md hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 w-full"
                  >
                    Passes
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <motion.button
                  onClick={() =>
                    window.open(
                      "#", // Replace with your actual link
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.9,
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="group flex items-center justify-center px-6 py-3 rounded-xl bg-gray-700 backdrop-blur-sm border border-gray-600 text-white font-medium text-lg hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Click On Black Hole
                </motion.button>
              </div>
            </motion.div>

            {/* WRAP THE LINK AROUND THE MODEL'S CONTAINER */}
            <Link href="/events" className="w-full h-full">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="scale-90 flex justify-center overflow-hidden  lg:justify-end w-full relative h-[70vh] lg:h-[70vh] rounded-3xl cursor-pointer hover:scale-100 transition-all duration-300 pointer-events-none"
              >
                <BlockHole_Model />
              </motion.div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;

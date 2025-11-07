"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaHandshake,
  FaRocket,
  FaUsers,
  FaAward,
  FaStar,
  FaShieldAlt,
  FaCoins,
  FaArrowRight,
  FaCrown,
  FaGem,
} from "react-icons/fa";

export default function AgentHero() {
  const benefits = [
    {
      icon: FaCoins,
      title: "Lucrative Commissions",
      description:
        "Competitive earning potential with unlimited growth opportunities",
    },
    {
      icon: FaRocket,
      title: "Rapid Growth",
      description: "Access to premium resources and cutting-edge technology",
    },
    {
      icon: FaShieldAlt,
      title: "Full Support",
      description:
        "Comprehensive training and 24/7 backup from our expert team",
    },
  ];

  const stats = [
    { number: "100+", label: "Successful Partners", icon: FaUsers },
    { number: "4.9/5", label: "Partner Satisfaction", icon: FaStar },
    { number: "24/7", label: "Dedicated Support", icon: FaAward },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/partner.avif"
          alt="Successful Partnership Network"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/60 to-blue-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/80" />
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Icons */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#E23D51] opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 3 === 0 ? (
              <FaGem className="text-2xl" />
            ) : i % 3 === 1 ? (
              <FaCrown className="text-2xl" />
            ) : (
              <FaStar className="text-2xl" />
            )}
          </motion.div>
        ))}

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#E23D51] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Premium Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E23D51] to-pink-600 rounded-full px-6 py-3 mb-8 shadow-2xl"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <FaCrown className="text-white text-lg" />
                </motion.div>
                <span className="text-white font-bold text-lg">
                  Elite Partnership Program
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Join Our
                <motion.span
                  className="block bg-gradient-to-r from-[#E23D51] via-yellow-400 to-[#E23D51] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Success Network
                </motion.span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                className="text-2xl sm:text-3xl text-white/90 mb-8 leading-relaxed font-light"
              >
                Build Your Legacy with Our
                <span className="text-[#E23D51] font-semibold">
                  {" "}
                  Most Trusted{" "}
                </span>
                Recruitment Partnership Program
              </motion.p>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-xl text-white/80 mb-12 leading-relaxed font-normal"
              >
                Unlock unprecedented earning potential while transforming
                careers and businesses. Join a community of elite professionals
                who are redefining recruitment excellence across India.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 mb-12"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(226, 61, 81, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/become-agent"
                    className="bg-gradient-to-r from-[#E23D51] to-pink-600 text-white px-12 py-5 rounded-full font-bold text-xl flex items-center gap-4 group transition-all duration-300"
                  >
                    Start Your Journey
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center group"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 1 + index * 0.1,
                      }}
                      className="text-2xl lg:text-3xl font-bold text-[#E23D51] mb-2 flex items-center justify-center gap-2"
                    >
                      <stat.icon className="text-lg opacity-80" />
                      {stat.number}
                    </motion.div>
                    <div className="text-white/80 text-xs font-semibold group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Benefits Cards */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={floatingCardVariants}
                  whileHover="hover"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 group hover:bg-white/15 transition-all duration-500 cursor-pointer relative overflow-hidden"
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#E23D51]/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  />

                  <div className="flex items-start gap-6 relative z-10">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-[#E23D51] to-pink-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-2xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <benefit.icon className="text-white text-3xl" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#E23D51] group-hover:to-yellow-400 group-hover:bg-clip-text transition-all duration-500">
                        {benefit.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed text-lg">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.div>
              ))}

              {/* Partnership Badge */}
              <motion.div
                variants={floatingCardVariants}
                className="bg-gradient-to-r from-[#E23D51] to-pink-600 rounded-3xl p-6 text-center relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full bg-gradient-conic from-transparent via-white/30 to-transparent" />
                </motion.div>

                <div className="relative z-10">
                  <FaHandshake className="text-white text-4xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Ready to Partner With Us?
                  </h3>
                  <p className="text-white/90 text-lg">
                    Limited spots available for elite partners
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

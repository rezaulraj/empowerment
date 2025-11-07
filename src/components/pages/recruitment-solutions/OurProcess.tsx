"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaSearch,
  FaHandshake,
  FaUsers,
  FaRocket,
  FaStar,
  FaHeart,
} from "react-icons/fa";

export default function OurProcess() {
  const processSteps = [
    {
      step: "01",
      icon: FaSearch,
      title: "Understand Your Needs",
      description:
        "We take time to deeply understand your company culture, team dynamics, and specific requirements to find the perfect fit",
      delay: 0.1,
    },
    {
      step: "02",
      icon: FaUsers,
      title: "Talent Discovery",
      description:
        "Our experienced team actively seeks out exceptional candidates who match your values and technical requirements",
      delay: 0.2,
    },
    {
      step: "03",
      icon: FaHandshake,
      title: "Meaningful Connections",
      description:
        "We facilitate genuine conversations that help both parties discover mutual fit and shared vision for success",
      delay: 0.3,
    },
    {
      step: "04",
      icon: FaHeart,
      title: "Perfect Matching",
      description:
        "Carefully evaluating skills, personality, and aspirations to create lasting and successful partnerships",
      delay: 0.4,
    },
    {
      step: "05",
      icon: FaRocket,
      title: "Smooth Onboarding",
      description:
        "Ensuring a seamless transition and setting up for immediate impact and long-term growth within your team",
      delay: 0.5,
    },
    {
      step: "06",
      icon: FaStar,
      title: "Ongoing Success",
      description:
        "We maintain relationships to celebrate achievements and support continuous career development and satisfaction",
      delay: 0.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="grid grid-cols-10 gap-8">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="flex justify-center items-center"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Image
                src="/logo/round.png"
                alt="Background Pattern"
                width={30}
                height={30}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-6 py-3 mb-6 border border-gray-200"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-2 h-2 bg-[#E23D51] rounded-full"></div>
            <span className="text-gray-700 font-medium">
              Our Proven Approach
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How We Create
            <span className="text-[#E23D51] block">
              Successful Partnerships
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our carefully crafted process ensures we find not just qualified
            candidates, but the right people who will thrive in your environment
            and contribute to your success.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.step}
              className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#E23D51] transition-all duration-300 group overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ delay: step.delay }}
            >
              <motion.div
                className="absolute inset-0 opacity-[0.03] flex items-center justify-center"
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/logo/round.png"
                  alt="Card Background Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </motion.div>
              <motion.div
                className="absolute top-2 left-2 w-8 h-8 opacity-20"
                animate={{
                  x: [0, 20, 0, -20, 0],
                  y: [0, -15, 0, 15, 0],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/logo/round.png"
                  alt="Moving Logo"
                  width={32}
                  height={32}
                />
              </motion.div>

              <motion.div
                className="absolute top-2 right-2 w-6 h-6 opacity-25"
                animate={{
                  x: [0, -25, 0, 25, 0],
                  y: [0, -10, 0, 10, 0],
                  rotate: [0, -90, -180, -270, -360],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Image
                  src="/logo/round.png"
                  alt="Moving Logo"
                  width={24}
                  height={24}
                />
              </motion.div>

              <motion.div
                className="absolute bottom-2 left-2 w-7 h-7 opacity-15"
                animate={{
                  x: [0, 15, 0, -15, 0],
                  y: [0, 20, 0, -20, 0],
                  rotate: [0, 180, 360, 180, 0],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <Image
                  src="/logo/round.png"
                  alt="Moving Logo"
                  width={28}
                  height={28}
                />
              </motion.div>

              <motion.div
                className="absolute bottom-2 right-2 w-5 h-5 opacity-30"
                animate={{
                  x: [0, -18, 0, 18, 0],
                  y: [0, 12, 0, -12, 0],
                  rotate: [0, -180, -360, -180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <Image
                  src="/logo/round.png"
                  alt="Moving Logo"
                  width={20}
                  height={20}
                />
              </motion.div>
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-transparent overflow-hidden z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-13 h-13"
                >
                  <Image
                    src="/logo/round.png"
                    alt="Step Logo"
                    width={60}
                    height={60}
                    className="text-white"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E23D51] group-hover:text-white transition-all duration-300 relative z-10"
                whileHover={{ scale: 1.1 }}
              >
                <step.icon className="text-2xl text-[#E23D51] group-hover:text-white transition-colors duration-300" />
              </motion.div>

              <div className="mb-4 relative z-10">
                <span className="text-sm font-semibold text-[#E23D51] uppercase tracking-wide">
                  Step {step.step}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 group-hover:text-[#E23D51] transition-colors duration-300">
                  {step.title}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                {step.description}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#E23D51] group-hover:w-full transition-all duration-500 z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { businessConfig } from "@/config/business";
import { Calendar, Phone, User, Mail, MapPin, Wrench, MessageSquare, Upload, Check, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const EstimateForm: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    serviceNeeded: "",
    describeIssue: "",
    preferredDate: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Validation
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.address.trim()) newErrors.address = "Property address is required";
    if (!formData.serviceNeeded) newErrors.serviceNeeded = "Please select a service";
    if (!formData.preferredDate) newErrors.preferredDate = "Please choose a date";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit Simulation
    setFormSubmitted(true);
  };

  return (
    <section id="estimate" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute right-0 bottom-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-10 top-10 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-4">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full w-fit mx-auto">
            Get A Quote
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Request an Upfront Estimate
          </h2>
          <p className="text-slate-500 text-base">
            Fill out the form below to share details of your plumbing issue, upload a photo, and pick a preferred inspection date.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-xl overflow-hidden p-8 sm:p-12">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name" className="text-xs font-extrabold text-slate-800 flex items-center space-x-1">
                      <User size={12} className="text-primary" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-50/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        errors.name ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-primary"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center space-x-1">
                        <AlertCircle size={10} /> <span>{errors.name}</span>
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-extrabold text-slate-800 flex items-center space-x-1">
                      <Phone size={12} className="text-primary" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-50/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        errors.phone ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-primary"
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center space-x-1">
                        <AlertCircle size={10} /> <span>{errors.phone}</span>
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="email" className="text-xs font-extrabold text-slate-800 flex items-center space-x-1">
                      <Mail size={12} className="text-primary" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-50/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        errors.email ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-primary"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center space-x-1">
                        <AlertCircle size={10} /> <span>{errors.email}</span>
                      </span>
                    )}
                  </div>

                  {/* Address */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="address" className="text-xs font-extrabold text-slate-800 flex items-center space-x-1">
                      <MapPin size={12} className="text-primary" />
                      <span>Property Address *</span>
                    </label>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      placeholder="Street, City, Zip"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-50/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        errors.address ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-primary"
                      }`}
                    />
                    {errors.address && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center space-x-1">
                        <AlertCircle size={10} /> <span>{errors.address}</span>
                      </span>
                    )}
                  </div>

                  {/* Service Needed Select - Dynamic! */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="serviceNeeded" className="text-xs font-extrabold text-slate-800 flex items-center space-x-1">
                      <Wrench size={12} className="text-primary" />
                      <span>Service Needed *</span>
                    </label>
                    <select
                      id="serviceNeeded"
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-50/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none ${
                        errors.serviceNeeded ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-primary"
                      }`}
                    >
                      <option value="">Select Service Area...</option>
                      {businessConfig.services.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                    </select>
                    {errors.serviceNeeded && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center space-x-1">
                        <AlertCircle size={10} /> <span>{errors.serviceNeeded}</span>
                      </span>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="preferredDate" className="text-xs font-extrabold text-slate-800 flex items-center space-x-1">
                      <Calendar size={12} className="text-primary" />
                      <span>Preferred Inspection Date *</span>
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-50/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        errors.preferredDate ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-primary"
                      }`}
                    />
                    {errors.preferredDate && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center space-x-1">
                        <AlertCircle size={10} /> <span>{errors.preferredDate}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Describe Issue */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="describeIssue" className="text-xs font-extrabold text-slate-800 flex items-center space-x-1">
                    <MessageSquare size={12} className="text-primary" />
                    <span>Describe the Plumbing Issue</span>
                  </label>
                  <textarea
                    id="describeIssue"
                    name="describeIssue"
                    rows={4}
                    placeholder="Provide context about what is leaking, clogged, or broken. (e.g. Toilet is leaking around the base, water pooling on floor.)"
                    value={formData.describeIssue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Upload Photo Dropzone Mock */}
                <div className="flex flex-col space-y-2">
                  <span className="text-xs font-extrabold text-slate-800 flex items-center space-x-1">
                    <Upload size={12} className="text-primary" />
                    <span>Attach Photo (Optional)</span>
                  </span>
                  <div className="relative border-2 border-dashed border-slate-200 hover:border-primary/40 transition-colors rounded-2xl p-6 text-center cursor-pointer bg-slate-50/20">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center space-y-1">
                      <Upload className="text-slate-400 mb-2" size={24} />
                      <span className="text-xs font-bold text-slate-700">
                        {attachedFile ? attachedFile.name : "Choose a file or drag it here"}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        JPEG, PNG up to 10MB
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-accent-dark hover:bg-accent-dark-hover text-white font-bold py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center space-x-2 text-base cursor-pointer"
                  >
                    <span>Submit Estimate Request</span>
                  </button>
                  <span className="text-[10px] text-slate-400 text-center block mt-3 font-semibold">
                    🔒 Your details are protected and never shared. We reply within 60 minutes.
                  </span>
                </div>

              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center space-y-6"
              >
                {/* Success Indicator Circle */}
                <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 flex items-center justify-center shadow-md">
                  <Check size={32} strokeWidth={3} />
                </div>

                {/* Text */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-2xl font-black text-slate-900">
                    Request Received Successfully!
                  </h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. We have logged your request for <strong>{formData.serviceNeeded}</strong> on <strong>{formData.preferredDate}</strong>.
                  </p>
                </div>

                {/* Action card */}
                <div className="w-full max-w-md p-6 bg-slate-50 rounded-2xl border border-slate-200/60 text-left flex flex-col space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400 font-bold">CONTACT NUMBER</span>
                    <span className="text-slate-700 font-extrabold">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400 font-bold">PROPERTY ADDRESS</span>
                    <span className="text-slate-700 font-extrabold line-clamp-1">{formData.address}</span>
                  </div>
                  <div className="flex justify-between text-xs border-t border-slate-200/50 pt-3">
                    <span className="text-slate-400 font-bold">DISPATCH RESPONSE</span>
                    <span className="text-primary font-extrabold">Under 60 Minutes</span>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <span className="text-xs text-slate-400 font-semibold">
                    Need immediate assistance? Call us right away:
                  </span>
                  <a
                    href={`tel:${businessConfig.phoneRaw}`}
                    className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-xl shadow-md"
                  >
                    <Phone size={16} fill="currentColor" />
                    <span>Call {businessConfig.phone}</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        address: "",
                        serviceNeeded: "",
                        describeIssue: "",
                        preferredDate: "",
                      });
                      setAttachedFile(null);
                    }}
                    className="text-xs text-slate-400 hover:text-slate-600 underline font-semibold mt-4"
                  >
                    Submit another request
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

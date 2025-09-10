"use client"

import { useState } from "react"
import Image from 'next/image';

// Demo disease detection data
const DEMO_DISEASES = [
  {
    name: "Powdery Mildew",
    severity: "High",
    description: "White powdery spots appear on leaves, stems, and flowers, causing reduced photosynthesis and plant growth.",
    recommendations: [
      "Apply sulfur-based fungicides or neem oil. Ensure good air circulation and avoid overhead irrigation."
    ],
  },
  {
    name: "Basal Cell Carcinoma",
    confidence: 92.1,
    severity: "Medium",
    description: "The most common type of skin cancer.",
    recommendations: [
      "Schedule appointment with dermatologist",
      "Use sunscreen regularly",
      "Perform regular self-examinations",
    ],
  },
  {
    name: "Leaf Rust",
    severity: "Low",
    description: "Small orange to reddish pustules develop on leaves, reducing photosynthetic capacity and yield.",
    recommendations: [
      "Use resistant varieties and apply appropriate fungicides like propiconazole.",
      "Remove infected plant debris."
    ],
  },
  {
    name: "Bacterial Blight",
    severity: "High",
    description: "Water-soaked lesions appear on leaves and stems, later turning brown and spreading rapidly under humid conditions.",
    recommendations: [
      "Use certified disease-free seeds, avoid excessive nitrogen fertilizers, and apply copper-based bactericides."
    ],
  },
  {
    name: "Downy Mildew",
    description: "Yellow patches on the upper surface of leaves, with a fuzzy growth on the underside, leading to wilting and poor yield.",
    severity: "Medium",
    recommendations: [
      "Ensure good field drainage, avoid overcrowding, and apply fungicides like mancozeb or metalaxyl."
    ]
  },
  {
    name: "Stem Borer",
    description: "Larvae bore into stems, causing wilting and breakage, ultimately reducing plant productivity.",
    severity: "High",
    recommendations: [
      "Use pheromone traps, apply insecticides at early stages, and practice crop rotation."
    ]
  }
]

export default function ImageRecognitionPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState(null)
  const [isDragOver, setIsDragOver] = useState(false)

  const handleImageUpload = (file) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
      setAnalysisResult(null)
    }
  }

  const handleFileInput = (e) => {
    const file = e.target.files[0]
    handleImageUpload(file)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    const file = e.dataTransfer.files[0]
    handleImageUpload(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const analyzeImage = () => {
    if (!selectedImage) return

    setIsAnalyzing(true)

    // Simulate AI analysis with demo data
    setTimeout(() => {
      const randomResult = DEMO_DISEASES[Math.floor(Math.random() * DEMO_DISEASES.length)]
      setAnalysisResult(randomResult)
      setIsAnalyzing(false)
    }, 2000)
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "High":
        return "text-red-600 bg-red-50"
      case "Medium":
        return "text-yellow-600 bg-yellow-50"
      case "Low":
        return "text-green-600 bg-green-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const resetAnalysis = () => {
    setSelectedImage(null)
    setImagePreview(null)
    setAnalysisResult(null)
    setIsAnalyzing(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Disease Detection</h1>
          <p className="text-gray-600">
            Upload an image to analyze potential diseases and receive recommendations. 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Image</h2>

            {!imagePreview ? (
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragOver ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-gray-400"
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <div className="mb-4">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg text-gray-600 mb-2">Drag and drop your image here</p>
                <p className="text-sm text-gray-500 mb-4">or</p>
                <label className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer transition-colors">
                  <span>Choose File</span>
                  <input type="file" className="hidden" accept="image/*" onChange={handleFileInput} />
                </label>
                <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 10MB</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={imagePreview || "/placeholder.svg"}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg border border-gray-200"
                  />
                  <button
                    onClick={resetAnalysis}
                    className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <button
                  onClick={analyzeImage}
                  disabled={isAnalyzing}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {isAnalyzing ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    "Analyze Image"
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Analysis Results</h2>

            {!analysisResult && !isAnalyzing && (
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-gray-500">Upload and analyze an image to see results</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="text-center py-12">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
                </div>
                <p className="text-gray-500 mt-4">Analyzing image...</p>
              </div>
            )}

            {analysisResult && (
              <div className="space-y-6">
                {/* Disease Name and Confidence */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{analysisResult.name}</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-2">Severity:</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(analysisResult.severity)}`}
                      >
                        {analysisResult.severity}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-700">{analysisResult.description}</p>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recommendations</h4>
                  <ul className="space-y-2">
                    {analysisResult.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

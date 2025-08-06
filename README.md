# 🚀 Smart Resume Builder AI

A full-stack AI-powered resume builder that leverages advanced AI models to create professional, ATS-optimized resumes with smart suggestions, live preview, and PDF export capabilities.

## ✨ Features

### 🧠 AI-Powered Intelligence
- **Smart Content Suggestions**: AI-powered enhancement for job descriptions and bullet points
- **Professional Language Optimization**: Automatically improves wording for maximum impact
- **ATS Optimization**: Ensures resumes pass Applicant Tracking Systems
- **Industry-Specific Templates**: Tailored suggestions based on job roles

### 🎨 Modern UI/UX
- **Live Preview**: Real-time resume preview as you type
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Interactive Forms**: User-friendly input fields with validation

### 📄 Export & Customization
- **PDF Export**: High-quality PDF generation with professional formatting
- **Multiple Templates**: Choose from various modern resume templates
- **Custom Styling**: Adjust colors, fonts, and layouts
- **One-Click Download**: Instant resume download in PDF format

### 🔧 Technical Features
- **Progressive Web App**: Installable on devices for offline access
- **Auto-Save**: Never lose your progress with automatic saving
- **Data Validation**: Real-time form validation and error handling
- **Fast Performance**: Optimized for speed with lazy loading

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite for fast development
- **React Router** for seamless navigation
- **Tailwind CSS** for responsive styling
- **Axios** for API communication
- **React Hook Form** for form management

### Backend
- **Node.js** with Express.js
- **Azure AI Services** for GPT-4 integration
- **GitHub Models API** for AI suggestions
- **CORS** enabled for cross-origin requests
- **Environment variables** for secure configuration

### Development Tools
- **ESLint** for code quality
- **Vite** for fast HMR and builds
- **Nodemon** for auto-restart during development

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- GitHub account (for AI features)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/smart-resume-builder-ai.git
cd smart-resume-builder-ai
```

2. **Install dependencies**
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. **Environment Setup**
Create a `.env` file in the backend directory:
```env
GITHUB_TOKEN=your_github_token_here
PORT=5000
```

4. **Start Development Servers**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

5. **Access the Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 🎯 Usage Guide

### Creating Your Resume

1. **Start Your Journey**
   - Visit the landing page at `/`
   - Click "Get Started" to begin

2. **Fill Your Information**
   - Navigate to `/customizeResume`
   - Fill in personal details, experience, education, and skills
   - Watch the live preview update in real-time

3. **Get AI Suggestions**
   - Click the "AI Suggest" button on any field
   - Get professionally enhanced content suggestions
   - Accept or modify suggestions as needed

4. **Preview & Download**
   - Go to `/buildResume` for final preview
   - Choose your preferred template
   - Download as PDF with one click

### Tips for Best Results

- **Be Specific**: Provide detailed information for better AI suggestions
- **Use Keywords**: Include relevant industry keywords for ATS optimization
- **Quantify Achievements**: Add numbers and metrics where possible
- **Review Carefully**: Always proofread before final download

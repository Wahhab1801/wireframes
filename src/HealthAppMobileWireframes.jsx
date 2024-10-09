import React from "react";
import {
  Home,
  PlusCircle,
  User,
  Settings,
  Bell,
  ArrowLeft,
  Lock,
  Camera,
  FileText,
  Pill,
  Activity,
  Heart,
  Calculator,
  MessageCircle,
} from "lucide-react";

const MobileFrame = ({ children, title }) => (
  <div className="border-4 border-gray-800 rounded-3xl p-4 mb-8 w-72 h-[640px] bg-white overflow-y-auto relative">
    <div className="bg-white py-2 px-4 mb-4 flex justify-between items-center border-b border-gray-200">
      <ArrowLeft size={20} />
      <h2 className="text-lg font-bold">{title}</h2>
      <Bell size={20} />
    </div>
    <div className="pb-16">{children}</div>
    <AppBar />
  </div>
);

const Input = ({ placeholder }) => (
  <input
    className="border border-gray-300 p-2 mb-3 w-full rounded-lg text-sm text-gray-700 placeholder-gray-400"
    placeholder={placeholder}
  />
);

const Button = ({ children, primary, icon: IconComponent }) => (
  <button
    className={`w-full py-2 px-4 rounded-lg mb-3 flex items-center justify-center text-sm ${
      primary ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
    }`}
  >
    {IconComponent && <IconComponent size={16} className="mr-2" />}
    {children}
  </button>
);

const AppBar = () => (
  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
    <Home size={20} />
    <PlusCircle size={20} />
    <User size={20} />
    <Settings size={20} />
  </div>
);

export default function MobileAppWireframes() {
  return (
    <div className="flex flex-wrap gap-8 justify-center w-1/2">
      <MobileFrame title="Login">
        <Input placeholder="Email/Username" />
        <Input placeholder="Password" />
        <Button primary icon={Lock}>
          Login
        </Button>
        <div className="text-center text-sm text-blue-500 mb-3">
          Forgot Password?
        </div>
      </MobileFrame>

      <MobileFrame title="2FA Verification">
        <div className="text-center mb-4 text-sm">
          Enter the verification code sent to your phone
        </div>
        <div className="flex justify-between mb-4">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              className="w-8 h-10 border border-gray-300 rounded text-center"
              maxLength="1"
            />
          ))}
        </div>
        <Button primary>Verify</Button>
        <div className="text-center text-sm text-blue-500">Resend Code</div>
      </MobileFrame>

      <MobileFrame title="Personal Profile">
        <Input placeholder="Full Name" />
        <Input placeholder="Address" />
        <Input placeholder="Allergies" />
        <Input placeholder="Vaccination Status" />
        <select className="border border-gray-300 p-2 mb-3 w-full rounded-lg text-sm text-gray-700">
          <option>Smoking Status</option>
          <option>Non-smoker</option>
          <option>Former smoker</option>
          <option>Current smoker</option>
        </select>
        <Button primary>Save Profile</Button>
      </MobileFrame>

      <MobileFrame title="Blood Test Entry">
        <Input placeholder="Test Name" />
        <Input placeholder="Result" />
        <Input placeholder="Units" />
        <Input placeholder="Date" />
        <Button icon={Camera}>Upload PDF</Button>
        <Button primary icon={FileText}>
          Save & Analyze
        </Button>
      </MobileFrame>

      <MobileFrame title="Medication Entry">
        <Input placeholder="Medication Name" />
        <Input placeholder="Dosage" />
        <Input placeholder="Frequency" />
        <Input placeholder="Start Date" />
        <Button primary icon={Pill}>
          Add Medication
        </Button>
        <Button icon={Activity}>Check Interactions</Button>
      </MobileFrame>

      <MobileFrame title="Medical Conditions">
        <Input placeholder="Search Conditions" />
        <div className="mb-3 p-2 bg-gray-100 rounded text-sm">Hypertension</div>
        <div className="mb-3 p-2 bg-gray-100 rounded text-sm">
          Type 2 Diabetes
        </div>
        <Button primary icon={Heart}>
          Add Condition
        </Button>
      </MobileFrame>

      <MobileFrame title="Calculator Tool">
        <div className="mb-2 font-bold text-sm">eGFR Calculator</div>
        <Input placeholder="Weight (kg)" />
        <Input placeholder="Serum Creatinine" />
        <Input placeholder="Age" />
        <select className="border border-gray-300 p-2 mb-3 w-full rounded-lg text-sm text-gray-700">
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <Button primary icon={Calculator}>
          Calculate
        </Button>
      </MobileFrame>

      <MobileFrame title="Dashboard">
        <div className="mb-3 bg-gray-100 p-2 rounded text-sm">
          <h3 className="font-bold">Recent Blood Tests</h3>
          <div>Hemoglobin: 14.2 g/dL</div>
          <div>Glucose: 95 mg/dL</div>
        </div>
        <div className="mb-3 bg-gray-100 p-2 rounded text-sm">
          <h3 className="font-bold">Current Medications</h3>
          <div>Lisinopril 10mg daily</div>
          <div>Metformin 500mg twice daily</div>
        </div>
        <Button icon={PlusCircle}>Add New Data</Button>
        <Button primary icon={FileText}>
          View Analysis
        </Button>
      </MobileFrame>

      <MobileFrame title="Recommendations">
        <div className="mb-2 font-bold text-sm">Based on your recent data:</div>
        <div className="mb-2 p-2 bg-gray-100 rounded text-sm">
          1. Improve diet - increase vegetable intake
        </div>
        <div className="mb-2 p-2 bg-gray-100 rounded text-sm">
          2. Increase exercise to 30 mins daily
        </div>
        <div className="mb-2 p-2 bg-gray-100 rounded text-sm">
          3. Schedule a follow-up blood test in 3 months
        </div>
        <Button primary icon={FileText}>
          Learn More
        </Button>
        <Button icon={MessageCircle}>Book Appointment</Button>
      </MobileFrame>

      <MobileFrame title="E-Consult">
        <div className="mb-4 text-center text-sm">
          24/7 Access to Healthcare Professionals
        </div>
        <Button primary icon={MessageCircle}>
          Start Consultation
        </Button>
        <div className="mt-3 text-center text-xs text-gray-500">
          Subscription Required
        </div>
        <div className="mt-3 bg-gray-100 p-2 rounded text-sm">
          <div className="font-bold">Benefits:</div>
          <ul className="list-disc list-inside text-xs">
            <li>Instant medical advice</li>
            <li>Prescription refills</li>
            <li>Lab result interpretations</li>
          </ul>
        </div>
      </MobileFrame>
    </div>
  );
}

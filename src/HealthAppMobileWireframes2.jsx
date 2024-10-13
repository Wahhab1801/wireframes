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
  Save,
  Edit2,
  CheckCircle,
  Mail,
  UserPlus,
  XCircle,
  AlertCircle,
  Key,
  Phone,
  MapPin,
  Shield,
} from "lucide-react";

const MobileFrame = ({ children, title }) => (
  <div className="border-4 border-gray-800 rounded-3xl p-4 mb-8 w-72 h-[640px] bg-white relative overflow-hidden">
    <div className="bg-white py-2 px-4 mb-4 flex justify-between items-center border-b border-gray-200">
      <ArrowLeft size={20} />
      <h2 className="text-lg font-bold">{title}</h2>
      <Bell size={20} />
    </div>
    <div className="overflow-y-auto h-[calc(100%-4rem)] hide-scrollbar">
      {children}
    </div>
    <AppBar />
  </div>
);

const Input = ({ placeholder, defaultValue }) => (
  <input
    className="border border-gray-300 p-2 mb-3 w-full rounded-lg text-sm text-gray-700 placeholder-gray-400"
    placeholder={placeholder}
    defaultValue={defaultValue}
  />
);

const Button = ({ children, primary, icon: Icon }) => (
  <button
    className={`w-full py-2 px-4 rounded-lg mb-3 flex items-center justify-center text-sm ${
      primary ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
    }`}
  >
    {Icon && <Icon size={16} className="mr-2" />}
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

const ProfileItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center mb-3">
    <Icon size={18} className="text-gray-500 mr-3" />
    <div>
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  </div>
);

const FeedbackMessage = ({ type, message }) => {
  const icons = {
    success: <CheckCircle size={20} className="text-green-500 mr-2" />,
    error: <XCircle size={20} className="text-red-500 mr-2" />,
    info: <AlertCircle size={20} className="text-blue-500 mr-2" />,
  };

  const bgColors = {
    success: "bg-green-100",
    error: "bg-red-100",
    info: "bg-blue-100",
  };

  return (
    <div className={`flex items-center p-3 rounded-lg mb-4 ${bgColors[type]}`}>
      {icons[type]}
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default function MobileAppWireframes() {
  return (
    <div className="flex flex-wrap gap-8 justify-center w-1/2">
      <MobileFrame title="Sign Up">
        <Input placeholder="Full Name" />
        <Input placeholder="Email" />
        <div className="flex mb-3">
          <select className="border border-gray-300 p-2 rounded-l-lg text-sm text-gray-700 w-1/4">
            <option>+1</option>
            <option>+44</option>
            <option>+91</option>
            {/* Add more country codes as needed */}
          </select>
          <input
            className="border border-gray-300 p-2 rounded-r-lg text-sm text-gray-700 w-3/4"
            placeholder="Phone Number"
          />
        </div>
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
        <div className="mb-3 text-xs">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
        </div>
        <Button primary icon={UserPlus}>
          Sign Up
        </Button>
        <div className="text-center text-sm text-gray-500 mt-3">
          Already have an account? <span className="text-blue-500">Log In</span>
        </div>
      </MobileFrame>

      <MobileFrame title="Email Sent">
        <div className="text-center mb-6">
          <Mail size={48} className="inline-block text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Verification Email Sent
          </h3>
          <p className="text-sm text-gray-600">
            We've sent a verification link to your email address. Please check
            your inbox and click the link to verify your account.
          </p>
        </div>
        <Button primary icon={Mail}>
          Open Email App
        </Button>
        <div className="text-center text-sm text-blue-500 mt-3 cursor-pointer">
          Resend verification email
        </div>
        <div className="text-center text-sm text-gray-500 mt-3">
          Didn't receive the email? Check your spam folder or{" "}
          <span className="text-blue-500 cursor-pointer">contact support</span>.
        </div>
      </MobileFrame>

      <MobileFrame title="Email Verification">
        <div className="text-center mb-6">
          <CheckCircle size={48} className="inline-block text-green-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Verify Your Email</h3>
          <p className="text-sm text-gray-600 mb-4">
            Enter the 6-digit code we sent to your email to complete the
            verification process.
          </p>
        </div>
        <div className="flex justify-between mb-4">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              className="w-10 h-12 border border-gray-300 rounded text-center text-lg"
              maxLength="1"
            />
          ))}
        </div>
        <Button primary icon={Lock}>
          Verify Email
        </Button>
        <div className="text-center text-sm text-blue-500 mt-3 cursor-pointer">
          Resend verification code
        </div>
        <div className="text-center text-sm text-gray-500 mt-3">
          Having trouble?{" "}
          <span className="text-blue-500 cursor-pointer">Contact support</span>
        </div>
      </MobileFrame>

      <MobileFrame title="Email Verified">
        <div className="text-center mb-6">
          <CheckCircle size={64} className="inline-block text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Email Verified Successfully!
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Your email has been verified. You can now access all features of the
            app.
          </p>
        </div>
        <Button primary icon={User}>
          Complete Profile
        </Button>
        <Button icon={Home}>Go to Dashboard</Button>
      </MobileFrame>

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

      <MobileFrame title="User Consent">
        <div className="mb-4">
          <Shield size={48} className="text-blue-500 mx-auto mb-2" />
          <h2 className="text-xl font-semibold text-center mb-2">
            Data Privacy and Consent
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            We value your privacy and want to ensure you understand how we use
            your data.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">We collect and process:</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Personal information (name, email, phone)</li>
            <li>Health data (blood tests, medications)</li>
            <li>App usage information</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">We use this data to:</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Provide personalized health insights</li>
            <li>Improve our services</li>
            <li>Send important notifications</li>
          </ul>
        </div>

        <div className="mb-4">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />I agree to the collection
            and processing of my data as described in the Privacy Policy
          </label>
        </div>

        <div className="mb-4">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />I agree to receive
            notifications and updates about my health (optional)
          </label>
        </div>

        <Button primary>I Agree</Button>
        <Button>Decline</Button>

        <p className="text-xs text-center mt-4 text-gray-500">
          You can change your preferences anytime in Settings. For more
          information, read our full{" "}
          <span className="text-blue-500">Privacy Policy</span>.
        </p>
      </MobileFrame>

      <MobileFrame title="Forgot Password">
        <div className="text-center mb-6">
          <Key size={48} className="inline-block text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Reset Your Password</h3>
          <p className="text-sm text-gray-600 mb-4">
            Enter your email address below. We'll send you a link to reset your
            password.
          </p>
        </div>
        <Input placeholder="Email Address" />
        <Button primary icon={Mail}>
          Send Reset Link
        </Button>
        <div className="text-center text-sm text-gray-500 mt-4">
          Remembered your password?{" "}
          <span className="text-blue-500 cursor-pointer">Log In</span>
        </div>
      </MobileFrame>

      <MobileFrame title="Password Reset Sent">
        <div className="text-center mb-6">
          <CheckCircle size={48} className="inline-block text-green-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Reset Link Sent</h3>
          <p className="text-sm text-gray-600 mb-4">
            We've sent a password reset link to your email address. Please check
            your inbox and follow the instructions to reset your password.
          </p>
        </div>
        <Button primary icon={Mail}>
          Open Email App
        </Button>
        <div className="text-center text-sm text-blue-500 mt-3 cursor-pointer">
          Resend reset link
        </div>
        <div className="text-center text-sm text-gray-500 mt-3">
          Didn't receive the email? Check your spam folder or{" "}
          <span className="text-blue-500 cursor-pointer">contact support</span>.
        </div>
      </MobileFrame>

      <MobileFrame title="Reset Password">
        <div className="text-center mb-6">
          <Shield size={48} className="inline-block text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Create New Password</h3>
          <p className="text-sm text-gray-600 mb-4">
            Please enter a new password for your account. Choose a strong
            password to keep your account secure.
          </p>
        </div>
        <Input placeholder="New Password" type="password" />
        <Input placeholder="Confirm New Password" type="password" />
        <div className="text-xs text-gray-500 mb-4">
          Password must be at least 8 characters long and include a mix of
          letters, numbers, and symbols.
        </div>
        <Button primary icon={Lock}>
          Update Password
        </Button>
      </MobileFrame>

      <MobileFrame title="Password Updated">
        <div className="text-center mb-6">
          <CheckCircle size={64} className="inline-block text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Password Successfully Updated!
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Your password has been changed. You can now use your new password to
            log in to your account.
          </p>
        </div>
        <Button primary icon={User}>
          Log In
        </Button>
        <Button icon={Home}>Go to Home</Button>
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

      <MobileFrame title="Dashboard">
        <FeedbackMessage
          type="success"
          message="Blood test results uploaded successfully!"
        />

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

      {/* Blood Test Analysis */}
      <MobileFrame title="Analysis Results">
        <div className="mb-4 text-sm">
          Your blood test results have been analyzed. See details below:
        </div>

        <div className="mb-3 bg-gray-100 p-2 rounded text-sm">
          <h3 className="font-bold">Hemoglobin:</h3>
          <div>
            14.2 g/dL - <span className="text-green-500">Normal</span>
          </div>
          <div className="text-xs text-gray-600">
            Explanation: Hemoglobin levels are within the normal range. No
            action required.
          </div>
        </div>

        <div className="mb-3 bg-gray-100 p-2 rounded text-sm">
          <h3 className="font-bold">Glucose:</h3>
          <div>
            110 mg/dL - <span className="text-red-500">Abnormal</span>
          </div>
          <div className="text-xs text-gray-600">
            Explanation: Glucose levels are slightly elevated. Consider a
            follow-up test and lifestyle changes.
          </div>
        </div>

        <Button icon={Save}>Save Analysis</Button>
        <Button icon={Edit2}>Edit Results</Button>
        <Button primary icon={CheckCircle}>
          View Detailed Analysis
        </Button>
      </MobileFrame>

      <MobileFrame title="Medication Entry">
        <FeedbackMessage
          type="error"
          message="Failed to add medication. Please try again."
        />

        <Input placeholder="Medication Name" />
        <Input placeholder="Dosage" />
        <Input placeholder="Frequency" />
        <Input placeholder="Start Date" />
        <Button primary icon={Pill}>
          Add Medication
        </Button>
        <Button icon={Activity}>Check Interactions</Button>
      </MobileFrame>

      {/* Interaction Results Screen */}
      <MobileFrame title="Interaction Results">
        <div className="mb-3 bg-red-100 p-2 rounded text-sm">
          <h3 className="font-bold text-red-500">Interaction Warning:</h3>
          <div>
            Metformin and Lisinopril may interact to cause hypoglycemia.
          </div>
          <div className="text-xs text-gray-600">
            Suggested Action: Monitor blood sugar closely or consult your doctor
            for alternative medications.
          </div>
        </div>

        <div className="mb-3 bg-red-100 p-2 rounded text-sm">
          <h3 className="font-bold text-red-500">Interaction Warning:</h3>
          <div>Ibuprofen and Lisinopril may cause kidney issues.</div>
          <div className="text-xs text-gray-600">
            Suggested Action: Avoid taking these medications together without
            medical advice.
          </div>
        </div>

        <Button icon={Pill}>Add Medication</Button>
        <Button icon={Activity}>Check Interactions</Button>
        <Button primary icon={Save}>
          Save Results
        </Button>
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
        <FeedbackMessage
          type="info"
          message="Please enter all required fields for accurate results."
        />

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

      <MobileFrame title="User Profile">
        <div className="text-center mb-4">
          <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-2 flex items-center justify-center">
            <User size={36} className="text-gray-600" />
          </div>
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-xs text-gray-500">Member since: January 2023</p>
        </div>
        <ProfileItem icon={Mail} label="Email" value="john.doe@example.com" />
        <ProfileItem icon={Phone} label="Phone" value="+1 (555) 123-4567" />
        <ProfileItem
          icon={MapPin}
          label="Address"
          value="123 Main St, City, Country"
        />
        <ProfileItem icon={Activity} label="Health Status" value="Good" />
        <Button primary icon={Edit2}>
          Edit Profile
        </Button>
        <Button icon={Lock}>Change Password</Button>
      </MobileFrame>

      <MobileFrame title="Edit Profile">
        <div className="mb-4 text-center">
          <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-2 flex items-center justify-center relative">
            <User size={36} className="text-gray-600" />
            <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1.5">
              <Camera size={12} className="text-white" />
            </div>
          </div>
          <p className="text-xs text-blue-500">Change Profile Picture</p>
        </div>
        <Input placeholder="Full Name" defaultValue="John Doe" />
        <Input placeholder="Email" defaultValue="john.doe@example.com" />
        <div className="flex mb-3">
          <select className="border border-gray-300 p-2 rounded-l-lg text-sm text-gray-700 w-1/4">
            <option>+1</option>
            <option>+44</option>
            <option>+91</option>
          </select>
          <input
            className="border border-gray-300 p-2 rounded-r-lg text-sm text-gray-700 w-3/4"
            placeholder="Phone Number"
            defaultValue="(555) 123-4567"
          />
        </div>
        <Input
          placeholder="Address"
          defaultValue="123 Main St, City, Country"
        />
        <select className="border border-gray-300 p-2 mb-3 w-full rounded-lg text-sm text-gray-700">
          <option>Select Health Status</option>
          <option selected>Good</option>
          <option>Fair</option>
          <option>Poor</option>
        </select>
        <Button primary icon={CheckCircle}>
          Save Changes
        </Button>
        <Button icon={XCircle}>Cancel</Button>
      </MobileFrame>
    </div>
  );
}

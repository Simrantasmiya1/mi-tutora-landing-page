import { useState } from 'react';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    studentType: '',
    classGrade: '',
    parentName: '',
    demoMode: '',
    preferredDate: '',
    preferredTime: '',
    board: '',
    subjects: '',
    classMode: '',
    studyHours: '',
    studyDays: '',
    learningGoal: '',
    heardAbout: '',
    requirements: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
🎓 NEW FREE DEMO REQUEST

👤 Student Name:
${formData.fullName}

🚻 Gender:
${formData.gender}

📞 Phone Number:
${formData.phone}

💬 WhatsApp Number:
${formData.whatsapp}

📧 Email:
${formData.email}

🏠 Residential Address:
${formData.address}

👨‍🎓 I Am A:
${formData.studentType}

🏫 Class / Grade:
${formData.classGrade}

👨 Parent / Guardian:
${formData.parentName}

🌐 Preferred Demo Mode:
${formData.demoMode}

📅 Preferred Date:
${formData.preferredDate}

⏰ Preferred Time:
${formData.preferredTime}

📚 Board:
${formData.board}

📖 Subjects Interested:
${formData.subjects}

💻 Preferred Class Mode:
${formData.classMode}

🕒 Study Hours Per Day:
${formData.studyHours}

📆 Study Days Per Week:
${formData.studyDays}

🎯 Learning Goal:
${formData.learningGoal}

📢 Heard About Us:
${formData.heardAbout}

📝 Special Requirements:
${formData.requirements}
`;

    window.open(
      `https://wa.me/917483034168?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl w-full max-w-6xl mx-auto max-h-[90vh] overflow-y-auto">

      <h1 className="text-4xl font-bold mb-3 text-black">
        Student Details Form
      </h1>

      <p className="text-gray-500 mb-10">
        Fill in your details to book your free demo session.
      </p>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

        {/* FULL NAME */}
        <div>
          <label className="font-semibold block mb-2">
            Full Name *
          </label>

          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* GENDER */}
        <div>
          <label className="font-semibold block mb-2">
            Gender *
          </label>

          <div className="flex gap-6 mt-4">
            {['Female', 'Male', 'Other'].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2"
              >
                <input
                  type="radio"
                  name="gender"
                  value={item}
                  onChange={handleChange}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* PHONE */}
        <div>
          <label className="font-semibold block mb-2">
            Phone Number *
          </label>

          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* WHATSAPP */}
        <div>
          <label className="font-semibold block mb-2">
            WhatsApp No. *
          </label>

          <input
            type="text"
            name="whatsapp"
            placeholder="Enter WhatsApp number"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="font-semibold block mb-2">
            Email ID *
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* ADDRESS */}
        <div>
          <label className="font-semibold block mb-2">
            Residential Address *
          </label>

          <textarea
            rows={4}
            name="address"
            placeholder="Enter full address"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* I AM A */}
        <div>
          <label className="font-semibold block mb-2">
            I am a *
          </label>

          <select
            name="studentType"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Select an option</option>
            <option>School Student</option>
            <option>College Student</option>
            <option>Working Professional</option>
          </select>
        </div>

        {/* CLASS */}
        <div>
          <label className="font-semibold block mb-2">
            Class / Grade *
          </label>

          <select
            name="classGrade"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Select class</option>
            <option>KG - 5</option>
            <option>6 - 8</option>
            <option>9 - 10</option>
            <option>11 - 12</option>
            <option>JEE / NEET</option>
            <option>Degree</option>
          </select>
        </div>

        {/* PARENT */}
        <div>
          <label className="font-semibold block mb-2">
            Parent / Guardian Name *
          </label>

          <input
            type="text"
            name="parentName"
            placeholder="Enter parent name"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* DEMO MODE */}
        <div>
          <label className="font-semibold block mb-2">
            Preferred Mode of Demo *
          </label>

          <div className="grid grid-cols-2 gap-4">
            {['Online', 'Offline'].map((item) => (
              <label
                key={item}
                className="border rounded-lg p-4 flex items-center gap-3"
              >
                <input
                  type="radio"
                  name="demoMode"
                  value={item}
                  onChange={handleChange}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* DATE */}
        <div>
          <label className="font-semibold block mb-2">
            Preferred Date *
          </label>

          <input
            type="date"
            name="preferredDate"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* TIME */}
        <div>
          <label className="font-semibold block mb-2">
            Preferred Time *
          </label>

          <input
            type="time"
            name="preferredTime"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* BOARD */}
        <div>
          <label className="font-semibold block mb-2">
            Board / Education System *
          </label>

          <select
            name="board"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Select board</option>
            <option>CBSE</option>
            <option>ICSE</option>
            <option>State Board</option>
            <option>IB</option>
            <option>IGCSE</option>
          </select>
        </div>

        {/* SUBJECTS */}
        <div>
          <label className="font-semibold block mb-2">
            Subjects you are interested in *
          </label>

          <input
            type="text"
            name="subjects"
            placeholder="Math, Science, English"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* CLASS MODE */}
        <div>
          <label className="font-semibold block mb-2">
            Preferred Mode of Classes *
          </label>

          <div className="grid grid-cols-2 gap-4">
            {['Online', 'Offline'].map((item) => (
              <label
                key={item}
                className="border rounded-lg p-4 flex items-center gap-3"
              >
                <input
                  type="radio"
                  name="classMode"
                  value={item}
                  onChange={handleChange}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* HOURS */}
        <div>
          <label className="font-semibold block mb-2">
            How many hours per day? *
          </label>

          <select
            name="studyHours"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Select hours</option>
            <option>1 Hour</option>
            <option>2 Hours</option>
            <option>3 Hours</option>
            <option>4+ Hours</option>
          </select>
        </div>

        {/* DAYS */}
        <div>
          <label className="font-semibold block mb-2">
            How many days per week? *
          </label>

          <select
            name="studyDays"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Select days</option>
            <option>2 Days</option>
            <option>3 Days</option>
            <option>5 Days</option>
            <option>Daily</option>
          </select>
        </div>

        {/* GOAL */}
        <div>
          <label className="font-semibold block mb-2">
            Main goal for learning? *
          </label>

          <textarea
            rows={4}
            name="learningGoal"
            placeholder="Write your learning goal"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* HEARD */}
        <div>
          <label className="font-semibold block mb-2">
            How did you hear about us?
          </label>

          <select
            name="heardAbout"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Select option</option>
            <option>Instagram</option>
            <option>WhatsApp</option>
            <option>Friend</option>
            <option>Google</option>
          </select>
        </div>

        {/* TECH */}
        <div className="md:col-span-2">
          <label className="font-semibold block mb-3">
            Technical Languages you want to learn
          </label>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'Python',
              'Java',
              'AI & ML',
              'HTML',
              'Data Analytics',
              'Gen AI',
              'Agentic AI',
            ].map((item) => (
              <label
                key={item}
                className="border rounded-lg px-3 py-3 flex items-center gap-2"
              >
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* LANGUAGES */}
        <div className="md:col-span-2">
          <label className="font-semibold block mb-3">
            Languages you want to learn
          </label>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'Arabic',
              'English',
              'German',
              'Japanese',
            ].map((item) => (
              <label
                key={item}
                className="border rounded-lg px-3 py-3 flex items-center gap-2"
              >
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* REQUIREMENTS */}
        <div className="md:col-span-2">
          <label className="font-semibold block mb-2">
            Any specific requirements or information?
          </label>

          <textarea
            rows={5}
            name="requirements"
            placeholder="Write anything you would like us to know"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* TERMS */}
        <div className="md:col-span-2 flex items-center gap-2">
          <input type="checkbox" required />
          <span>
            I agree to Terms & Conditions and Privacy Policy
          </span>
        </div>

        {/* BUTTON */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl text-lg font-semibold transition"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
}
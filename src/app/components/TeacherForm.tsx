import { useState } from 'react';

export default function TeacherForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    qualification: '',
    experience: '',
    subjects: '',
    teachingApproach: '',
    currentStudents: '',
    schoolNames: '',
    preferredLocation: '',
    travelKm: '',
    feeRange: '',
    mode: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
🎓 NEW TEACHER APPLICATION

👤 Full Name: ${formData.fullName}
🚻 Gender: ${formData.gender}
📞 Phone: ${formData.phone}
💬 WhatsApp: ${formData.whatsapp}
📧 Email: ${formData.email}

🏠 Address:
${formData.address}

🎓 Qualification:
${formData.qualification}

📚 Experience:
${formData.experience}

📖 Subjects:
${formData.subjects}

🌐 Preferred Mode:
${formData.mode}

📝 Teaching Approach:
${formData.teachingApproach}

👨‍🎓 Current Students:
${formData.currentStudents}

🏫 School Names:
${formData.schoolNames}

📍 Preferred Locations:
${formData.preferredLocation}

🚗 Travel KM:
${formData.travelKm}

💰 Expected Fee:
${formData.feeRange}
`;

    window.open(
      `https://wa.me/917483034168?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl w-full max-w-4xl mx-auto max-h-[90vh] overflow-y-auto">

      <h1 className="text-4xl font-bold mb-10 text-black">
        Teacher Information Form
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* FULL NAME */}
        <div>
          <label className="font-semibold block mb-2">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* GENDER */}
        <div>
          <label className="font-semibold block mb-3">
            Gender
          </label>

          <div className="space-y-2">
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
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* WHATSAPP */}
        <div>
          <label className="font-semibold block mb-2">
            Whatsapp No.
          </label>

          <input
            type="text"
            name="whatsapp"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="font-semibold block mb-2">
            Email_Id
          </label>

          <input
            type="email"
            name="email"
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
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* FILE */}
        <div>
          <label className="font-semibold block mb-2">
            Your resume/CV (if available)
          </label>

          <input
            type="file"
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* QUALIFICATION */}
        <div>
          <label className="font-semibold block mb-2">
            Highest Qualification *
          </label>

          <input
            type="text"
            name="qualification"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* EXPERIENCE */}
        <div>
          <label className="font-semibold block mb-2">
            Total Teaching Experience (in Years)
          </label>

          <input
            type="text"
            name="experience"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* OCCUPATION */}
        <div>
          <label className="font-semibold block mb-3">
            Current Occupation
          </label>

          <div className="space-y-3">
            {[
              'Freelancer',
              'Full-Time Teacher',
              'Others',
              'Student',
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 border rounded-lg px-4 py-3"
              >
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* SUBJECTS */}
        <div>
          <label className="font-semibold block mb-2">
            Subjects you Teach *
          </label>

          <input
            type="text"
            name="subjects"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* CLASSES */}
        <div>
          <label className="font-semibold block mb-3">
            Classes you Teach *
          </label>

          <div className="space-y-2">
            {[
              'KG - 5',
              '6 - 8',
              '9 - 10',
              'JEE / NEET',
              '11 - 12',
              'Others',
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2"
              >
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* BOARD */}
        <div>
          <label className="font-semibold block mb-3">
            Preferred Teaching Board *
          </label>

          <div className="space-y-2">
            {[
              'ICSE',
              'CBSE',
              'Others',
              'IB / IGCSE / International',
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2"
              >
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* TECH LANGUAGES */}
        <div>
          <label className="font-semibold block mb-3">
            Technical Languages you Teach
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
        <div>
          <label className="font-semibold block mb-3">
            Languages You Teach
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

        {/* MODE */}
        <div>
          <label className="font-semibold block mb-3">
            Preferred Mode
          </label>

          <div className="grid grid-cols-2 gap-4">
            {['Online', 'Offline'].map((item) => (
              <label
                key={item}
                className="border rounded-lg px-4 py-3 flex items-center gap-3"
              >
                <input
                  type="radio"
                  name="mode"
                  value={item}
                  onChange={handleChange}
                />

                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* APPROACH */}
        <div>
          <label className="font-semibold block mb-2">
            Brief Description of Your Teaching Approach *
          </label>

          <textarea
            rows={5}
            name="teachingApproach"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* CURRENT STUDENTS */}
        <div>
          <label className="font-semibold block mb-2">
            How many students are you currently teaching?
          </label>

          <input
            type="text"
            name="currentStudents"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* SCHOOL */}
        <div>
          <label className="font-semibold block mb-2">
            Mention school names of your current students (if any)
          </label>

          <input
            type="text"
            name="schoolNames"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* LOCATION */}
        <div>
          <label className="font-semibold block mb-2">
            Preferred Locations (Mention Areas name / Pin code) *
          </label>

          <input
            type="text"
            name="preferredLocation"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* TRAVEL */}
        <div>
          <label className="font-semibold block mb-2">
            Willing to travel within km
          </label>

          <input
            type="text"
            name="travelKm"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* FEES */}
        <div>
          <label className="font-semibold block mb-2">
            Expected Monthly Fee Range (Per student) *
          </label>

          <input
            type="text"
            name="feeRange"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg"
        >
          Submit →
        </button>

      </form>
    </div>
  );
}